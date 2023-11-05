import { Carousel, Spinner } from "@material-tailwind/react";
import Navbar from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import ZoneCarousel from "./ZoneCarousel";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import MobileNav from "../../components/MobileNav";
import { host } from "../../utils/env";

export default function Zone() {
  const [zones, setZones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cookies] = useCookies(["jwt"]);

  const navigate = useNavigate();
  const { regionId } = useParams();

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
          `${host}/api/v1/zones/${regionId}/zones`,
          config
        );

        const { zones } = response.data.data;
        setZones(zones);
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
  }, [cookies.jwt, navigate, regionId]);

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
            <Carousel className="rounded-xl">
              {zones.map((zone) => (
                <ZoneCarousel key={zone.title} zone={zone} />
              ))}
            </Carousel>
          </div>
        )}
      </section>
    </main>
  );
}
