import { Editor, useMonaco } from "@monaco-editor/react";
import LessonNavbar from "./LessonNavbar";
import TestContent from "./contents/TestContent";
import "monaco-themes/themes/Solarized-dark.json";
import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { HiCheckCircle, HiOutlineCode, HiPlay } from "react-icons/hi";
import LessonModal from "../../components/modals/LessonModal";
import TerminalModal from "../../components/modals/TerminalModal";

const boilerplate = `#include<iostream>
using namespace std;

int main() {
    cout << "Hello World";
}

`;

export default function Lesson() {
  const monaco = useMonaco();
  const [openEditor, setOpenEditor] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [openTerminal, setOpenTerminal] = useState(false);

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

  return (
    <main>
      <section className="h-full">
        <LessonNavbar />

        {/* Content */}
        <div className={`flex ${openEditor ? "" : "justify-center"} gap-8 p-4`}>
          <div className="w-1/2 h-[80vh] overflow-y-auto">
            <TestContent />
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
              value={boilerplate}
            />
          </div>
        </div>
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
