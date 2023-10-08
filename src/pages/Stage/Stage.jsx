import { Card, CardBody, Checkbox, Typography } from "@material-tailwind/react";
import Navbar from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import StageCard from "./StageCard";

const stages = [
  {
    title: "Introduction to Programming",
    description:
      "Before anything else, you must know the journey you will take.",
    stage: 1,
    status: "completed",
  },
  {
    title: "The Power of C++",
    description: "The sage Bjourne Strastroup invented C++ for you to use.",
    stage: 2,
    status: "ongoing",
  },
  {
    title: "The Core of Mech: Variable",
    description: "Discover how a mech moves its part through its core.",
    stage: 3,
    status: "locked",
  },
  {
    title: "Extra Curricular",
    description:
      "Professor X conduct special class to discuss the power behind mech core.",
    stage: 4,
    status: "pro",
  },
];

export default function Stage() {
  return (
    <main className="bg-primary">
      <Sidebar />

      <section className="sm:ml-[15rem] h-full grid grid-rows-[auto,1fr]">
        <Navbar />

        {/* Content */}
        <div className="w-full h-full p-10 flex gap-8">
          {/* Make this list of stage card scrollable so that I dont need to scroll the whole screen */}
          <div className="w-3/4 h-[75vh] pr-10 overflow-y-auto">
            {stages.map((stage) => (
              <StageCard key={stage.title} stage={stage} />
            ))}
          </div>
          <div className="w-1/4">
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
                    label="Completed"
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
      </section>
    </main>
  );
}
