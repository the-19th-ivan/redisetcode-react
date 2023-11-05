import { Spinner, Typography } from "@material-tailwind/react";
import Navbar from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { GiHillConquest } from "react-icons/gi";
import QuestCard from "./QuestCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import AcceptQuestModal from "../../components/modals/AcceptQuestModal";
import MobileNav from "../../components/MobileNav";
import { host } from "../../utils/env";

export default function Quest() {
  const [confirmModal, setConfirmModal] = useState(false);
  const [quests, setQuests] = useState([]);
  const [openQuest, setOpenQuest] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [cookies] = useCookies(["jwt"]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        const config = {
          headers: {
            Authorization: `Bearer ${cookies.jwt}`,
          },
        };

        const response = await axios.get(`${host}/api/v1/quests/get`, config);

        const { quests } = response.data.data;
        setQuests(quests);
        setIsLoading(false);
      } catch (error) {
        const status = error.response.status;

        if (status === 401) {
          // Not Authenticated, redirect to Login page
          navigate("/login");
        } else {
          // Status 500
          navigate("/server-error");
        }
        setIsLoading(false);
      }
    }
    fetchData();
  }, [cookies.jwt, navigate]);

  function handleOpen(id) {
    if (id) {
      const quest = quests.find((item) => item.quest._id === id);
      setOpenQuest(quest);
    }
    setConfirmModal((current) => !current);
  }

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
          <div className="bg-primary w-full p-4 lg:p-10">
            <Typography
              variant="h4"
              className="text-gray-900 font-montserrat font-bold flex gap-3"
            >
              <GiHillConquest />
              Quest Board
            </Typography>

            <div className="mt-6 grid lg:grid-cols-4 gap-6">
              {quests.map((quest) => (
                <QuestCard
                  key={quest.name}
                  quest={quest.quest}
                  status={quest.isAvailable}
                  handleOpen={handleOpen}
                />
              ))}
            </div>
          </div>
        )}
      </section>

      <AcceptQuestModal
        open={confirmModal}
        handleOpen={handleOpen}
        openQuest={openQuest}
      />
    </main>
  );
}
