import { Spinner, Typography } from "@material-tailwind/react";
import Navbar from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { GiDiamondTrophy, GiPodium } from "react-icons/gi";
import TopRankCard from "./TopRankCard";
import RankingTable from "./RankingTable";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Leaderboard() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "http://localhost:8000/api/v1/users/leaderboard"
        );

        const jsonData = response.data.data;
        setUsers(jsonData.users);
        setIsLoading(false);
      } catch (error) {
        navigate("/server-error");
      }
    }

    fetchData();
  }, [navigate]);

  // Slice the top three users from the 'users' state
  const topThree = users.slice(0, 3);

  return (
    <main className="bg-primary h-screen">
      <Sidebar />

      <section className="sm:ml-[15rem]">
        <Navbar />

        {/* Content */}
        {isLoading ? (
          <div className="h-[90vh] flex items-center justify-center">
            <Spinner color="indigo" />
          </div>
        ) : (
          <div className="w-full p-10">
            <Typography
              variant="h4"
              className="text-gray-900 font-montserrat font-bold flex gap-3"
            >
              <GiDiamondTrophy />
              Leaderboard
            </Typography>

            <div className="mt-6 grid grid-cols-3 gap-6">
              {topThree.map((user, index) => (
                <TopRankCard key={index} data={user} rank={index + 1} />
              ))}
            </div>

            <Typography
              variant="h4"
              className="text-gray-900 font-montserrat font-bold mt-6 flex gap-3"
            >
              <GiPodium />
              Rankings
            </Typography>

            <div className="mt-6">
              <RankingTable users={users.slice(3)} />
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
