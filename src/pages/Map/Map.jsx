import { Spinner, Typography } from "@material-tailwind/react";
import Navbar from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import RegionCard from "./RegionCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Map() {
  const [regions, setRegions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "http://localhost:8000/api/v1/regions"
        );

        const jsonData = response.data.data;
        setRegions(jsonData.regions);
        setIsLoading(false);
      } catch (error) {
        navigate("/server-error");
      }
    }

    fetchData();
  }, [navigate]);

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

            <div className="mt-8 grid grid-cols-3 gap-6">
              {regions.map((region) => (
                <RegionCard key={region.title} region={region} />
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
