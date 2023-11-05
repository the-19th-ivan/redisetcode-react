/* eslint-disable react/no-unescaped-entities */
import { Typography } from "@material-tailwind/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function StageSix() {
  return (
    <main className="p-4">
      <Typography
        variant="h4"
        className="text-gray-900 font-semibold text-center"
      >
        🧮 Arithmetic Operations 📐
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        As Alex's programming journey advanced, they discovered another crucial
        aspect of programming: arithmetic operations. They realized that
        programming wasn't just about storing and retrieving data; it was also
        about performing calculations and making computers solve problems. 🤓🔍
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        One day, while discussing their programming adventures with Professor
        Bytes, Alex asked, "Professor, I've been learning about variables, data
        types, and user input with 'cin.' How can I make programs perform
        calculations, like addition, subtraction, or more complex math?" 🤔
      </Typography>

      <img src="/assets/math.svg" className="w-36 my-10" />

      <Typography variant="paragraph" className="mt-4">
        Professor Bytes nodded and said, "Ah, you're talking about arithmetic
        operations, Alex. These are like the tools in your mathematical toolbox
        that allow you to perform calculations in your programs. You can use
        these operations to manipulate numbers and solve problems." 🛠️
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Alex was eager to learn more. "Could you give me some examples of
        arithmetic operations and explain how they work?" 📚📐
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        "Of course," Professor Bytes said. "Here are some common arithmetic
        operations: 📝
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <strong className="font-bold">1. Addition (+):</strong> This operation
        is used to add two or more numbers together. For example: 🧮
      </Typography>
      <Typography variant="paragraph" className="mt-2">
        <SyntaxHighlighter language="cpp">{`int sum = 5 + 3; // The 'sum' variable now holds the result, which is 8.`}</SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <strong className="font-bold">2. Subtraction (-):</strong> This
        operation is used to subtract one number from another. For example: 🚂
      </Typography>
      <Typography variant="paragraph" className="mt-2">
        <SyntaxHighlighter language="cpp">{`int difference = 10 - 7; // The 'difference' variable now holds the result, which is 3.`}</SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <strong className="font-bold">3. Multiplication (\*):</strong> This
        operation is used to multiply two or more numbers. For example: 🌾
      </Typography>
      <Typography variant="paragraph" className="mt-2">
        <SyntaxHighlighter language="cpp">{`int product = 4 * 6; // The 'product' variable now holds the result, which is 24.`}</SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <strong className="font-bold">4. Division (/):</strong> This operation
        is used to divide one number by another. For example: 🍕
      </Typography>
      <Typography variant="paragraph" className="mt-2">
        <SyntaxHighlighter language="cpp">{`double quotient = 8.0 / 2.0; // The 'quotient' variable now holds the result, which is 4.0.`}</SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <strong className="font-bold">5. Modulo (%):</strong> This operation
        gives you the remainder when one number is divided by another. For
        example: 📏
      </Typography>
      <Typography variant="paragraph" className="mt-2">
        <SyntaxHighlighter language="cpp">{`int remainder = 10 % 3; // The 'remainder' variable now holds the result, which is 1.`}</SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Professor Bytes continued, "These operations are like the basic building
        blocks for performing math in your programs. You can use them to create
        more complex calculations, like solving equations or implementing
        algorithms." 🧩
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Alex was excited to put this knowledge into practice. "So, I can use
        these operations to create programs that solve problems and perform
        calculations?" 🎯
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        "Absolutely," Professor Bytes affirmed. "Whether you're building a
        simple calculator or a complex scientific simulation, understanding
        arithmetic operations is crucial. They're the tools that empower your
        programs to process data and provide valuable results." 🚀📈
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        With this newfound knowledge of arithmetic operations, Alex continued
        their programming adventure, equipped with the ability to create
        programs that could perform calculations, solve problems, and make the
        digital world a more efficient and dynamic place. What exciting
        challenges and solutions would they create next? 🌟🔢
      </Typography>

      <Typography variant="h5" className="mt-4">
        Try It Yourself 🚀
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        In this challenge, you are a cashier.
      </Typography>

      <ul className="pl-8 mt-2 list-disc space-y-2">
        <li>
          <Typography variant="paragraph">
            There are already variables created (firstItem, secondItem, total,
            and money)
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph">
            Add firstItem and secondItem and put the value in "total" variable.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph">
            Create a variable "change" and assign the value of subtracting
            "total" from "money". (You should get 466 as output when you run
            your code)
          </Typography>
        </li>
      </ul>
    </main>
  );
}
