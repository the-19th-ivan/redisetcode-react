import { Spinner, Typography } from "@material-tailwind/react";
import Navbar from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import RegionCard from "./RegionCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import EventModal from "../../components/modals/EventModal";
import MobileNav from "../../components/MobileNav";
import { host } from "../../utils/env";

const dailyTips = [
  "Why learn programming? Well, think of it as teaching your computer to do the Macarena – it's a dance party for geeks!",
  "Programming is like making a recipe for a robot chef - 'Add 1 cup of code, 2 tablespoons of logic, and a dash of creativity!'",
  "They say programmers are like wizards. We wave our wands (keyboards) and make things happen – just without the pointy hats and robes.",
  "Ever wanted to have conversations with machines? Learning to code is like becoming BFFs with your computer. They'll listen to you for hours!",
  "Programming is like solving digital puzzles while juggling cats... Okay, maybe not the cats, but it's just as fun and challenging!",
  "Learning to program is like acquiring a superhero skill. You start with 'Hello, World!' and before you know it, you're saving the digital universe.",
  "Why learn programming? Because it's the closest thing to having your own army of obedient robots – minus the world domination plans!",
  "Programming is like being a modern-day sorcerer, but instead of spells, you use 'if' statements and loops to conjure up solutions!",
  "Think of coding as your secret superpower. You get to build things, solve problems, and make your computer do your bidding – it's like having a tech genie in a bottle!",
  "Learning to program is like learning a new dance. You'll start with some 'code-steps' and soon be waltzing through the digital world with style.",
];

export default function Map() {
  const [regions, setRegions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [eventModal, setEventModal] = useState("");
  const [cookies, setCookie] = useCookies([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await axios.get(`${host}/api/v1/regions`);

        const jsonData = response.data.data;
        setRegions(jsonData.regions);

        const res = await axios.get(`${host}/api/v1/events`);
        const { event, msg } = res.data.data;

        console.log(event.name);

        if (!msg) {
          setCookie("event", event.name, { path: "/" });

          setEventModal(event.name);
        }

        setIsLoading(false);
      } catch (error) {
        navigate("/server-error");
      }
    }

    fetchData();
  }, [navigate, setCookie]);

  return (
    <main className="bg-primary h-screen">
      <Sidebar />

      <section className="lg:ml-[15rem]">
        <Navbar />
        <MobileNav />

        {isLoading ? (
          <div className="h-[90vh] flex items-center justify-center">
            <Spinner color="indigo" />
          </div>
        ) : (
          <div className="w-full p-4 lg:p-10">
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

            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {regions.map((region) => (
                <RegionCard key={region.title} region={region} />
              ))}
            </div>
          </div>
        )}
      </section>

      <EventModal
        open={eventModal === "Normal"}
        handleOpen={() => setEventModal("")}
        title="Tip of the day ✨"
      >
        <p>{dailyTips[Math.floor(Math.random() * dailyTips.length)]}</p>
      </EventModal>
      <EventModal
        open={eventModal === "Bonus"}
        handleOpen={() => setEventModal("")}
        title="Bonus Day"
      >
        <div className="flex flex-col items-center justify-between">
          <img src="/rating.png" className="w-32" alt="" />
          <Typography className="text-center">
            Today is a good day to learn. Complete a Lesson and Quests and{" "}
            <strong className="font-bold">earn double XP</strong> !
          </Typography>
        </div>
      </EventModal>

      <EventModal
        open={eventModal === "Hidden"}
        handleOpen={() => setEventModal("")}
        title="Hidden Quest"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          consequuntur ratione, temporibus autem quia debitis quae eos
          perferendis? Corporis, sit.
        </p>
      </EventModal>
    </main>
  );
}
