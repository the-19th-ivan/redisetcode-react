import {
  Card,
  CardBody,
  Checkbox,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import Navbar from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import StageCard from "./StageCard";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import MobileNav from "../../components/MobileNav";
import { host } from "../../utils/env";

export default function Stage() {
  const [stages, setStages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cookies] = useCookies(["jwt"]);

  const navigate = useNavigate();
  const { zoneId } = useParams();

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
          `${host}/api/v1/stages/${zoneId}/stages`,
          config
        );

        const { stages } = response.data.data;
        setStages(stages);
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
  }, [cookies.jwt, navigate, zoneId]);

  return (
    <main className="bg-primary">
      <Sidebar />

      <section className="lg:ml-[15rem] h-full grid grid-rows-[auto,1fr]">
        <Navbar />
        <MobileNav />

        {isLoading ? (
          <div className="h-[90vh] flex items-center justify-center">
            <Spinner color="indigo" />
          </div>
        ) : (
          <div className="w-full h-full p-4 lg:p-10 flex gap-8">
            {/* Make this list of stage card scrollable so that I dont need to scroll the whole screen */}
            <div className="w-full lg:w-3/4 h-[78vh] lg:pr-10 lg:overflow-y-auto">
              {stages.map((stage) => (
                <StageCard
                  key={stage._id}
                  stage={stage.stage}
                  status={stage.status}
                />
              ))}
            </div>
            <div className="hidden lg:block w-1/4">
              <Card className="w-full max-w-[48rem] flex-row bg-secondary">
                <CardBody>
                  <Typography
                    variant="small"
                    className="text-gray-800 font-montserrat font-semibold"
                  >
                    SORT BY
                  </Typography>

                  <div className="flex flex-col">
                    <Checkbox
                      color="indigo"
                      label="Name"
                      labelProps={{
                        style: {
                          color: "black",
                          fontWeight: "500",
                          fontFamily: "Montserrat",
                          fontSize: "14px",
                        },
                      }}
                    />
                    <Checkbox
                      color="indigo"
                      label="Stage"
                      labelProps={{
                        style: {
                          color: "#030712",
                          fontWeight: "500",
                          fontFamily: "Montserrat",
                          fontSize: "14px",
                        },
                      }}
                    />
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
