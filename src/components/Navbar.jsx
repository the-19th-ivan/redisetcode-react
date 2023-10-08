import { Avatar, Chip, Tooltip, Typography } from "@material-tailwind/react";
import { GiFireGem } from "react-icons/gi";

export default function Navbar() {
  return (
    <nav className="bg-secondary border-b border-gray-400 px-10 py-2.5">
      <div className="flex justify-between items-center">
        {/* Left navbar */}
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
        {/* Right navbar */}
        <div className="flex items-center space-x-6">
          {/* <Tooltip content="Gems" placement="bottom">
            <Chip
              value="100 +"
              variant="gradient"
              icon={<GiFireGem className="text-red-800 text-lg" />}
            />
          </Tooltip> */}
          <div className="flex items-center gap-1">
            <Avatar
              src="/knight.png"
              alt="avatar"
              size="sm"
              variant="rounded"
            />
            <div>
              <Typography
                variant="paragraph"
                className="font-poppins font-medium"
              >
                Mr Knight
              </Typography>
              <Typography
                variant="small"
                className="font-poppins font-normal text-gray-800"
              >
                Knight
              </Typography>
            </div>
          </div>
          <Chip color="indigo" value="Basic" />
        </div>
      </div>
    </nav>
  );
}
