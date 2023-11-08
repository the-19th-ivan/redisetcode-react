import {
  Avatar,
  Button,
  Card,
  CardBody,
  Chip,
  Spinner,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import Navbar from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { GiAchievement, GiFireGem, GiPoliceBadge } from "react-icons/gi";
import { HiArrowNarrowUp } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import MobileNav from "../../components/MobileNav";
import { host } from "../../utils/env";

export default function Profile() {
  const [cookies, setCookie] = useCookies(["jwt"]);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const navigate = useNavigate();
  const { username } = useParams();

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
          `${host}/api/v1/users/profile/${username}`,
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
  }, [cookies.jwt, navigate, username]);

  function handleLogout() {
    // Set the expiration time to a past date to invalidate and remove the cookie
    setCookie("jwt", "", { path: "/", expires: new Date(0) });
    localStorage.removeItem("userInfo");
    navigate("/");
  }

  return (
    <main className="bg-primary h-screen">
      <Sidebar />

      <section className="lg:ml-[15rem]">
        <Navbar />
        <MobileNav />

        {isLoading ? (
          <div className="h-[90vh] flex items-center justify-center">
            <Spinner color="indigo" />
          </div>
        ) : (
          <div className="p-4 lg:p-10">
            {/* Profile Info */}
            <div className="lg:flex gap-3">
              <div className="lg:w-1/5 flex justify-center">
                <img
                  className="w-36 rounded-full object-cover object-center"
                  src={user.character.avatar}
                />
              </div>
              <div className="lg:w-4/5 ">
                <div className="flex justify-center lg:justify-between lg:items-center">
                  <Typography
                    variant="h4"
                    className="text-gray-900 font-montserrat font-bold flex gap-4"
                  >
                    {user.username}
                    <Chip
                      color="indigo"
                      value="Basic"
                      size="sm"
                      className="hidden lg:block"
                    />
                  </Typography>
                  {userInfo.username === user.username && (
                    <div>
                      {/* <Button
                        color="blue"
                        variant="text"
                        onClick={() => navigate(`/profile/${user._id}/edit`)}
                        className="hidden lg:block"
                      >
                        Edit
                      </Button> */}
                      <Button
                        color="red"
                        onClick={handleLogout}
                        className="hidden lg:block"
                      >
                        Logout
                      </Button>
                    </div>
                  )}
                </div>

                <Typography
                  variant="lead"
                  className="text-gray-800 text-center lg:text-left font-montserrat"
                >
                  {user.character.name}
                </Typography>

                <div className="mt-6 grid md:grid-cols-3 w-full gap-10">
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

                  {user.badges.length === 0 ? (
                    <div className="flex justify-center items-center p-10">
                      No Badges Available
                    </div>
                  ) : (
                    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">
                      {user.badges.map((badge) => (
                        <Tooltip
                          content={badge.description}
                          placement="bottom"
                          key={badge._id}
                        >
                          <div className="flex flex-col items-center justify-center gap-3">
                            <Avatar src={badge.image} alt="avatar" size="xl" />
                            <Typography
                              variant="h6"
                              className="text-gray-900 font-montserrat font-semibold"
                            >
                              {badge.name}
                            </Typography>
                          </div>
                        </Tooltip>
                      ))}
                    </div>
                  )}
                </CardBody>
              </Card>
            </div>
            <Button
              color="red"
              onClick={handleLogout}
              className="lg:hidden w-full mt-10"
            >
              Logout
            </Button>
          </div>
        )}
      </section>
    </main>
  );
}
