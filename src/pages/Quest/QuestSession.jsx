import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

export default function QuestSession() {
  return (
    <main className="p-4 h-screen bg-primary">
      <nav className="mb-6">
        <Typography
          variant="h4"
          className="font-montserrat text-gray-900 font-bold"
        >
          Collecting Gems
        </Typography>
      </nav>
      <Card className="h-[80vh] relative  bg-secondary">
        <CardBody className="flex flex-col justify-center items-center h-full">
          <p className="absolute top-0 left-0 ml-4 mt-4 text-gray-800 font-montserrat text-2xl">
            1/5
          </p>
          <div className="absolute bottom-0 right-0 mr-4 mb-4">
            <div className="flex space-x-6">
              <Button className="flex gap-3">
                <HiOutlineArrowLeft className="" />
                <p>Previous</p>
              </Button>
              <Button className="flex gap-3">
                <p>Next</p>
                <HiOutlineArrowRight className="" />
              </Button>
            </div>
          </div>

          <Typography
            variant="h4"
            className="text-gray-800 font-montserrat font-bold text-center"
          >
            You found an &quot;Amethyst&quot; gem, what data type is it?
          </Typography>

          <div className="w-1/2 mx-auto grid grid-cols-2 gap-4 mt-10 relative">
            <Button variant="outlined" className="rounded-full">
              String
            </Button>
            <Button variant="outlined" className="rounded-full">
              Integer
            </Button>
            <Button variant="outlined" className="rounded-full">
              Boolean
            </Button>
            <Button variant="outlined" className="rounded-full">
              Double
            </Button>
          </div>
        </CardBody>
      </Card>
    </main>
  );
}
