/* eslint-disable react/prop-types */
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { GiFireGem, GiRibbonMedal } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

export default function TopRankCard({ data, rank }) {
  const navigate = useNavigate();

  return (
    <Card
      className="bg-secondary cursor-pointer hover:border border-green-800"
      onClick={() => {
        localStorage.setItem("lastPage", "/leaderboard");
        navigate(`/profile/${data.username}`);
      }}
    >
      <CardBody className="flex justify-between items-center">
        <div className="flex gap-3">
          <Avatar src={data.character.avatar} alt="avatar" size="lg" />
          <div>
            <Typography
              variant="h5"
              className="text-gray-800 font-montserrat font-semibold"
            >
              {data.username}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-gray-700 font-montserrat"
            >
              {data.character.name}
            </Typography>
          </div>
        </div>
        <div>
          <Typography
            variant="h4"
            className="text-gray-800 font-montserrat font-medium flex items-center gap-1"
          >
            <GiFireGem className="text-xl text-red-800" />
            {data.experience}
          </Typography>
        </div>
      </CardBody>
      {rank == 1 && (
        <CardFooter className="p-2 flex justify-center rounded-b-lg bg-green-800 ">
          <Typography
            variant="h6"
            className="text-white font-bold flex items-center gap-1"
          >
            <GiRibbonMedal className="text-xl " />
            {rank}st Place
          </Typography>
        </CardFooter>
      )}
      {rank == 2 && (
        <CardFooter className="p-2 flex justify-center rounded-b-lg bg-green-700 ">
          <Typography
            variant="h6"
            className="text-white font-bold flex items-center gap-1"
          >
            <GiRibbonMedal className="text-xl " />
            {rank}nd Place
          </Typography>
        </CardFooter>
      )}
      {rank == 3 && (
        <CardFooter className="p-2 flex justify-center rounded-b-lg bg-green-600 ">
          <Typography
            variant="h6"
            className="text-white font-bold flex items-center gap-1"
          >
            <GiRibbonMedal className="text-xl " />
            {rank}rd Place
          </Typography>
        </CardFooter>
      )}
    </Card>
  );
}
