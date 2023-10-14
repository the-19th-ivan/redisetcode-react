import { Editor, useMonaco } from "@monaco-editor/react";
import LessonNavbar from "./LessonNavbar";
import TestContent from "./contents/TestContent";
import "monaco-themes/themes/Solarized-dark.json";
import { useEffect, useState } from "react";
import { Button, Spinner } from "@material-tailwind/react";
import { HiCheckCircle, HiOutlineCode, HiPlay } from "react-icons/hi";
import LessonModal from "../../components/modals/LessonModal";
import TerminalModal from "../../components/modals/TerminalModal";
import StageOne from "./contents/StageOne";
import StageTwo from "./contents/StageTwo";
import StageThree from "./contents/StageThree";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

export default function Lesson() {
  const monaco = useMonaco();
  const [openEditor, setOpenEditor] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [openTerminal, setOpenTerminal] = useState(false);
  const [lesson, setLesson] = useState({});
  const [code, setCode] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [cookies] = useCookies(["jwt"]);

  const navigate = useNavigate();
  const { stageId } = useParams();

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
          `http://localhost:8000/api/v1/stages/${stageId}`,
          config
        );

        const { stage } = response.data.data;
        setLesson(stage);
        setCode(stage.codeSnippet);
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

  function handleOpenModal() {
    setOpenModal((current) => !current);
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

  function handleContent() {
    switch (lesson.content) {
      case "StageOne":
        return <StageOne />;
      case "StageTwo":
        return <StageTwo />;
      case "StageThree":
        return <StageThree />;
      default:
        return "No Content";
    }
  }

  return (
    <main>
      <section className="h-full">
        <LessonNavbar />

        {isLoading ? (
          <div className="h-[90vh] flex items-center justify-center">
            <Spinner color="indigo" />
          </div>
        ) : (
          <div
            className={`flex ${openEditor ? "" : "justify-center"} gap-8 p-4`}
          >
            <div className="w-1/2 h-[80vh] overflow-y-auto">
              {handleContent()}
              <div className="mt-6">
                <Button
                  onClick={handleOpenModal}
                  size="sm"
                  color="green"
                  className="flex items-center gap-3"
                >
                  <HiCheckCircle className="" />
                  Mark as Done
                </Button>
              </div>
            </div>
            <div className={`${openEditor ? "" : "hidden"} w-1/2 h-[80vh]`}>
              <div className="flex justify-between items-center p-1">
                <p className="font-medium">main.cpp</p>
                <Button
                  onClick={handleOpenTerminal}
                  size="sm"
                  color="green"
                  className="flex items-center gap-3"
                >
                  <HiPlay />
                  Run
                </Button>
              </div>
              <Editor
                width="100%"
                height="100%"
                language="cpp"
                theme="vs-light"
                value={code}
              />
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

      <LessonModal open={openModal} handleOpen={handleOpenModal} />
      <TerminalModal open={openTerminal} handleOpen={handleOpenTerminal} />
    </main>
  );
}
