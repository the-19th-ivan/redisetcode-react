import { Button, Card, Input, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { host } from "../../utils/env";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      await axios.post(`${host}/api/v1/auth/forgot-password`, {
        email,
      });
      setIsLoading(false);
      setConfirm(true);
    } catch (error) {
      // If status 500 then display server error page
      navigate("/server-error");
      setIsLoading(false);
    }
  }

  return (
    <>
      <main className="p-4 w-full h-screen bg-primary flex items-center justify-center">
        {confirm ? (
          <div className="text-center">
            <Typography variant="h1" className="text-gray-800">
              Check Your Email
            </Typography>
            <Typography>
              We sent a link to your email to reset your password.
            </Typography>
          </div>
        ) : (
          <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
              Forgot Password
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Please fill out the details to proceed.
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Email
                </Typography>
                <Input
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  size="lg"
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  required
                />
              </div>
              {isLoading ? (
                <Button className="mt-6" fullWidth disabled>
                  Reset Password
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  type="button"
                  color="green"
                  className="mt-6"
                  fullWidth
                >
                  Reset Password
                </Button>
              )}
            </form>
          </Card>
        )}
      </main>
    </>
  );
}
