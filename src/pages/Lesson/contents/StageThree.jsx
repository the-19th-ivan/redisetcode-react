/* eslint-disable react/no-unescaped-entities */
import { Typography } from "@material-tailwind/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function StageThree() {
  return (
    <main className="p-4">
      <Typography
        variant="h4"
        className="text-gray-900 font-semibold text-center"
      >
        🔵 Variables 🔴
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        As Alex's programming journey continued, they couldn't help but wonder
        about another fundamental concept: variables. Professor Bytes had a way
        of making even the most complex ideas seem approachable. 🤔
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        One day, Alex approached Professor Bytes and asked, "I keep hearing
        about these things called 'variables.' What are they, and how do they
        fit into programming?" 🙋‍♂️
      </Typography>

      <img src="/assets/box.svg" className="w-36 my-10" />

      <Typography variant="paragraph" className="mt-4">
        Professor Bytes smiled and replied, "Ah, variables are like containers
        that hold information in a program. Just like you might use a box to
        store your toys, we use variables to store data in our code. They're an
        essential part of programming because they allow us to work with and
        manipulate information." 📦
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Alex nodded, beginning to see the connection. "So, how do you create and
        use variables?" 🤓
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        "Great question," Professor Bytes continued. "In C++, you create a
        variable by specifying its type and giving it a name. Think of the type
        as the kind of container, and the name as the label on the box. For
        example, let's say you want to store a number. You could create a
        variable like this: 📊
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <SyntaxHighlighter language="cpp">{`int myNumber;`}</SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        In this case, we've created a variable called 'myNumber,' and it's of
        type 'int,' which stands for 'integer.' It can hold whole numbers." 🧱
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Alex was getting excited. "Okay, so we've got a box, and we've labeled
        it. But what can we put in it?" 🎉
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Professor Bytes continued, "You can put all sorts of things in
        variables. Numbers, like integers or decimals. You can also store text,
        called 'strings.' Imagine you have a variable called 'myName,' which
        holds your name as a string, or 'myAge' to store your age as a number.
        Once you've put something in a variable, you can use it in your program.
        You can perform calculations with it, display it, or even change its
        value as your program runs." 🎈
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Alex thought for a moment and asked, "But how do we put something in the
        variable?" 🤔
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        The professor smiled, "To put a value in a variable, you use an equal
        sign. It's like placing an item in the box. For example: 📝
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <SyntaxHighlighter language="cpp">{`int myAge = 25;`}</SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        In this line of code, we've put the number 25 into the 'myAge' variable.
        Now, you can use 'myAge' in your program, and it will have the value
        25." 🎁
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Alex was fascinated by this concept. Variables were like containers that
        held the building blocks of a program, and you could use them to create
        dynamic and interactive code. It was as if they were writing a story
        where the characters could change and grow. 📜
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        With a better understanding of variables, Alex continued their
        programming adventure, eager to use these containers to store and
        manipulate data in their code. What new stories would they create with
        this newfound knowledge of programming elements? 🚀
      </Typography>

      <Typography variant="h5" className="mt-4">
        Try It Yourself 🚀
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Time to write some code
      </Typography>

      <ul className="pl-8 mt-2 list-disc space-y-2">
        <li>
          <Typography variant="paragraph">
            Create a variable name "favoriteNumber"
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph">
            Assign a value to the variable you created (your favorite number)
          </Typography>
        </li>
      </ul>
    </main>
  );
}
