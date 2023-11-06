import { Editor, useMonaco } from "@monaco-editor/react";
import LessonNavbar from "./LessonNavbar";
import "monaco-themes/themes/Solarized-dark.json";
import { useEffect, useState } from "react";
import { Button, Card, CardBody, Spinner } from "@material-tailwind/react";
import {
  HiArrowNarrowRight,
  HiCheckCircle,
  HiOutlineCode,
  HiPlay,
} from "react-icons/hi";
import LessonModal from "../../components/modals/LessonModal";
import TerminalModal from "../../components/modals/TerminalModal";
import StageOne from "./contents/StageOne";
import StageTwo from "./contents/StageTwo";
import StageThree from "./contents/StageThree";
import StageFour from "./contents/StageFour";
import StageFive from "./contents/StageFive";
import StageSix from "./contents/StageSix";
import StageSeven from "./contents/StageSeven";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import LessonCompletedModal from "../../components/modals/LessonCompletedModal";
import LevelUpModal from "../../components/modals/LevelUpModal";
import InputTerminalModal from "../../components/modals/InputTerminalModal";
import BadgeModal from "../../components/modals/BadgeModal";
import Confetti from "react-confetti";
import Stage8 from "./contents/Stage8";
import Stage9 from "./contents/Stage9";
import Stage10 from "./contents/Stage10";
import Stage11 from "./contents/Stage11";
import Stage12 from "./contents/Stage12";
import Stage13 from "./contents/Stage13";
import Stage14 from "./contents/Stage14";
import Stage15 from "./contents/Stage15";
import { host } from "../../utils/env";

