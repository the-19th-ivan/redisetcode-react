import { Button, Option, Select } from "@material-tailwind/react";
import Navbar from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { HiPlay } from "react-icons/hi";
import { Editor, useMonaco } from "@monaco-editor/react";
import { useEffect, useState } from "react";
import TerminalModal from "../../components/modals/TerminalModal";

const helloWorld = `#include<iostream>
using namespace std;

int main() {
    cout << "Hello World";
}

`;

const addition = `#include <iostream>
using namespace std;

int main() {

  int first_number = 5,
  int second_number = 2, 
    
  int sum = first_number + second_number;

  // prints sum 
  cout << first_number << " + " <<  second_number << " = " << sum;     

  return 0;
}`;

export default function Codelab() {
  const monaco = useMonaco();
  const [openTerminal, setOpenTerminal] = useState(false);
  const [selectedValue, setSelectedValue] = useState("hello-world");
  const [boilerplateCode, setBoilerplateCode] = useState(helloWorld);

  function handleOpenTerminal() {
    setOpenTerminal((current) => !current);
  }

  function handleSelectChange(newValue) {
    setSelectedValue(newValue);

    switch (newValue) {
      case "basic-addition":
        setBoilerplateCode(addition);
        break;

      default:
        setBoilerplateCode(helloWorld);
        break;
    }
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
    <main className="bg-primary">
      <Sidebar />

      <section className="sm:ml-[15rem]">
        <Navbar />

        {/* Content */}
        <div className="w-full h-[80vh] p-4">
          <div className="flex justify-between items-center p-1">
            <p className="">main.cpp</p>
            <div className="flex gap-4">
              <div className="bg-secondary">
                <Select
                  label="Example"
                  value={selectedValue}
                  onChange={handleSelectChange}
                  className="bg-secondary text-gray-800"
                >
                  <Option value="hello-world">Hello World</Option>
                  <Option value="basic-addition">Basic Addition</Option>
                </Select>
              </div>
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
          </div>
          <Editor
            width="100%"
            height="100%"
            language="cpp"
            theme="vs-light"
            value={boilerplateCode}
            onChange={(value) => {
              setBoilerplateCode(value);
            }}
          />
        </div>
      </section>

      <TerminalModal open={openTerminal} handleOpen={handleOpenTerminal} />
    </main>
  );
}
