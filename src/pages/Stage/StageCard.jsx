/* eslint-disable react/prop-types */
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { GiBroadsword } from "react-icons/gi";
import { HiBadgeCheck, HiLockClosed, HiStar } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import './animate.css';


export default function StageCard({ stage, status }) {
  const navigate = useNavigate();

  let customClass;

  switch (status) {
    case "completed":
      customClass = "bg-green-200 border-green-800 cursor-pointer";
      break;
    case "available":
      customClass = "bg-secondary border-indigo-800 cursor-pointer";
      break;
    case "locked":
      customClass = "bg-red-50 border-red-800 cursor-not-allowed";
      break;
    case "pro":
      customClass = "border-amber-800 cursor-pointer";
      break;
  }

  function handleOpenLesson() {
    if (status === "locked") {
      return;
    }

    localStorage.setItem(
      "lastPage",
      `/stage/${localStorage.getItem("zoneId")}/stages`
    );
    navigate(`/lesson/${stage._id}`);
  }

  return (
    <Card
      onClick={handleOpenLesson}
      className={`w-full max-w-[48rem] flex-row my-6  hover:border ${customClass}`}
    >
      <CardBody className="flex items-center gap-8">
        <div>
          {status === "available" && (
            <GiBroadsword className="text-3xl text-gray-900 animate-bounce" />
          )}
          {status === "completed" && (
            <HiBadgeCheck className="text-3xl text-green-800" />
          )}
          {status === "locked" && (
            <HiLockClosed className="text-3xl text-gray-500" />
          )}
          {status === "pro" && <HiStar className="text-3xl text-amber-700" />}
        </div>
        <div>
          <Typography
            variant="small"
            className="text-gray-800 font-montserrat font-semibold"
          >
            Stage {stage.stageNumber}
          </Typography>
          <Typography
            variant="h5"
            className="text-gray-900 font-montserrat font-bold"
          >
            {stage.name}
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
