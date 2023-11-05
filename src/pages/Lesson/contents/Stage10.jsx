/* eslint-disable react/no-unescaped-entities */
import { Typography } from "@material-tailwind/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function Stage10() {
  return (
    <main className="p-4">
      <Typography
        variant="h4"
        className="text-gray-900 font-semibold text-center"
      >
        Control Structures 🚦
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        As Mia's journey into the world of technology, algorithms, and
        pseudocode continued, she realized there was another crucial tool in her
        programming toolkit: control structures. These structures allowed her to
        make decisions and control the flow of her programs, and she decided to
        seek guidance from the Algorithm Guru once again. 🛣️🧭
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Mia asked, "Guru, I've learned about algorithms and pseudocode. Now,
        what are control structures, and how can they help me in programming?"
        🤔💻
      </Typography>

      <img src="/assets/traffic-lights.svg" className="w-36 my-10" />

      <Typography variant="paragraph" className="mt-4">
        The Algorithm Guru, always ready to simplify complex ideas, responded,
        "Control structures are like the traffic signals for your code. They
        help you direct how your program runs and decide what actions to take
        based on certain conditions." 🚦🚀
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Mia was curious but needed more clarity. "So, how do control structures
        work, and why are they important?" 🤷‍♀️📚
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        The Guru began to explain, "There are mainly two types of control
        structures: conditional and looping. Conditional structures, like 'if'
        statements, allow your program to make choices. For example, if a
        condition is true, do one thing; if it's false, do something else.
        Looping structures, like 'while' or 'for' loops, help you repeat tasks
        until a certain condition is met. They make your program efficient and
        save you from writing the same code over and over." 🔄⚙️
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Mia was starting to grasp the concept. "Can you give me some examples of
        how control structures are used in real programs?" 🤩👩‍💻
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        The Guru nodded and said, "Sure, here are some examples:" 📝💡
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <SyntaxHighlighter language="cpp">
          {`if (age >= 18) {
    cout << "You are an adult." << endl;
} else {
    cout << "You are a minor." << endl;
}`}
        </SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        In this example, Mia saw how an 'if' statement helps make a decision
        based on a person's age. If they are 18 or older, they are considered an
        adult; otherwise, they are a minor. 🧑🧒
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <SyntaxHighlighter language="cpp">
          {`for (int i = 0; i < 5; i++) {
    cout << "Hello" << endl;
}`}
        </SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Here, Mia learned how a 'for' loop could be used to print "Hello" five
        times. The loop runs a set number of times, making repetitive tasks more
        manageable. 🖨️🖐️
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <SyntaxHighlighter language="cpp">
          {`while (answer !== "yes") {
    cout << "Please enter 'yes': ";
    cin >> answer;
}`}
        </SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        This example showed how a 'while' loop could keep asking a user for
        input until they provided the correct answer, reinforcing the concept of
        repeating actions until a certain condition is met. 🔁📝
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        The Guru continued, "Control structures are like the steering wheel of
        your program. They guide it, making sure it goes in the right direction
        and does the right things." 🚗🛣️
      </Typography>

      <img src="/assets/flowchart.svg" className="w-36 my-10" />

      <Typography variant="paragraph" className="mt-4">
        Mia was excited to use control structures to make her programs more
        intelligent and responsive. "So, they help me create programs that can
        make decisions and do tasks repeatedly, making my code efficient and
        smart?" 🚀💡
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        The Guru smiled, "You got it! Control structures are your programming
        assistants, helping you create programs that can make choices and do
        repetitive tasks, making them more dynamic and efficient." 🙌🌟
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        With her newfound understanding of control structures and practical
        examples, Mia was ready to tackle more complex challenges and create
        programs that could make smart decisions and perform repetitive tasks.
        She knew these structures were the key to unlocking her programming
        potential and making her technology dreams come true. 🗝️🎉
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Mia's journey continued, and with control structures at her side, she
        was well-prepared to conquer any tech challenge that came her way. What
        exciting adventures in the world of technology lay ahead for Mia, and
        how would her understanding of control structures help her write amazing
        code? 🌍🚀
      </Typography>

      <Typography variant="h5" className="mt-4">
        Try It Yourself 🚀
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Using your knowledge with equality operators and this new knowledge, do
        the following:
      </Typography>

      <ul className="pl-8 mt-2 list-disc space-y-2">
        <li>
          <Typography variant="paragraph">
            Correct the code so that if grade is 75 and higher, it will display
            "You Passed!"
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph">
            If you encounter an error, read the error message to better
            understand where the problem is
          </Typography>
        </li>
      </ul>
    </main>
  );
}
