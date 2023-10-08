/* eslint-disable react/prop-types */
import { Button, Typography } from "@material-tailwind/react";
import { HiStar } from "react-icons/hi";

export default function ZoneCarousel({ zone }) {
  return (
    <div className="relative h-full w-full">
      <img
        src={zone.image}
        alt={zone.title}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
        <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 font-montserrat text-2xl md:text-3xl lg:text-3xl"
          >
            {zone.title}
          </Typography>
          <Typography
            variant="paragraph"
            color="white"
            className="mb-12 font-montserrat font-medium opacity-80"
          >
            {zone.description}
          </Typography>
          <div className="flex items-center gap-6">
            {zone.subscription === "basic" ? (
              <Button size="lg" color="indigo">
                Explore
              </Button>
            ) : (
              <Button
                size="lg"
                color="indigo"
                className="flex items-center gap-3"
              >
                <HiStar className="text-amber-800 text-lg" />
                Pro
              </Button>
            )}
            <Typography variant="h6" color="white" className="opacity-80">
              0/10 Completed
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
