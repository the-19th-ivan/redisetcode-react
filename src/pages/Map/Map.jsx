import { Typography } from "@material-tailwind/react";
import Navbar from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import RegionCard from "./RegionCard";

const regions = [
  {
    title: "C++ Fundamentals",
    image: "/cpp_cover2.png",
    description: "A region full of machines and magic",
    earnableBadges: [
      {
        name: "Newbie Kinobi",
        image: "/newbie.png",
      },
      {
        name: "Knight in Shining Armor",
        image: "/knight.png",
      },
    ],
    subscription: "basic",
  },
  {
    title: "Web Development",
    image: "/web_dev_cover2.png",
    description: "A region of artistic races",
    earnableBadges: [
      {
        name: "Newbie Kinobi",
        image: "/newbie.png",
      },
      {
        name: "Knight in Shining Armor",
        image: "/knight.png",
      },
    ],
    subscription: "pro",
  },
  {
    title: "Data Structures & Algorithms",
    image: "/dsa_cover2.png",
    description: "A region of engineers and mathematicians",
    earnableBadges: [
      {
        name: "Newbie Kinobi",
        image: "/newbie.png",
      },
      {
        name: "Knight in Shining Armor",
        image: "/knight.png",
      },
    ],
    subscription: "pro",
  },
];

export default function Map() {
  return (
    <main className="bg-primary">
      <Sidebar />

      <section className="sm:ml-[15rem]">
        <Navbar />

        {/* Content */}
        <div className="w-full p-10">
          <Typography
            variant="small"
            className="text-gray-800 font-montserrat font-bold"
          >
            FUNDAMENTALS
          </Typography>
          <Typography
            variant="h3"
            className="text-gray-900 font-montserrat font-bold"
          >
            Explored Regions
          </Typography>

          <div className="mt-8 grid grid-cols-3 gap-6">
            {regions.map((region) => (
              <RegionCard key={region.title} region={region} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
