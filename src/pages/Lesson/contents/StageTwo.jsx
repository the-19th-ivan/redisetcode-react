/* eslint-disable react/no-unescaped-entities */
import { Typography } from "@material-tailwind/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const code = `#include <iostream>
using namespace std;

int main() {
    cout << "Hello World!" << endl;
    return 0;
}`;

export default function StageTwo() {
  return (
    <main className="p-4">
      <Typography
        variant="h4"
        className="text-gray-900 font-semibold text-center"
      >
        👋 Hello World 👋
      </Typography>

      <img src="/assets/hello-world.svg" className="w-36 my-10" />

      <Typography variant="paragraph" className="mt-4">
        One day, as Alex continued their journey into the world of programming,
        they decided to learn about a classic and simple program known as
        "Hello, World!" It was like the ABC of programming. 📚
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        In C++, this program looked like this:
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <SyntaxHighlighter language="cpp">{code}</SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Professor Bytes, always ready to share knowledge, explained the code to
        Alex: 🧙‍♂️
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <ul>
          <li>
            <Typography variant="paragraph" className="mt-2">
              <strong className="font-bold">
                1. #include &lt;iostream&gt;:
              </strong>{" "}
              This line includes the "iostream" library, which stands for "input
              and output stream." It's like opening a book with all the tools to
              read and write information. We need this to use the `cout` and
              `endl` later in the program.
            </Typography>
          </li>
          <li>
            <Typography variant="paragraph" className="mt-2">
              <strong className="font-bold">2. using namespace std;:</strong>{" "}
              This tells the program to use functions and objects from the "std"
              (standard) part of the library. It's like focusing on the main
              chapters of the book and skipping the appendix.
            </Typography>
          </li>
          <li>
            <Typography variant="paragraph" className="mt-2">
              <strong className="font-bold">3. {`int main() { ... }`}:</strong>{" "}
              Here, we define the main function. In C++, a program starts
              running from the `main` function. It's like the first chapter of a
              book, where the story begins.
            </Typography>
          </li>
          <li>
            <Typography variant="paragraph" className="mt-2">
              <strong className="font-bold">
                4. cout &lt;&lt; "Hello, World!" &lt;&lt; endl;:
              </strong>{" "}
              This line is where the magic happens. `cout` is like a messenger,
              and we use it to send messages to the screen. The `&lt;&lt;` are
              like arrows pointing to where the message should go, in this case,
              the screen. It's saying, "Send the message 'Hello, World!' to the
              screen." The `endl` is like pressing 'Enter' on your keyboard to
              start a new line.
            </Typography>
          </li>
          <li>
            <Typography variant="paragraph" className="mt-2">
              <strong className="font-bold">5. return 0;:</strong> This line
              tells the program that everything went well, and it can stop. The
              program returns the number 0, which is like saying, "Mission
              accomplished." 🚀
            </Typography>
          </li>
        </ul>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Alex, now understanding the concept of including libraries, the role of
        the semicolon, and each line of code, felt like they were mastering the
        language of machines. Programming was like a story with its own unique
        syntax, and they were becoming fluent in it. 📖
      </Typography>
      <Typography variant="paragraph" className="mt-4">
        As Alex delved deeper into the world of programming, they encountered a
        tiny yet significant character in the code called the "semicolon." This
        small symbol, often overlooked, played a crucial role in the language of
        programming. 💬
      </Typography>

      <img src="/assets/semicolon.svg" className="w-36 my-10" />

      <Typography variant="paragraph" className="mt-4">
        Professor Bytes decided to shed light on the importance of the
        semicolon: 🌟
      </Typography>
      <Typography variant="paragraph" className="mt-4">
        "You see, Alex," he began, "the semicolon is like a punctuation mark in
        the world of programming. Just as a period ends a sentence, a semicolon
        ends a statement in your code. It's the way we tell the computer that
        one instruction is complete and the next one is about to begin."
      </Typography>
      <Typography variant="paragraph" className="mt-4">
        Alex nodded, starting to grasp the significance. "So, without the
        semicolon, the computer wouldn't understand where one action ends and
        the next begins?" 🤯
      </Typography>
      <Typography variant="paragraph" className="mt-4">
        "Exactly," Professor Bytes confirmed. "Imagine if you were reading a
        story without any punctuation, no periods, no commas, nothing. It would
        be a jumbled mess. Similarly, in programming, without semicolons, the
        code would be incomprehensible to the computer." 🤖
      </Typography>
      <Typography variant="paragraph" className="mt-4">
        Alex began to appreciate the role of the semicolon as a storyteller's
        tool in the world of programming. It was the key to clarity and
        precision, ensuring that the computer followed the instructions as
        intended. It was like adding periods and commas to create a
        well-structured narrative. 📝
      </Typography>
      <Typography variant="paragraph" className="mt-4">
        With this newfound understanding, Alex continued their journey, writing
        code that told stories to machines using semicolons as the storytellers.
        Each semicolon marked the end of one instruction and the beginning of
        the next, creating a beautifully structured narrative in the language of
        technology. 🚧
      </Typography>
      <Typography variant="paragraph" className="mt-4">
        And so, Alex's programming adventure continued, with semicolons guiding
        the way, ensuring that every line of code was a well-told story for the
        machines to understand. What would they discover next in their
        exploration of the digital world? 🌐
      </Typography>

      <Typography variant="h5" className="mt-4">
        Try It Yourself 🚀
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        You can actually learn how to code by DOING. Reading will not get you
        far! The only way is to get your hands dirty and write those codes 💻
      </Typography>

      <ul className="pl-8 mt-2 list-disc space-y-2">
        <li>
          <Typography variant="paragraph">
            Write your first hello world program on the editor on the right and
            Run it. See the example above but don't copy paste it (we'll be sad
            if you do that) 😢
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph">
            Instead of outputting "Hello World", we think it's much better to
            display the name of your crush (e.g., Hello, Alyssa!). Can you do
            that? (we know you can) 😄
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph">
            Here's the exciting part. Post your code to your FB/IG stories (or
            any social media). Take the risk or lose the chance. We'll leave it
            up to you. 🤭
          </Typography>
        </li>
      </ul>
    </main>
  );
}
