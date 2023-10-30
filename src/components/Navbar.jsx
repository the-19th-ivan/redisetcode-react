import { Avatar, Chip, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import {HiArrowNarrowLeft} from "react-icons/hi";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const lastPage = localStorage.getItem("lastPage");
  const navigate = useNavigate();

  return (
    <nav className="hidden lg:block bg-secondary border-b border-gray-400 px-10 py-2.5">
      <div className="flex justify-between items-center">
        {/* Left navbar */}
        {lastPage ? (
          <Typography
            onClick={() => {
              localStorage.removeItem("lastPage");
              navigate(lastPage);
            }}
            className="cursor-pointer flex items-center gap-2"
          >
            <HiArrowNarrowLeft /> <span>Go Back</span>
          </Typography>
        ) : (
          <div className="flex items-center space-x-8">
            <Typography
              as="li"
              variant="h6"
              className="font-poppins font-medium text-gray-800"
            >
              <a href="#" className="flex items-center">
                Home
              </a>
            </Typography>
            <Typography
              as="li"
              variant="h6"
              color="blue-gray"
              className="font-poppins font-medium text-gray-800"
            >
              <a href="#" className="flex items-center">
                About
              </a>
            </Typography>
            <Typography
              as="li"
              variant="h6"
              color="blue-gray"
              className="font-poppins font-medium text-gray-800"
            >
              <a href="#" className="flex items-center">
                FAQs
              </a>
            </Typography>
          </div>
        )}
        {/* Right navbar */}
        <div className="flex items-center space-x-6">
          <Link to={`/profile/${user.username}`} className="cursor-pointer">
            <div className="flex items-center gap-1">
              <Avatar
                src={user.character.avatar}
                alt="avatar"
                size="sm"
                variant="rounded"
              />
              <div>
                <Typography
                  variant="paragraph"
                  className="font-poppins font-medium"
                >
                  {user.username}
                </Typography>
                <Typography
                  variant="small"
                  className="font-poppins font-normal text-gray-800"
                >
                  {user.character.name}
                </Typography>
              </div>
            </div>
          </Link>

          {user.type === "basic" ? (
            <Chip color="indigo" value="Basic" />
          ) : (
            <Chip color="indigo" variant="gradient" value="Pro" />
          )}
        </div>
      </div>
    </nav>
  );
}
