/* eslint-disable react/no-unescaped-entities */
import { Typography } from "@material-tailwind/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function StageSeven() {
  return (
    <main className="p-4">
      <Typography
        variant="h4"
        className="text-gray-900 font-semibold text-center"
      >
        Equality Operators
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        As Alex's programming journey reached its climax, they discovered an
        essential aspect of programming: equality and relational operations.
        These operations allowed programs to compare values, make decisions, and
        determine the flow of the program. 📊🔍
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        One day, while deep in conversation with Professor Bytes, Alex asked,
        "Professor, I've learned about variables, data types, arithmetic
        operations, and 'cin.' How can I make programs compare values and make
        decisions based on those comparisons?" 🤔📈
      </Typography>

      <img src="/assets/flowchart.svg" className="w-36 my-10" />

      <Typography variant="paragraph" className="mt-4">
        Professor Bytes smiled and said, "Ah, you're diving into the world of
        equality and relational operations, Alex. These are the tools that let
        your programs make comparisons and take different actions based on the
        results. They're like the decision-makers of your program." 🛠️🤖
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Alex was intrigued and wanted to know more. "Could you give me some
        examples of equality and relational operations and explain how they
        work?" 📚📊
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        "Of course," Professor Bytes said. "Here are some common equality and
        relational operations: 📝
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <strong className="font-bold">1. Equality (==):</strong> This operation
        checks if two values are equal. For example: 🎯
      </Typography>
      <Typography variant="paragraph" className="mt-2">
        <SyntaxHighlighter language="cpp">{`bool isEqual = (5 == 5); // The 'isEqual' variable now holds 'true' because 5 is indeed equal to 5.`}</SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <strong className="font-bold">2. Inequality (!=):</strong> This
        operation checks if two values are not equal. For example: 🚫
      </Typography>
      <Typography variant="paragraph" className="mt-2">
        <SyntaxHighlighter language="cpp">{`bool isNotEqual = (7 != 3); // The 'isNotEqual' variable now holds 'true' because 7 is not equal to 3.`}</SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <strong className="font-bold">3. {`Greater Than (>):`}</strong> This
        operation checks if one value is greater than another. For example: ⬆️
      </Typography>
      <Typography variant="paragraph" className="mt-2">
        <SyntaxHighlighter language="cpp">{`bool isGreaterThan = (10 > 5); // The 'isGreaterThan' variable now holds 'true' because 10 is greater than 5.`}</SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <strong className="font-bold">4. {`Less Than (<):`}</strong> This
        operation checks if one value is less than another. For example: ⬇️
      </Typography>
      <Typography variant="paragraph" className="mt-2">
        <SyntaxHighlighter language="cpp">{`bool isLessThan = (3 < 8); // The 'isLessThan' variable now holds 'true' because 3 is less than 8.`}</SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <strong className="font-bold">
          5. {`Greater Than or Equal To (>=):`}
        </strong>{" "}
        This operation checks if one value is greater than or equal to another.
        For example: ⬆️🤝
      </Typography>
      <Typography variant="paragraph" className="mt-2">
        <SyntaxHighlighter language="cpp">{`bool isGreaterOrEqual = (5 >= 5); // The 'isGreaterOrEqual' variable now holds 'true' because 5 is equal to 5.`}</SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <strong className="font-bold">
          6. {`Less Than or Equal To (<=)`}:
        </strong>{" "}
        This operation checks if one value is less than or equal to another. For
        example: ⬇️🤝
      </Typography>
      <Typography variant="paragraph" className="mt-2">
        <SyntaxHighlighter language="cpp">{`bool isLessOrEqual = (2 <= 5); // The 'isLessOrEqual' variable now holds 'true' because 2 is less than 5.`}</SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Professor Bytes explained, "These operations allow you to compare values
        and make decisions in your programs. You can use them to create
        conditions and determine what actions the program should take based on
        those conditions." 🧩🔍
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Alex was excited about the possibilities. "So, I can create programs
        that make decisions, like checking if a user's input is correct or if a
        value is within a certain range?" 🎯🤖
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        "Exactly," Professor Bytes confirmed. "These operations give your
        programs the power to react and adapt, making them more intelligent and
        responsive." 🚀🤯
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        With this newfound knowledge of equality and relational operations,
        Alex's programming adventure reached its conclusion. They had learned
        the fundamentals of programming, from variables and data types to
        arithmetic and decision-making. It was time for Alex to venture out into
        the digital world, equipped with the skills to create software that
        could solve problems, engage with users, and make life in the digital
        realm more dynamic and efficient. 🌟🔢
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        And so, Alex's programming journey reached its final chapter, but the
        adventures in the world of technology were just beginning. What amazing
        stories and solutions would Alex create in the vast landscape of
        programming? It was a story yet to be written, full of endless
        possibilities. 🌏📜
      </Typography>

      <Typography variant="h5" className="mt-4">
        Try It Yourself 🚀
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        You might not get its purpose for now. But, you'll understand it much
        better later. 💻
      </Typography>

      <ul className="pl-8 mt-2 list-disc space-y-2">
        <li>
          <Typography variant="paragraph">
            For now, write the example codes above in the editor.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph">
            It's also time to recap your outputting skills. Display the output
            of your codes above using cout.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph">
            You might see that if the value is true, 1 is outputted on the
            screen. 0 if it is false. Well, this is how computers understand
            true or false - by 1 and 0. Remember that.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph">
            This is the last lesson for this zone. Before proceeding to the next
            journey, we recommend you to take a quest in the "Quest" page for
            better learning.
          </Typography>
        </li>
      </ul>
    </main>
  );
}
