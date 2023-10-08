import { Typography } from "@material-tailwind/react";
import Navbar from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { GiHillConquest } from "react-icons/gi";
import QuestCard from "./QuestCard";
import ConfirmModal from "../../components/modals/ConfirmModal";
import { useState } from "react";

const quests = [
  {
    name: "Collecting Gems",
    cover: "cpp_cover2.png",
    description: "Collect various types of gems in the mines",
    exp: 50,
    requirements: ["Data Types"],
    subscription: "basic",
  },
  {
    name: "Slaying Slimes",
    cover: "dsa_cover2.png",
    description: "Slay 12 slimes in the Candid Forest",
    exp: 50,
    requirements: ["Variables", "C++", "Arithmetic Operation"],
    subscription: "basic",
  },
];

export default function Quest() {
  const [confirmModal, setConfirmModal] = useState(false);

  function handleOpen() {
    setConfirmModal((current) => !current);
  }

  return (
    <main className="bg-primary">
      <Sidebar />

      <section className="sm:ml-[15rem]">
        <Navbar />

        {/* Content */}
        <div className="w-full p-10">
          <Typography
            variant="h4"
            className="text-gray-900 font-montserrat font-bold flex gap-3"
          >
            <GiHillConquest />
            Quest Board
          </Typography>

          <div className="mt-6 grid grid-cols-4 gap-6">
            {quests.map((quest) => (
              <QuestCard
                key={quest.name}
                quest={quest}
                handleOpen={handleOpen}
              />
            ))}
          </div>
        </div>
      </section>

      <ConfirmModal open={confirmModal} handleOpen={handleOpen} />
    </main>
  );
}
