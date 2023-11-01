/* eslint-disable react/prop-types */
import { Button, Typography } from "@material-tailwind/react";
import { HiStar } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function ZoneCarousel({ zone }) {
  const navigate = useNavigate();

  function handleExplore() {
    localStorage.setItem(
      "lastPage",
      `/map/${localStorage.getItem("regionId")}/zones`
    );
    localStorage.setItem("zoneId", zone._id);
    navigate(`/stage/${zone._id}/stages`);
  }

  return (
    <div className="relative h-[95vh] lg:h-full w-full">
      <img
        src={zone.cover}
        alt={zone.name}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
        <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 font-montserrat text-2xl md:text-3xl lg:text-3xl"
          >
            {zone.name}
          </Typography>
          <Typography
            variant="paragraph"
            color="white"
            className="mb-12 font-montserrat font-medium opacity-80"
          >
            {zone.description}
          </Typography>
          <div className="flex flex-col md:flex-row items-center gap-6">
            {zone.type === "basic" ? (
              <Button size="lg" color="indigo" onClick={handleExplore}>
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
            <Typography
              variant="small"
              color="white"
              className="italic font-bold opacity-80"
            >
              Click on right to see more
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
