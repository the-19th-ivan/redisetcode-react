/* eslint-disable react/prop-types */
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import {
  HiOutlineEnvelope,
  HiOutlineLockClosed,
  HiOutlineUser,
} from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import axios from "axios";
import { useForm } from "react-hook-form";
import BadgeModal from "../../components/modals/BadgeModal";
import oneMonthFromNow from "../../utils/expiration";
import { host } from "../../utils/env";

// Signup card component
export function SignupForm({ character, onConfetti }) {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(["jwt"]); // Do not remove cookies even if not used or it will cause error
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // Submit credentials and signup
  async function onSubmit(data) {
    setIsLoading(true);

    const { username, email, password } = data;
    const newUser = {
      username,
      email,
      password,
      characterId: character,
    };

    try {
      // Make API call to send user credentials
      const response = await axios.post(`${host}/api/v1/auth/signup`, newUser);

      // Handle the response from the server
      const { token } = response.data;
      const user = response.data.data.user;
      setCookie("jwt", token, { path: "/", expires: oneMonthFromNow });
      localStorage.setItem("userInfo", JSON.stringify(user));

      setIsLoading(false);
      reset();
      setServerError({});

      if (user.badges.length !== 0) {
        setOpenModal(true);
        onConfetti();
        return;
      }
      navigate("/verify");
    } catch (error) {
      if (error.response.status === 400) {
        // Set the server error if there is an error from the server
        const responseErrors = error.response.data.errors;
        responseErrors.forEach((error) => {
          errors[error.path] = { message: error.msg };
        });
        setServerError(errors);
      } else {
        // If status 500 then display server error page
        navigate("/server-error");
      }
      setIsLoading(false);
    }
  }

  return (
    <Card className="mt-8 lg:mt-0">
      <CardBody className="bg-secondary rounded-lg">
        <section className="">
          <div className="text-center dark:text-white">
            <Link to="/">
              <Typography
                variant="h3"
                className="text-gray-900 font-mavenPro font-black"
              >
                RediSetCode
              </Typography>
            </Link>
            <Typography
              variant="small"
              className="text-gray-800 font-montserrat uppercase"
            >
              Create new account
            </Typography>
          </div>
          <form
            className="my-8 space-y-8"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            {/* Username */}
            <Input
              type="text"
              name="username"
              placeholder="Username"
              register={register("username", {
                required: "Username is required.",
                minLength: {
                  value: 3,
                  message: "Username must be atleast 3 characters long",
                },
              })}
              error={errors.username || serverError.username}
            >
              <HiOutlineUser />
            </Input>
            {/* Email */}
            <Input
              type="email"
              name="email"
              placeholder="Email"
              register={register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is not valid.",
                },
              })}
              error={errors.email || serverError.email}
            >
              <HiOutlineEnvelope />
            </Input>

            {/* Password */}
            <Input
              type="password"
              name="password"
              placeholder="Password"
              register={register("password", {
                required: "Password is required.",
                minLength: {
                  value: 8,
                  message: "Password must be atleast 8 character long.",
                },
              })}
              error={errors.password || serverError.password}
            >
              <HiOutlineLockClosed />
            </Input>

            <div>
              <div className="flex justify-center">
                {isLoading ? (
                  <Button
                    type="submit"
                    color="gray"
                    disabled
                    className="w-full font-montserrat"
                  >
                    Signing up...
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    color="green"
                    className="w-full font-montserrat"
                  >
                    Create An Account
                  </Button>
                )}
              </div>
            </div>
          </form>

          <div className="text-center text-gray-800">
            <p className="font-montserrat italic">Already have an account?</p>
            <Link
              to="/login"
              className="text-indigo-600 hover:underline italic"
            >
              Login here
            </Link>
          </div>

          <p className="mt-10 text-sm italic text-center text-gray-800 font-montserrat">
            **Note: Character cannot be change later on**
          </p>
        </section>
      </CardBody>

      <BadgeModal
        open={openModal}
        handleOpen={() => {
          setOpenModal(false);
          navigate("/verify");
        }}
        badge={{
          _id: "65335d072eee7695841b9aef",
          name: "Early Bird",
          image: "/badges/early-bird.svg",
          description: "The first user of RediSetCode",
        }}
      />
    </Card>
  );
}
