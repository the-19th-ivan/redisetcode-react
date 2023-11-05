import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Alert,
} from "@material-tailwind/react";
import { GiPointyHat, GiTreasureMap, GiTrophy } from "react-icons/gi";
import { HiTerminal } from "react-icons/hi";

import { CubeTransparentIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function Sidebar() {
  const [openAlert, setOpenAlert] = React.useState(true);

  return (
    <Card className="hidden lg:block fixed top-0 left-0 z-40 h-screen w-[15rem] rounded-none bg-secondary">
      <div className=" p-4">
        <Link to="/">
          <Typography variant="h4" color="black" className="font-mavenPro">
            <div className="flex items-center">
              <img src="/logo.svg" alt="logo" className="mr-2 w-9" />
              <p>RediSetCode</p>
            </div>
          </Typography>
        </Link>
      </div>
      <List className="text-gray-800 text-lg font-montserrat font-semibold">
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
      {/* <Alert
        open={openAlert}
        className="my-auto"
        onClose={() => setOpenAlert(false)}
      >
        <CubeTransparentIcon className="mb-4 h-12 w-12" />
        <Typography variant="h6" className="mb-1">
          Upgrade to PRO
        </Typography>
        <Typography variant="small" className="font-normal opacity-80">
          Upgrade to PRO account and unlock all regions, get immediate feedback,
          and try advanced features.
        </Typography>
        <div className="mt-4 flex gap-3">
          <Typography
            as="a"
            href="#"
            variant="small"
            className="font-medium opacity-80"
            onClick={() => setOpenAlert(false)}
          >
            Dismiss
          </Typography>
          <Typography as="a" href="#" variant="small" className="font-medium">
            Upgrade Now
          </Typography>
        </div>
      </Alert> */}
    </Card>
  );
}
