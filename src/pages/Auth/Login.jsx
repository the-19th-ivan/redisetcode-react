import { HiOutlineLockClosed } from "react-icons/hi";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const [serverError, setServerError] = useState({});
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <main className="p-10 bg-primary">
      <section className="flex justify-center items-center">
        <div className="w-3/5 p-20">
          <img
            className="w-full object-cover object-center"
            src="/login_cover.svg"
          />
        </div>
        <div className="w-2/5">
          <Card className="bg-secondary">
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
                // onSubmit={handleSubmit(onSubmit)}
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
                  <Button color="green" className="w-full font-montserrat">
                    Login
                  </Button>
                </div>
              </form>

              <div className="text-center text-gray-800 font-montserrat">
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
