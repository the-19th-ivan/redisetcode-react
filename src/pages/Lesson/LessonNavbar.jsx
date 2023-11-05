import {
  Avatar,
  Chip,
  Drawer,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { GiPointyHat, GiTreasureMap, GiTrophy } from "react-icons/gi";
import { HiArrowNarrowLeft, HiMenu, HiTerminal } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

export default function LessonNavbar() {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const navigate = useNavigate();
  const lastPage = localStorage.getItem("lastPage");

  return (
    <>
      <nav className="border-b border-gray-800 px-10 py-2.5">
        <div className="flex justify-between items-center">
          {/* Left navbar */}
          <div className="flex items-center space-x-8">
            <Typography
              as="li"
              variant="h4"
              color="blue-gray"
              className="font-medium text-gray-800 cursor-pointer"
            >
              <a onClick={openDrawer} className="flex items-center">
                <HiMenu />
              </a>
            </Typography>

            <Typography
              onClick={() => {
                localStorage.removeItem("lastPage");
                navigate(lastPage);
              }}
              className="cursor-pointer flex items-center gap-2"
            >
              <HiArrowNarrowLeft /> <span>Go Back</span>
            </Typography>
          </div>
          {/* Right navbar */}
          <div className="flex items-center space-x-6">
            {/* <Tooltip content="Gems" placement="bottom">
              <Chip
                value="100 +"
                variant="gradient"
                icon={<GiFireGem className="text-red-800 text-lg" />}
              />
            </Tooltip> */}
            <Link to="/profile" className="cursor-pointer">
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
              <Chip color="indigo" value="Basic" className="hidden lg:block" />
            ) : (
              <Chip
                color="indigo"
                variant="gradient"
                value="Pro"
                className="hidden lg:block"
              />
            )}
          </div>
        </div>
      </nav>

      <Drawer open={open} onClose={closeDrawer} className="bg-secondary">
        <div className="border-b border-gray-400 p-4">
          <Typography variant="h4" color="black" className="font-mavenPro">
            <div className="flex items-center">
              <img src="/logo.svg" alt="logo" className="mr-2 w-9" />
              <p>RediSetCode</p>
            </div>
          </Typography>
        </div>
        <List className="text-gray-800 text-lg font-poppins font-semibold">
          <Link to="/map">
            <ListItem>
              <ListItemPrefix>
                <GiTreasureMap className="h-5 w-5" />
              </ListItemPrefix>
              Map
            </ListItem>
          </Link>
          <Link to="/quest">
            <ListItem>
              <ListItemPrefix>
                <GiPointyHat className="h-5 w-5" />
              </ListItemPrefix>
              Quest
            </ListItem>
          </Link>
          <Link to="/codelab">
            <ListItem>
              <ListItemPrefix>
                <HiTerminal className="h-5 w-5" />
              </ListItemPrefix>
              Codelab
            </ListItem>
          </Link>
          <Link to="/leaderboard">
            <ListItem>
              <ListItemPrefix>
                <GiTrophy className="h-5 w-5" />
              </ListItemPrefix>
              Leaderboard
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </>
  );
}
