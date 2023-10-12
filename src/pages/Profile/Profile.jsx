import {
  Avatar,
  Button,
  Card,
  CardBody,
  Chip,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import Navbar from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { GiAchievement, GiFireGem, GiPoliceBadge } from "react-icons/gi";
import { HiArrowNarrowUp } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Profile() {
  const [cookies, setCookie] = useCookies(["jwt"]);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  // Get the authenticated user based from the jwt token as Bearer Token
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        const config = {
          headers: {
            Authorization: `Bearer ${cookies.jwt}`,
          },
        };

        const response = await axios.get(
          "http://localhost:8000/api/v1/users/my-profile",
          config
        );

        const { user } = response.data.data;
        setUser(user);
        setIsLoading(false);
      } catch (error) {
        const status = error.response.status;

        if (status === 401) {
          // Not Authenticated, redirect to Login page
          navigate("/login");
        } else {
          // Status 500
          navigate("/server-error");
        }
        setIsLoading(false);
      }
    }
    fetchData();
  }, [cookies.jwt, navigate]);

  function handleLogout() {
    // Set the expiration time to a past date to invalidate and remove the cookie
    setCookie("jwt", "", { path: "/", expires: new Date(0) });
    localStorage.removeItem("userInfo");
    navigate("/");
  }

  return (
    <main className="bg-primary h-screen">
      <Sidebar />

      <section className="sm:ml-[15rem]">
        <Navbar />
        {isLoading ? (
          <div className="h-[90vh] flex items-center justify-center">
            <Spinner color="indigo" />
          </div>
        ) : (
          <div className="p-10">
            {/* Profile Info */}
            <div className="flex gap-3">
              <div className="w-1/5 flex justify-center">
                <img
                  className="w-36 rounded-full object-cover object-center"
                  src={user.character.avatar}
                />
              </div>
              <div className="4/5">
                <div className="flex justify-between">
                  <Typography
                    variant="h4"
                    className="text-gray-900 font-montserrat font-bold flex gap-4"
                  >
                    {user.username}
                    <Chip color="indigo" value="Basic" size="sm" />
                  </Typography>
                  <Button color="red" onClick={handleLogout}>
                    Logout
                  </Button>
                </div>

                <Typography
                  variant="lead"
                  className="text-gray-800 font-montserrat"
                >
                  {user.character.name}
                </Typography>
                <div className="mt-6 grid grid-cols-3 w-full gap-10">
                  <Typography
                    variant="h4"
                    className="text-gray-800 font-montserrat font-medium flex items-center gap-1"
                  >
                    <GiFireGem className="text-xl text-red-600" />
                    {user.experience}{" "}
                    <span className="text-gray-800 font-montserrat text-base">
                      Exp
                    </span>
                  </Typography>

                  <Typography
                    variant="h4"
                    className="text-gray-800 font-montserrat font-medium flex items-center gap-1"
                  >
                    <HiArrowNarrowUp className="text-green-800 text-2xl" />
                    {user.level}
                    <span className="text-gray-800 font-montserrat text-base">
                      Level
                    </span>
                  </Typography>

                  <Typography
                    variant="h4"
                    className="text-gray-800 font-montserrat font-medium flex items-center gap-1"
                  >
                    <GiAchievement className="text-blue-600 text-2xl" />
                    {user.completedStages.length}
                    <span className="text-gray-800 font-montserrat text-base">
                      Completed Lessons
                    </span>
                  </Typography>
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="mt-12">
              <Card className="bg-secondary">
                <CardBody>
                  <Typography
                    variant="h4"
                    className="text-gray-900 font-montserrat font-bold flex gap-3 items-center"
                  >
                    <GiPoliceBadge className="text-2xl text-green-800" />
                    Badges
                  </Typography>

                  <div className="mt-10 grid grid-cols-4 gap-10">
                    {/* Badge */}
                    <div className="flex flex-col items-center justify-center gap-3">
                      <Avatar src="/newbie.png" alt="avatar" size="xl" />
                      <Typography
                        variant="h6"
                        className="text-gray-900 font-montserrat font-semibold"
                      >
                        Newbie Kinobi
                      </Typography>
                    </div>
                    {/* Badge */}
                    <div className="flex flex-col items-center justify-center gap-3">
                      <Avatar src="/finisher.png" alt="avatar" size="xl" />
                      <Typography
                        variant="h6"
                        className="text-gray-900 font-montserrat font-semibold"
                      >
                        Finisher
                      </Typography>
                    </div>
                    {/* Badge */}
                    <div className="flex flex-col items-center justify-center gap-3">
                      <Avatar src="/first_user.png" alt="avatar" size="xl" />
                      <Typography
                        variant="h6"
                        className="text-gray-900 font-montserrat font-semibold"
                      >
                        First User
                      </Typography>
                    </div>
                    {/* Badge */}
                    <div className="flex flex-col items-center justify-center gap-3">
                      <Avatar src="/lucky.png" alt="avatar" size="xl" />
                      <Typography
                        variant="h6"
                        className="text-gray-900 font-montserrat font-semibold"
                      >
                        Lucky One
                      </Typography>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
