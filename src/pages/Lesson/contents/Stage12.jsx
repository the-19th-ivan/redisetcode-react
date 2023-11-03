/* eslint-disable react/no-unescaped-entities */
import { Typography } from "@material-tailwind/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function Stage12() {
  return (
    <main className="p-4">
      <Typography
        variant="h4"
        className="text-gray-900 font-semibold text-center"
      >
        Increment & Decrement 🚀
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        As Mia's programming journey advanced, she encountered another set of
        powerful tools known as "increment and decrement operators." Intrigued
        by these concepts, she turned to the Algorithm Guru for guidance. 🤔
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Mia asked, "Guru, I've learned about algorithms, pseudocode, control
        structures, and compound assignment operators. Now, what are these
        increment and decrement operators, and how can they enhance my
        programming skills?" 🧐
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        The Algorithm Guru, always eager to share knowledge, replied, "Increment
        and decrement operators are like special tools that allow you to
        increase or decrease the value of a variable by 1, and they come in two
        flavors: '++' for increment and '--' for decrement." 🧙‍♂️
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Mia was curious but wanted to understand how they worked. "Can you give
        me some examples of these operators and explain their applications?" 🤓
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        The Guru began to explain, "Certainly! Let's start with the '++'
        increment operator. It increases the value of a variable by 1. For
        example, if you have a variable 'count' and you want to increase it by
        1, you can use 'count++'. It's like saying 'add 1 to the current value
        of 'count.'" 👆
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Mia saw how this operator simplified value increments: 📈
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <SyntaxHighlighter language="cpp">
          {`int count = 5;
count++; // Now, count is 6`}
        </SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        The Guru continued, "Conversely, the '--' decrement operator decreases
        the value of a variable by 1. If you have a variable 'items' and you
        want to decrease it by 1, you can use 'items--'. It's like saying
        'subtract 1 from the current value of 'items.'" 👇
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Mia realized how this operator streamlined value decrements: 📉
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <SyntaxHighlighter language="cpp">
          {`int items = 10;
items--; // Now, items is 9`}
        </SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        The Guru explained further, "These operators are handy when you need to
        update variables by 1. They are often used in loops to control how many
        times a certain action is performed. For example, if you want to repeat
        a task 10 times, you can use a 'for' loop with the '++' increment
        operator to count the repetitions." 🔄
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Mia grasped how these operators were like counting tools for loops: 🔢
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <SyntaxHighlighter language="cpp">
          {`for (int i = 0; i < 10; i++) {
    // This code will run 10 times
}`}
        </SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Mia was excited to use these operators to make her code more efficient
        and concise. "So, they're like the magic wand for incrementing and
        decrementing variables by 1?" ✨
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        The Guru smiled, "You've got it, Mia! Increment and decrement operators
        are like the magic wand for programmers, making it easy to update
        variables by 1, and they are especially useful in loops and other
        situations where you need to keep count." 😄
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Armed with the knowledge of increment and decrement operators, Mia was
        ready to fine-tune her programs and make them more efficient. She knew
        these operators were the key to unlocking her programming potential and
        creating precise, streamlined code. 🚀💻
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Mia's journey continued, and with increment and decrement operators at
        her disposal, she was well-prepared to tackle more complex coding
        challenges, including loops and counting tasks. What exciting adventures
        in the world of technology awaited her, and how would her understanding
        of these operators help her write amazing code? 🌟
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        And thus, Mia's programming adventure continued, full of promise and
        endless possibilities. 🌍🌈
      </Typography>

      <Typography variant="h5" className="mt-4">
        Try It Yourself 🚀
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Instead of using the longer way, use the shortcut increment and
        decrement operators 💻
      </Typography>

      <ul className="pl-8 mt-2 list-disc space-y-2">
        <li>
          <Typography variant="paragraph">
            First, run the code to check the output
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph">
            Change some of the code to use increment and decrement operators
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph">
            The output value should be the same as before
          </Typography>
        </li>
      </ul>
    </main>
  );
}
