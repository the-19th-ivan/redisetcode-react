import { HiOutlineLockClosed } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";
import axios from "axios";
import oneMonthFromNow from "../../utils/expiration";
import { host } from "../../utils/env";

export default function Login() {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(["jwt"]); // Do not remove cookies even if not used or it will cause error
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState({});
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const redirectURL = localStorage.getItem("redirectURL");

  async function onSubmit(data) {
    setIsLoading(true);

    try {
      const response = await axios.post(`${host}/api/v1/auth/login`, data);

      // Handle successful login
      const token = response.data.token;
      const user = response.data.data.user;
      setCookie("jwt", token, { path: "/", expires: oneMonthFromNow });
      localStorage.setItem("userInfo", JSON.stringify(user));

      setIsLoading(false);
      reset();
      setServerError({});

      if (redirectURL) {
        localStorage.removeItem("redirectURL");
        navigate(redirectURL);
      } else {
        navigate("/map");
      }
    } catch (error) {
      // Handle error response
      const { status } = error.response;

      // Validation error from the server
      if (status === 400) {
        const responseErrors = error.response.data.errors;
        responseErrors.forEach((error) => {
          errors[error.path] = { message: error.msg };
        });
        reset({ password: "" });
        setServerError(errors);
      } else if (status === 401) {
        errors["email"] = { message: error.response.data.message };
        reset({ password: "" });
        setServerError(errors);
      } else {
        // Status 500
        navigate("/server-error");
      }
      setIsLoading(false);
    }
  }

  return (
    <main className="p-4 lg:p-10 bg-primary">
      <section className="flex h-screen justify-center items-center">
        <div className="hidden lg:block w-3/5 p-20">
          <img
            className="w-4/5 object-cover object-center"
            src="/login_cover.svg"
          />
        </div>
        <div className="w-full lg:w-2/5 flex justify-center">
          <Card className="bg-secondary md:w-3/4 lg:w-full">
            <CardBody>
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
                  Login to your account
                </Typography>
              </div>
              <form
                className="my-8 space-y-8"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                {/* Email */}
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  register={register("email", {
                    required: "Email is required.",
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
                  })}
                  error={errors.password || serverError.password}
                >
                  <HiOutlineLockClosed />
                </Input>

                {/* Button */}
                <div className="flex justify-center">
                  {isLoading ? (
                    <Button
                      type="submit"
                      color="gray"
                      disabled
                      className="w-full font-montserrat"
                    >
                      Loging in...
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      color="green"
                      className="w-full font-montserrat"
                    >
                      Login
                    </Button>
                  )}
                </div>
              </form>

              <div className="text-center text-gray-800 font-montserrat">
                <Link
                  to="/forgot-password"
                  className="cursor-pointer text-indigo-600 hover:underline italic"
                >
                  Forgot password?
                </Link>
                <Typography className="text-xs my-2">OR</Typography>
                <p className="italic">Don&apos;t have an account?</p>
                <Link
                  to="/signup"
                  className="text-indigo-600 hover:underline italic"
                >
                  Signup here
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    </main>
  );
}
