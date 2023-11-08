import { Button, Card, Input, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { host } from "../../utils/env";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import oneMonthFromNow from "../../utils/expiration";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

export default function ResetPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(["jwt"]);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { tokenId } = useParams();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${host}/api/v1/auth/reset-password/${tokenId}`,
        {
          password,
        }
      );

      // Handle the response from the server
      const token = response.data.token;
      const user = response.data.data.user;
      setCookie("jwt", token, { path: "/", expires: oneMonthFromNow });
      localStorage.setItem("userInfo", JSON.stringify(user));

      setIsLoading(false);

      navigate("/map");
    } catch (error) {
      console.log(error);
      // If status 500 then display server error page
      navigate("/server-error");
      setIsLoading(false);
    }
  }

  return (
    <>
      <main className="p-4 w-full h-screen bg-primary flex items-center justify-center">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Reset Password
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Please fill out the details to proceed.
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your New Password
              </Typography>
              <Input
                name="password"
                value={password}
                onChange={handlePasswordChange}
                size="lg"
                type={showPassword ? "text" : "password"}
                placeholder="Minimum of 8 characters"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                icon={
                  <p
                    className="cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <HiOutlineEyeOff className="text-xl" />
                    ) : (
                      <HiOutlineEye className="text-xl" />
                    )}
                  </p>
                }
                required
              />
            </div>
            {isLoading ? (
              <Button className="mt-6" fullWidth disabled>
                Change Password
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                type="button"
                color="green"
                className="mt-6"
                fullWidth
              >
                Change Password
              </Button>
            )}
          </form>
        </Card>
      </main>
    </>
  );
}
