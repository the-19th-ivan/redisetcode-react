import {
  Card,
  CardBody,
  Chip,
  Radio,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import Navbar from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { GiHillConquest } from "react-icons/gi";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import MobileNav from "../../components/MobileNav";
import { host } from "../../utils/env";

export default function QuestResult() {
  const [isLoading, setIsLoading] = useState(true);
  const [cookies] = useCookies(["jwt"]);
  const [result, setResult] = useState({});

  const navigate = useNavigate();
  const { questId } = useParams();

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
          `${host}/api/v1/quests/${questId}/result`,
          config
        );

        const { result } = response.data.data;
        setResult(result);
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
  }, [cookies.jwt, navigate, questId]);

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
          <div className="w-full p-4 lg:p-10 bg-primary">
            <Typography
              variant="h4"
              className="text-gray-900 font-montserrat font-bold flex gap-3"
            >
              <GiHillConquest />
              {result.quizName} (Result)
            </Typography>
            <Typography
              variant="paragraph"
              className="text-gray-900 font-montserrat mt-4"
            >
              Score: {result.score}/{result.userResponses.length}
            </Typography>

            <div className="mt-6 space-y-6">
              {result.userResponses.map((res) => (
                <Card key={res._id}>
                  <CardBody>
                    <div className="flex justify-between items-center">
                      <Typography
                        variant="paragraph"
                        className="text-gray-900 font-montserrat font-semibold"
                      >
                        {res.questionText}
                      </Typography>
                      <img
                        src={res.isCorrect ? "/check.svg" : "/incorrect.svg"}
                        className="w-10 object-cover object-center"
                      />
                    </div>

                    <ul className="mt-3 flex flex-col">
                      {res.choices.map((item) => (
                        <Radio
                          key={item}
                          name={res.questionText}
                          color={res.isCorrect ? "green" : "red"}
                          label={item}
                          checked={item === res.userAnswer}
                          disabled={item !== res.userAnswer}
                        />
                      ))}
                    </ul>
                    <div className="mt-3">
                      <Chip color="green" value={res.correctAnswer} size="lg" />
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
