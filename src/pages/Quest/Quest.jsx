import { Spinner, Typography } from "@material-tailwind/react";
import Navbar from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { GiHillConquest } from "react-icons/gi";
import QuestCard from "./QuestCard";
import ConfirmModal from "../../components/modals/ConfirmModal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

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
  const [quests, setQuests] = useState([]);
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

        const response = await axios.get(
          `http://localhost:8000/api/v1/quests/get`,
          config
        );

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

  function handleOpen() {
    setConfirmModal((current) => !current);
  }

  return (
    <main className="bg-primary h-screen">
      <Sidebar />

      <section className="sm:ml-[15rem]">
        <Navbar />

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
              <GiHillConquest />
              Quest Board
            </Typography>

            <div className="mt-6 grid grid-cols-4 gap-6">
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

      <ConfirmModal open={confirmModal} handleOpen={handleOpen} />
    </main>
  );
}
