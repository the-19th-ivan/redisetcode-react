import {
  Avatar,
  Card,
  CardBody,
  Chip,
  Typography,
} from "@material-tailwind/react";
import Navbar from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { GiAchievement, GiFireGem, GiPoliceBadge } from "react-icons/gi";
import { HiArrowNarrowUp } from "react-icons/hi";

export default function Profile() {
  return (
    <main className="bg-primary">
      <Sidebar />

      <section className="sm:ml-[15rem]">
        <Navbar />

        <div className="p-10">
          {/* Profile Info */}
          <div className="flex gap-3">
            <div className="w-1/5 flex justify-center">
              <img
                className="w-36 rounded-full object-cover object-center"
                src="/knight.png"
              />
            </div>
            <div className="4/5">
              <Typography
                variant="h4"
                className="text-gray-900 font-montserrat font-bold flex gap-4"
              >
                Mr. Knight
                <Chip color="indigo" value="Basic" size="sm" />
              </Typography>
              <Typography
                variant="lead"
                className="text-gray-800 font-montserrat"
              >
                Knight
              </Typography>
              <div className="mt-6 grid grid-cols-3 w-full gap-10">
                <Typography
                  variant="h4"
                  className="text-gray-800 font-montserrat font-medium flex items-center gap-1"
                >
                  <GiFireGem className="text-xl text-red-600" />
                  999{" "}
                  <span className="text-gray-800 font-montserrat text-base">
                    Exp
                  </span>
                </Typography>

                <Typography
                  variant="h4"
                  className="text-gray-800 font-montserrat font-medium flex items-center gap-1"
                >
                  <HiArrowNarrowUp className="text-green-800 text-2xl" />5
                  <span className="text-gray-800 font-montserrat text-base">
                    Level
                  </span>
                </Typography>

                <Typography
                  variant="h4"
                  className="text-gray-800 font-montserrat font-medium flex items-center gap-1"
                >
                  <GiAchievement className="text-blue-600 text-2xl" />
                  10
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
      </section>
    </main>
  );
}
