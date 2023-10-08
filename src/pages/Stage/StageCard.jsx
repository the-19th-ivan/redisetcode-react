/* eslint-disable react/prop-types */
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { GiBroadsword } from "react-icons/gi";
import { HiBadgeCheck, HiLockClosed, HiStar } from "react-icons/hi";

export default function StageCard({ stage }) {
  let customClass;

  switch (stage.status) {
    case "completed":
      customClass = "border-green-800 cursor-pointer";
      break;
    case "ongoing":
      customClass = "border-indigo-800 cursor-pointer";
      break;
    case "locked":
      customClass = "border-red-800 cursor-not-allowed";
      break;
    case "pro":
      customClass = "border-amber-800 cursor-pointer";
      break;
  }

  return (
    <Card
      className={`w-full max-w-[48rem] flex-row my-6 bg-secondary hover:border ${customClass}`}
    >
      <CardBody className="flex items-center gap-8">
        <div>
          {stage.status === "ongoing" && (
            <GiBroadsword className="text-3xl text-gray-900" />
          )}
          {stage.status === "completed" && (
            <HiBadgeCheck className="text-3xl text-green-800" />
          )}
          {stage.status === "locked" && (
            <HiLockClosed className="text-3xl text-gray-500" />
          )}
          {stage.status === "pro" && (
            <HiStar className="text-3xl text-amber-700" />
          )}
        </div>
        <div>
          <Typography
            variant="small"
            className="text-gray-800 font-montserrat font-semibold"
          >
            Stage {stage.stage}
          </Typography>
          <Typography
            variant="h5"
            className="text-gray-900 font-montserrat font-bold"
          >
            {stage.title}
          </Typography>
          <Typography
            variant="paragraph"
            className="mt-2 text-gray-800 font-montserrat"
          >
            {stage.description}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}
