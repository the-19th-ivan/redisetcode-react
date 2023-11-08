import {
  Button,
  Card,
  CardBody,
  Option,
  Select,
} from "@material-tailwind/react";
import Navbar from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { HiPlay } from "react-icons/hi";
import { Editor, useMonaco } from "@monaco-editor/react";
import { useEffect, useState } from "react";
import TerminalModal from "../../components/modals/TerminalModal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import InputTerminalModal from "../../components/modals/InputTerminalModal";
import MobileNav from "../../components/MobileNav";
import { host } from "../../utils/env";

const helloWorld = `#include<iostream>
using namespace std;

int main() {
    cout << "Hello World";
}

`;

const addition = `#include <iostream>
using namespace std;

int main() {

  int first_number = 5;
  int second_number = 2; 
    
  int sum = first_number + second_number;

  // prints sum 
  cout << first_number << " + " <<  second_number << " = " << sum;     

  return 0;
}`;

const input = `#include <iostream>
using namespace std;

int main() {
    int num;
    cout << "Enter a number: ";
    cin >> num;
    cout << endl << "You entered: " << num << endl;
    return 0;
}
`;

const conditional = `#include <iostream>
using namespace std;

int main() {
    int age;
    cout << "Enter your age: ";
    cin >> age;

    if (age >= 18) {
        cout << endl << "You are an adult." << endl;
    } else {
        cout << endl << "You are a minor." << endl;
    }

    return 0;
}
`;

const loop = `#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 10; i++) {
        cout << i << " ";
    }
    cout << endl;
    return 0;
}
`;

const func = `#include <iostream>
using namespace std;

int add(int a, int b) {
    return a + b;
}

int main() {
    int num1, num2;
    cout << "Enter two numbers: ";
    cin >> num1 >> num2;
    int sum = add(num1, num2);
    cout << endl << "Sum: " << sum << endl;
    return 0;
}
`;

export default function Codelab() {
  const monaco = useMonaco();
  const [openTerminal, setOpenTerminal] = useState(false);
  const [selectedValue, setSelectedValue] = useState("hello-world");
  const [isLoading, setIsLoading] = useState(false);
  const [userCode, setUserCode] = useState(helloWorld);
  const [output, setOutput] = useState("");
  const [openInputTerminal, setOpenInputTerminal] = useState(false);
  const [userInput, setUserInput] = useState("");

  const navigate = useNavigate();

  function handleOpenTerminal() {
    setOpenTerminal((current) => !current);
  }

  function handleSelectChange(newValue) {
    setSelectedValue(newValue);

    switch (newValue) {
      case "basic-addition":
        setUserCode(addition);
        break;
      case "input":
        setUserCode(input);
        break;
      case "conditional":
        setUserCode(conditional);
        break;
      case "loops":
        setUserCode(loop);
        break;
      case "function":
        setUserCode(func);
        break;
      default:
        setUserCode(helloWorld);
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

  function textAreaToString(textAreaValue) {
    return textAreaValue.split("\n").join(" ");
  }

  // Send to server for compilation
  async function handleSubmit() {
    setOpenInputTerminal(false);
    setOpenTerminal(true);
    setIsLoading(true);

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
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      navigate("/server-error");
      setIsLoading(false);
    }
  }

  function handleRun() {
    const occurrenceCount = countOccurrences(userCode);
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

  return (
    <main className="bg-primary h-screen">
      <Sidebar />

      <section className="lg:ml-[15rem]">
        <Navbar />
        <MobileNav />

        {/* Content */}
        <div className="w-full h-screen lg:h-[80vh] p-4">
          <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center p-1">
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
                  <Option value="input">Input & Output</Option>
                  <Option value="conditional">If Statement</Option>
                  <Option value="loops">For Loop</Option>
                  <Option value="function">Function</Option>
                </Select>
              </div>
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
      </section>

      <TerminalModal
        open={openTerminal}
        handleOpen={handleOpenTerminal}
        output={output}
        isLoading={isLoading}
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
