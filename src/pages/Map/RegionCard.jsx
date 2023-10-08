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

export default function RegionCard({ region }) {
  return (
    <Card className="max-w-[24rem] flex flex-col justify-between overflow-hidden bg-secondary">
      <div>
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img src={region.image} />
        </CardHeader>
        <CardBody>
          <Typography
            variant="h5"
            className="text-gray-900 font-montserrat font-bold whitespace-nowrap overflow-ellipsis overflow-hidden"
          >
            {region.title}
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
          {region.earnableBadges.map((badge) => (
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
        {region.subscription === "basic" ? (
          <Button color="indigo">Explore</Button>
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
