/* eslint-disable react/prop-types */
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { HiStar } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function RegionCard({ region }) {
  const user = JSON.parse(localStorage.getItem("userInfo"));

  const navigate = useNavigate();

  function handleExplore() {
    localStorage.setItem("lastPage", "/map");
    localStorage.setItem("regionId", region._id);
    navigate(`/map/${region._id}/zones`);
  }

  return (
    <Card className="max-w-[24rem] flex flex-col justify-between overflow-hidden bg-secondary">
      <div>
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img src={region.cover} />
        </CardHeader>
        <CardBody>
          <Typography
            variant="h5"
            className="text-gray-900 font-montserrat font-bold whitespace-nowrap overflow-ellipsis overflow-hidden"
          >
            {region.name}
          </Typography>
          <Typography
            variant="paragraph"
            className="mt-4 text-gray-800 font-montserrat"
          >
            {region.description}
          </Typography>
        </CardBody>
      </div>

      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center -space-x-3">
          {region.earnableBadges &&
            region.earnableBadges.map((badge) => (
              <Tooltip key={badge.name} content={badge.name}>
                <Avatar
                  size="sm"
                  variant="circular"
                  alt={badge.name}
                  src={badge.image}
                  className="border border-gray-800 hover:z-10"
                />
              </Tooltip>
            ))}
        </div>
        {region.type === "basic" ? (
          <Button color="indigo" onClick={handleExplore}>
            Explore
          </Button>
        ) : (
          <Button color="indigo" className="flex items-center gap-3">
            <HiStar className="text-amber-800 text-lg" />
            Pro
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
