import { useState } from "react";
import MobileNav from "../../components/MobileNav";
import Navbar from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { Spinner, Typography } from "@material-tailwind/react";
import { useParams } from "react-router-dom";

export default function EditProfile() {
  const [isLoading, setIsLoading] = useState(false);

  const { userId } = useParams;

  return (
    <main className="bg-primary">
      <Sidebar />

      <section className="lg:ml-[15rem]">
        <Navbar />
        <MobileNav />

        {isLoading ? (
          <div className="h-[90vh] flex items-center justify-center">
            <Spinner color="indigo" />
          </div>
        ) : (
          <div className="p-4 lg:p-10">
            <Typography variant="h3">Edit Profile</Typography>

            <form action=""></form>
          </div>
        )}
      </section>
    </main>
  );
}
