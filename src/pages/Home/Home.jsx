/* eslint-disable react/no-unescaped-entities */
import {
  Button,
  Card,
  CardBody,
  Timeline,
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  Typography,
} from "@material-tailwind/react";
import { Editor } from "@monaco-editor/react";
import {
  HiArrowLongRight,
  HiArrowUpRight,
  HiBookOpen,
  HiClock,
  HiLightBulb,
} from "react-icons/hi2";
import { DiGithubBadge } from "react-icons/di";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <main className="bg-primary h-screen">
      <nav className="bg-secondary p-4 flex justify-between items-center">
        <Typography variant="h4" color="black" className="font-mavenPro">
          <div className="flex items-center">
            <img src="/logo.svg" alt="logo" className="mr-2 w-9" />
            <p>RediSetCode</p>
          </div>
        </Typography>
        <div>
          {user ? (
            <Button
              variant="text"
              color="indigo"
              onClick={() => navigate("/map")}
              className="flex gap-3 items-center"
            >
              <span>Continue</span>
              <HiArrowLongRight className="text-lg" />
            </Button>
          ) : (
            <Button
              variant="text"
              color="indigo"
              onClick={() => navigate("/login")}
              className="flex gap-3 items-center"
            >
              <span>Login</span>
              <HiArrowLongRight className="text-lg" />
            </Button>
          )}
        </div>
      </nav>

      <section className="px-4 lg:px-10 py-20 bg-secondary lg:flex flex-row-reverse gap-12">
        <div className="lg:w-1/2">
          <Typography variant="h1" className="font-mavenPro font-black">
            Ready, Set, Code!
          </Typography>
          <Typography variant="paragraph" className="mt-4 leading-loose">
            The gamified platform that's here to turn your programming journey
            into a thrilling adventure inspired by the magic of fantasy games.
            We understand that you're not lazy or unintelligent; you just need
            that extra push to unlock your full potential.
          </Typography>
          <Typography variant="paragraph" className="mt-4 leading-loose">
            With RediSetCode, we make programming as easy as ABC by infusing the
            power of gamification into your learning experience. Say goodbye to
            the mundane and hello to a world where programming is as fun,
            exciting, and enjoyable.
          </Typography>

          <Button
            onClick={() => navigate("/signup")}
            variant="filled"
            color="green"
            className="mt-10 flex gap-3"
          >
            <span>Start The Journey</span>
            <HiArrowUpRight className="text-lg" />
          </Button>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img
            src="/covers/cpp_cover.webp"
            alt=""
            className=" w-full rounded-lg object-cover object-center"
          />
        </div>
      </section>

      <section className="px-4 lg:px-10 py-20 bg-gray-200">
        <Typography variant="h4" className="text-center">
          Choose Your Character
        </Typography>
        <Typography
          variant="paragraph"
          className="text-center mt-2 text-gray-800 font-medium"
        >
          Every character has a unique identity related to programming
        </Typography>

        <div className="w-full space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
          <div
            onClick={() => navigate("/signup")}
            className="flex flex-col items-center gap-4 cursor-pointer"
          >
            <img src="/characters/knight.svg" alt="" className="w-32" />
            <Typography variant="h4">Knight</Typography>
          </div>
          <div
            onClick={() => navigate("/signup")}
            className="flex flex-col items-center gap-4 cursor-pointer"
          >
            <img src="/characters/mage.svg" alt="" className="w-32" />
            <Typography variant="h4">Mage</Typography>
          </div>
          <div
            onClick={() => navigate("/signup")}
            className="flex flex-col items-center gap-4 cursor-pointer"
          >
            <img src="/characters/archer.svg" alt="" className="w-32" />
            <Typography variant="h4">Archer</Typography>
          </div>
          <div
            onClick={() => navigate("/signup")}
            className="flex flex-col items-center gap-4 cursor-pointer"
          >
            <img src="/characters/blacksmith.svg" alt="" className="w-32" />
            <Typography variant="h4">Blacksmith</Typography>
          </div>
        </div>
      </section>

      <section className="px-4 lg:px-10 py-20 bg-secondary lg:flex gap-6">
        <div className="lg:w-1/2">
          <Typography variant="h2" className="font-mavenPro font-black">
            How Learning Happens With RediSetCode?
          </Typography>
          <Timeline className="mt-10">
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-2">
                  <HiBookOpen className="h-4 w-4" />
                </TimelineIcon>
                <Typography variant="h5" color="blue-gray">
                  Story Mode
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography color="gary" className="font-normal text-gray-800">
                  Learn programming concepts by following an engaging narrative,
                  making your learning experience both fun and educational.
                </Typography>
              </TimelineBody>
            </TimelineItem>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-2">
                  <HiLightBulb className="h-4 w-4" />
                </TimelineIcon>
                <Typography variant="h5" color="blue-gray">
                  Feynman Technique
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography color="gary" className="font-normal text-gray-800">
                  We've simplified our lessons to the point where even primary
                  students can grasp complex topics effortlessly. With
                  RediSetCode, programming becomes a breeze for learners of all
                  ages.
                </Typography>
              </TimelineBody>
            </TimelineItem>
            <TimelineItem>
              <TimelineHeader>
                <TimelineIcon className="p-2">
                  <HiClock className="h-4 w-4" />
                </TimelineIcon>
                <Typography variant="h5" color="blue-gray">
                  Pomodoro Technique
                </Typography>
              </TimelineHeader>
              <TimelineBody>
                <Typography color="gary" className="font-normal text-gray-800">
                  Experience a productivity and learning boost with our Pomodoro
                  technique integration.
                </Typography>
              </TimelineBody>
            </TimelineItem>
            {/* <TimelineItem>
            <TimelineHeader>
              <TimelineIcon className="p-2">
                <HiClock className="h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" color="blue-gray">
                Practical + Theory
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography color="gary" className="font-normal text-gray-600">
                Evaluate your learning journey through two powerful assessments:
                a comprehensive theory test and hands-on coding challenges.
              </Typography>
            </TimelineBody>
          </TimelineItem> */}
          </Timeline>
        </div>
        <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <img src="/logo.svg" alt="" className="w-60 lg:w-80" />
        </div>
      </section>

      <section className="px-4 lg:px-10 py-20 bg-gray-200 lg:flex gap-12">
        <div className="lg:w-1/2">
          <Typography variant="h1" className="font-mavenPro font-black">
            Built-in IDE
          </Typography>
          <Typography variant="paragraph" className="mt-4 leading-loose">
            Take your programming journey to the next level with its built-in
            IDE, offering you all the essential tools right at your fingertips.
            Say goodbye to the hassle of searching for the right software or
            setting up complex environments – we've got you covered!
          </Typography>
          <Typography variant="paragraph" className="mt-4 leading-loose">
            With RediSetCode, you can truly immerse yourself in the joy of
            learning, as we eliminate all distractions and let you concentrate
            on what matters most: mastering the art of coding.
          </Typography>

          <Button
            onClick={() => navigate("/codelab")}
            variant="filled"
            color="green"
            className="mt-10 flex gap-3"
          >
            <span>Try built-in editor</span>
            <HiArrowUpRight className="text-lg" />
          </Button>
        </div>

        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <Card className="h-60 lg:h-full">
            <CardBody className="h-full px-0 py-4">
              <Editor
                width="100%"
                height="100%"
                language="cpp"
                value={`#include<iostream>
using namespace std;
                
int main() {
    cout << "Hello World";

    return 0;
}
                
                `}
                theme="vs-light"
                options={{
                  // lineNumbers: "off", // Remove line numbers gutter
                  minimap: {
                    enabled: false,
                  },
                }}
              />
            </CardBody>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-200 px-4 lg:px-10 flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
        <Typography color="blue-gray" className="font-normal">
          &copy; RediSetCode
        </Typography>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="https://github.com/the-19th-ivan"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              <DiGithubBadge className="text-3xl" />
            </Typography>
          </li>
        </ul>
      </footer>
    </main>
  );
}
