/* eslint-disable react/no-unescaped-entities */

import { Typography } from "@material-tailwind/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function CompoundAssignmentOperators() {
  return (
    <main className="p-4">
      <Typography
        variant="h4"
        className="text-gray-900 font-semibold text-center"
      >
        Compound Assignment Operators 💡
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        As Mia's quest to master programming continued, she uncovered a powerful
        tool known as{" "}
        <strong className="font-bold">compound assignment operators</strong>.
        Intrigued by this new concept, she sought guidance from the Algorithm
        Guru once again. 🧙‍♂️💬
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Mia asked, "Guru, I've learned about algorithms, pseudocode, and control
        structures. Now, what are these{" "}
        <strong className="font-bold">compound assignment operators</strong>,
        and how can they help me in programming?" 🤔💻
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        The Algorithm Guru, always patient and insightful, replied, "
        <strong className="font-bold">Compound assignment operators</strong> are
        like shortcuts for making changes to variables. They allow you to
        perform an operation on a variable and update its value in a more
        concise way." 🚀🔧
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Mia was intrigued but wanted to understand more. "Can you give me some
        examples of these operators and explain how they work?" 💡📝
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        The Guru began to explain, "Certainly! Here are some common{" "}
        <strong className="font-bold">compound assignment operators</strong>:
        💼👩‍💻
        <strong className="font-bold">Addition Assignment `+=`:</strong> This
        operator allows you to add a value to a variable and update its value.
        For example, if you have a variable `x` and you want to add 5 to it, you
        can use `x += 5`. It's like saying 'take the current value of `x` and
        add 5 to it.'"
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Mia saw that this operator was a handy shortcut for updating variables:
        💡👀
        <SyntaxHighlighter language="cpp">
          {`int x = 10;
x += 5; // Now, x is 15`}
        </SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        The Guru continued, "Similarly, we have the subtraction assignment
        operator, '-=': 💡👀
        <strong className="font-bold">Subtraction Assignment `-=`:</strong> This
        operator lets you subtract a value from a variable and update it. If you
        have a variable `y` and want to subtract 3 from it, you can use `y -=
        3`."
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Mia learned how to simplify variable updates: 💡👀
        <SyntaxHighlighter language="cpp">
          {`int y = 20;
y -= 3; // Now, y is 17`}
        </SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        The Guru then explained multiplication and division assignment
        operators: 💡👀
        <strong className="font-bold">
          Multiplication Assignment `*=`:
        </strong>{" "}
        This operator is used for multiplying a variable by a value and updating
        it. If you have a variable `z` and want to multiply it by 2, you can use
        `z *= 2`. 💡👀
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Mia understood how to multiply and update a variable in a single step:
        💡👀
        <SyntaxHighlighter language="cpp">
          {`int z = 5;
z *= 2; // Now, z is 10`}
        </SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        The Guru continued, "And we have the division assignment operator, '/=':
        💡👀
        <strong className="font-bold">Division Assignment `/=`:</strong> It
        divides a variable by a value and updates it. For instance, if you have
        a variable `w` and you want to divide it by 4, you can use `w /= 4`."
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Mia realized that this operator made dividing and updating variables
        straightforward: 💡👀
        <SyntaxHighlighter language="cpp">
          {`int w = 16;
w /= 4; // Now, w is 4`}
        </SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Mia was excited to use these operators to streamline her code and make
        her programs more efficient. "So, they're like secret codes that make my
        programming life easier?" 🤩👩‍💻
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        The Guru smiled, "You've got it, Mia!{" "}
        <strong className="font-bold">Compound assignment operators</strong> are
        like secret codes for programmers, making your life easier and your code
        more elegant." 🚀🔑
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Armed with the knowledge of{" "}
        <strong className="font-bold">compound assignment operators</strong> and
        practical examples, Mia was ready to make her programs more efficient
        and concise. She knew these operators were the key to unlocking her
        programming potential and creating clean, efficient code. 🚀💡
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Mia's journey continued, and with{" "}
        <strong className="font-bold">compound assignment operators</strong> in
        her toolbox, she was well-prepared to tackle more complex coding
        challenges and make her technology dreams a reality. What exciting
        adventures in the world of technology awaited her, and how would her
        understanding of these operators help her write amazing code? 🌟👩‍💻
      </Typography>

      <Typography variant="h5" className="mt-4">
        Try It Yourself 🚀
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Instead of using the longer way, use the shortcut compound operators 💻
      </Typography>

      <ul className="pl-8 mt-2 list-disc space-y-2">
        <li>
          <Typography variant="paragraph">
            First, run the code to check the output
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph">
            Change some of the code to use compound operators
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
