import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import {
  HiOutlineEnvelope,
  HiOutlineLockClosed,
  HiOutlineUser,
} from "react-icons/hi2";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Signup() {
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <main className="bg-primary">
      <section className="p-10 flex gap-6">
        <div className="w-3/5 flex flex-col items-center">
          <div className="flex gap-6 items-center">
            <Button variant="text">Prev</Button>
            <img
              className="w-36 h-36 rounded-full object-cover object-center"
              src="/knight.png"
              alt="nature image"
            />
            <Button variant="text">Next</Button>
          </div>
          <Typography variant="h4" className="mt-10 font-montserrat font-bold">
            Knight
          </Typography>
          <Typography variant="paragraph" className="mt-16 font-montserrat">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            quae officiis beatae, obcaecati sed assumenda dolorem ad impedit ex!
            Alias.
          </Typography>
        </div>
        <div className="w-2/5">
          <Card>
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
                  // onSubmit={handleSubmit(onSubmit)}
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

                  <div className="flex justify-center">
                    <Button color="green" className="w-full font-montserrat">
                      Create An Account
                    </Button>
                  </div>
                </form>

                <div className="text-center text-gray-800">
                  <p className="font-montserrat italic">
                    Already have an account?
                  </p>
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
          </Card>
        </div>
      </section>
    </main>
  );
}
