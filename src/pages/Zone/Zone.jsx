import { Carousel } from "@material-tailwind/react";
import Navbar from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import ZoneCarousel from "./ZoneCarousel";

const zones = [
  {
    title: "Beginner's Zone: Unleashing The Power of C++",
    image: "/robot_cover.jpg",
    subscription: "basic",
    description:
      "In this zone, you will attend the school of mech and magic. You will get to know how to move those machine with a powerful magic called C++",
  },
  {
    title: "Hero's Zone: Guide to Flowchart and Algorithms",
    image: "/forest_cover.jpg",
    subscription: "basic",
    description:
      "In this zone, its time to explore the candid forest and use all the knowledge you learned in the academy",
  },
  {
    title: "Labyrinth Zone: Navigating Your Way Out",
    image: "/labyrinth_cover.jpg",
    subscription: "basic",
    description:
      "While exploring the Candid Forest, you fell into a labyrinth. Find your way out of the labyrinth or go deeper to find treasure. The choice is yours.",
  },
  {
    title: "Sage Zone: A Master Has Appeared",
    image: "/sage_cover.jpg",
    subscription: "pro",
    description:
      "A great wizard has appeared! He see the talent within you and willing to give you tips and tricks to speed up your C++ journey.",
  },
];

export default function Zone() {
  return (
    <main className="bg-primary">
      <Sidebar />

      <section className="sm:ml-[15rem]">
        <Navbar />

        {/* Content */}
        <div className="w-full p-10">
          <Carousel className="rounded-xl">
            {zones.map((zone) => (
              <ZoneCarousel key={zone.title} zone={zone} />
            ))}
          </Carousel>
        </div>
      </section>
    </main>
  );
}
