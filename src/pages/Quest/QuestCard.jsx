/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { GiBlackBook, GiFireGem, GiScrollUnfurled } from "react-icons/gi";
import { HiStar } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
// import { HiStar } from "react-icons/hi";

export default function QuestCard({ quest, status, handleOpen }) {
  const navigate = useNavigate();

  return (
    <Card className=" flex flex-col justify-between overflow-hidden bg-secondary">
      <div>
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        ></CardHeader>
        <CardBody className="pb-0">
          <Typography variant="h1" className="mb-4">
            <GiBlackBook className="text-8xl" />
          </Typography>
          <Typography
            variant="h6"
            className="text-gray-900 font-montserrat font-bold whitespace-nowrap overflow-ellipsis overflow-hidden"
          >
            {quest.name}
          </Typography>
          <Typography
            variant="small"
            className="mt-4 text-gray-800 font-montserrat"
          >
            {quest.description}
          </Typography>
          <Typography
            variant="small"
            className="mt-2 text-gray-800 font-montserrat font-semibold"
          >
            Requirements:
          </Typography>
          <Typography
            variant="small"
            className="mt-2 text-gray-800 font-montserrat"
          >
            <ul>
              {quest.requirements.map((req) => (
                <li key={req}>- {req}</li>
              ))}
            </ul>
          </Typography>
        </CardBody>
      </div>

      <CardFooter className="pt-4 flex items-center justify-between">
        <Tooltip content="Reward">
          <Typography
            variant="small"
            className="text-gray-800 font-montserrat font-bold hover:cursor-pointer flex items-center gap-1"
          >
            <GiFireGem className="text-xl text-red-600" />
            {quest.exp} EXP
          </Typography>
        </Tooltip>
        {!status && (
          <Button
            onClick={() => {
              localStorage.setItem("lastPage", "/quest");
              navigate(`/quest/${quest._id}/result`);
            }}
            size="sm"
            color="blue-gray"
          >
            Result
          </Button>
        )}
        {status && quest.type === "basic" && (
          <Button
            onClick={() => handleOpen(quest._id)}
            size="sm"
            color="indigo"
          >
            Accept
          </Button>
        )}
        {status && quest.type === "pro" && (
          <Button
            onClick={handleOpen}
            size="sm"
            color="indigo"
            className="flex items-center gap-3"
          >
            <HiStar className="text-amber-800 text-lg" />
            Pro
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
