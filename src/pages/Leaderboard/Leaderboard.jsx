import { Typography } from "@material-tailwind/react";
import Navbar from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { GiDiamondTrophy, GiPodium } from "react-icons/gi";
import TopRankCard from "./TopRankCard";
import RankingTable from "./RankingTable";

const topThree = [
  {
    name: "Mr. Knight",
    character: {
      name: "Knight",
      avatar: "/knight.png",
    },
    level: 10,
  },
  {
    name: "Airen",
    character: {
      name: "Knight",
      avatar: "/knight.png",
    },
    level: 5,
  },
  {
    name: "Loyd",
    character: {
      name: "Knight",
      avatar: "/knight.png",
    },
    level: 2,
  },
];

export default function Leaderboard() {
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
            <GiDiamondTrophy />
            Leaderboard
          </Typography>

          <div className="mt-6 grid grid-cols-3 gap-6">
            <TopRankCard data={topThree[0]} rank="1" />
            <TopRankCard data={topThree[1]} rank="2" />
            <TopRankCard data={topThree[2]} rank="3" />
          </div>

          <Typography
            variant="h4"
            className="text-gray-900 font-montserrat font-bold mt-6 flex gap-3"
          >
            <GiPodium />
            Rankings
          </Typography>

          <div className="mt-6">
            <RankingTable />
          </div>
        </div>
      </section>
    </main>
  );
}
