import { Alert, Spinner, Typography } from "@material-tailwind/react";
import Navbar from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { GiDiamondTrophy, GiPodium } from "react-icons/gi";
import TopRankCard from "./TopRankCard";
import RankingTable from "./RankingTable";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MobileNav from "../../components/MobileNav";
import { host } from "../../utils/env";

export default function Leaderboard() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await axios.get(`${host}/api/v1/users/leaderboard`);

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

      <section className="lg:ml-[15rem]">
        <Navbar />
        <MobileNav />

        {/* Content */}
        {isLoading ? (
          <div className="h-[90vh] flex items-center justify-center">
            <Spinner color="indigo" />
          </div>
        ) : (
          <>
            <Alert color="indigo" open={open} onClose={() => setOpen(false)}>
              <Typography variant="small" className="font-bold">
                Announcement: Top 3 players at the end of Beta Testing will
                receive a cash prize
              </Typography>
            </Alert>
            <div className="w-full p-4 lg:p-10">
              <Typography
                variant="h4"
                className="text-gray-900 font-montserrat font-bold flex gap-3"
              >
                <GiDiamondTrophy />
                Leaderboard
              </Typography>

              <div className="mt-6 grid lg:grid-cols-3 gap-6">
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
          </>
        )}
      </section>
    </main>
  );
}