export default function Lesson() {
  const monaco = useMonaco();
  const [openEditor, setOpenEditor] = useState(true);
  const [openModal, setOpenModal] = useState("");
  const [openLevelUpModal, setOpenLevelUpModal] = useState(false);
  const [nextLessonBtn, setNextLessonBtn] = useState(false);
  const [openTerminal, setOpenTerminal] = useState(false);
  const [userCode, setUserCode] = useState("");
  const [lesson, setLesson] = useState({});
  const [nextLesson, setNextLesson] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isCompiling, setIsCompiling] = useState(false);
  const [output, setOutput] = useState();
  const [cookies] = useCookies(["jwt"]);
  const [openInputTerminal, setOpenInputTerminal] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [badgeModal, setBadgeModal] = useState(false);
  const [badge, setBadge] = useState({});
  const [level, setLevel] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const navigate = useNavigate();
  const { stageId } = useParams();

  const startConfetti = () => {
    setShowConfetti(true);

    // You can stop the confetti after a certain duration
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000); // Change the duration as needed
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setOpenEditor(true);
        setNextLessonBtn(false);

        const config = {
          headers: {
            Authorization: `Bearer ${cookies.jwt}`,
          },
        };

        const response = await axios.get(
          `${host}/api/v1/stages/${stageId}`,
          config
        );

        const { stage } = response.data.data;
        setLesson(stage);
        setUserCode(stage.codeSnippet);
        if (!stage.codeSnippet) setOpenEditor(false);
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
  }, [cookies.jwt, navigate, stageId]);

  function handleOpenTerminal() {
    setOpenTerminal((current) => !current);
  }

  function handleOpenModal(id) {
    switch (id) {
      case "mark-as-done":
        setOpenModal("mark-as-done");
        break;
      default:
        setOpenModal("");
    }
  }

  function handleToggleEditor() {
    setOpenEditor((current) => !current);
  }

  useEffect(() => {
    if (monaco) {
      // console.log("here is the monaco isntance:", monaco);
      // import("monaco-themes/themes/Solarized-dark.json")
      //   .then((data) => {
      //     monaco.editor.defineTheme("solarized-dark", data);
      //   })
      //   .then(() => monaco.editor.setTheme("solarized-dark"));
      // monaco.editor.defineTheme("monokai-bright").then(_ => monaco.editor.setMonacoTheme("monokai-bright"));
    }
  }, [monaco]);

  async function handleMarkAsDone() {
    try {
      setIsLoading(true);

      const isBonusEvent = cookies.event === "Bonus";

      const config = {
        headers: {
          Authorization: `Bearer ${cookies.jwt}`,
        },
      };

      const response = await axios.post(
        `${host}/api/v1/stages/${stageId}/mark-as-done`,
        {
          bonus: isBonusEvent,
        },
        config
      );

      const responseData = response.data.data;

      setIsLoading(false);
      startConfetti();

      if (responseData.earnBadge.flag) {
        setBadgeModal(true);
        setBadge(responseData.earnBadge.badge);
      }
      if (responseData.levelUp.flag) {
        setOpenLevelUpModal(true);
        setLevel(responseData.levelUp.level);
      } else {
        setOpenModal("mark-as-done");
      }

      setNextLesson(responseData.nextStage);
      setNextLessonBtn(true);
      console.log("finished with no error");
    } catch (error) {
      const { status } = error.response;

      if (status === 400) {
        setIsLoading(false);
        setOpenModal("already-completed");
      } else {
        navigate("/server-error");
      }
    }
  }

  function textAreaToString(textAreaValue) {
    return textAreaValue.split("\n").join(" ");
  }

  // Send to server for compilation
  async function handleSubmit() {
    setOpenInputTerminal(false);
    setOpenTerminal(true);
    setIsCompiling(true);

    try {
      const data = {
        code: userCode,
        input: `${textAreaToString(userInput)}`,
      };

      const response = await axios.post(
        `${host}/api/v1/codelab/compiler`,
        data
      );

      const responseData = response.data;
      const compiledCode = responseData.stdout || responseData.stderr;
      setOutput(compiledCode);
      setUserInput("");
      setIsCompiling(false);
    } catch (error) {
      console.log(error);
      navigate("/server-error");
      setIsLoading(false);
    }
  }

  function handleRun() {
    const occurrenceCount = countOccurrences(userCode);

    if (!userCode) {
      return;
    }

    if (occurrenceCount <= 0) {
      handleSubmit();
      return;
    }

    setOpenInputTerminal(true);
  }

  function countOccurrences(inputString) {
    // Escape any special characters in the word
    const escapedWord = "cin >>".replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    // Create a regular expression with optional spaces
    const regex = new RegExp(escapedWord.replace(/\s/g, "\\s*"), "g");

    // Use the match method to find all matches and return the count
    const matches = inputString.match(regex);
    return matches ? matches.length : 0;
  }

  function handleNextStage() {
    if (nextLesson) {
      setOpenModal("");
      navigate(`/lesson/${nextLesson}`);
    }
    return;
  }

  function handleContent() {
    switch (lesson.content) {
      case "StageOne":
        return <StageOne />;
      case "StageTwo":
        return <StageTwo />;
      case "StageThree":
        return <StageThree />;
      case "StageFour":
        return <StageFour />;
      case "StageFive":
        return <StageFive />;
      case "StageSix":
        return <StageSix />;
      case "StageSeven":
        return <StageSeven />;
      case "Stage8":
        return <Stage8 />;
      case "Stage9":
        return <Stage9 />;
      case "Stage10":
        return <Stage10 />;
      case "Stage11":
        return <Stage11 />;
      case "Stage12":
        return <Stage12 />;
      case "Stage13":
        return <Stage13 />;
      case "Stage14":
        return <Stage14 />;
      case "Stage15":
        return <Stage15 />;
      default:
        return "No Content";
    }
  }

  return (
    <main>
      {showConfetti && <Confetti />}
      <section className="h-full">
        <LessonNavbar />

        {isLoading ? (
          <div className="h-[90vh] flex items-center justify-center">
            <Spinner color="indigo" />
          </div>
        ) : (
          <div
            className={`flex flex-col lg:flex-row ${
              openEditor ? "" : "justify-center"
            } gap-8 p-4`}
          >
            <div
              className={`${
                openEditor ? "md:hidden lg:block" : ""
              } w-full lg:w-1/2 h-[80vh] overflow-y-auto`}
            >
              <div className="mb-4">
                {nextLessonBtn && (
                  <Button
                    onClick={handleNextStage}
                    size="sm"
                    color="indigo"
                    className="flex items-center gap-3"
                  >
                    Next Lesson
                    <HiArrowNarrowRight className="" />
                  </Button>
                )}
              </div>
              {handleContent()}
              <div className="mt-6">
                {!nextLessonBtn && (
                  <Button
                    onClick={handleMarkAsDone}
                    size="sm"
                    color="green"
                    className="flex items-center gap-3"
                  >
                    <HiCheckCircle className="" />
                    Mark as Done
                  </Button>
                )}
              </div>
            </div>
            <div
              className={`${
                openEditor ? "" : "hidden"
              } w-full lg:w-1/2 h-[80vh]`}
            >
              <div className="flex justify-between items-center p-1">
                <p className="font-medium">main.cpp</p>
                <Button
                  onClick={handleRun}
                  size="sm"
                  color="green"
                  className="flex items-center gap-3"
                >
                  <HiPlay />
                  Run
                </Button>
              </div>
              <Card className="h-full">
                <CardBody className="h-full px-0 py-4">
                  <Editor
                    width="100%"
                    height="100%"
                    language="cpp"
                    theme="vs-light"
                    value={userCode}
                    onChange={(value) => {
                      setUserCode(value);
                    }}
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
          </div>
        )}
      </section>

      <button
        onClick={handleToggleEditor}
        className="fixed bottom-4 right-4 bg-indigo-800 text-white shadow-lg p-4 font-bold rounded-full flex items-center gap-3"
      >
        <HiOutlineCode className="text-white" />
        {openEditor ? "Close Editor" : "Open Editor"}
      </button>

      <LessonModal
        open={openModal === "mark-as-done"}
        handleOpen={() => handleOpenModal("")}
        nextStage={handleNextStage}
        title={lesson.name}
        exp={lesson.exp}
      />
      <LessonCompletedModal
        open={openModal === "already-completed"}
        handleOpen={() => handleOpenModal("")}
      />

      <LevelUpModal
        open={openLevelUpModal}
        handleOpen={() => {
          setOpenLevelUpModal(false);
          setOpenModal("mark-as-done");
        }}
        level={level}
      />
      <BadgeModal
        open={badgeModal}
        handleOpen={() => {
          setBadgeModal(false);
          setOpenModal("mark-as-done");
        }}
        badge={badge}
      />
      <TerminalModal
        open={openTerminal}
        handleOpen={handleOpenTerminal}
        output={output}
        isLoading={isCompiling}
      />

      <InputTerminalModal
        open={openInputTerminal}
        handleOpen={() => {
          setOpenInputTerminal(false);
          setUserInput("");
        }}
        size={countOccurrences(userCode)}
        userInput={userInput}
        handleUserInput={setUserInput}
        onSubmit={handleSubmit}
      />
    </main>
  );
}
