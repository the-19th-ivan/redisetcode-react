/* eslint-disable react/no-unescaped-entities */
import { Typography } from "@material-tailwind/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function StageFive() {
  return (
    <main className="p-4">
      <Typography
        variant="h4"
        className="text-gray-900 font-semibold text-center"
      >
        🎙 Accepting Inputs 📥
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        As Alex's programming adventure progressed, they became increasingly
        curious about how programs could interact with users. It was during one
        of their sessions with Professor Bytes that they discovered a vital tool
        for this interaction: "cin." 🤩
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        "Professor," Alex inquired, "I've learned about variables, data types,
        and how to store and manipulate data, but how can we get information
        from a user? How does a program take input from someone like me?" 🤔
      </Typography>

      <img src="/assets/input.svg" className="w-36 my-10" />

      <Typography variant="paragraph" className="mt-4">
        Professor Bytes smiled, recognizing Alex's interest in making programs
        more interactive. "Ah, that's where 'cin' comes in, Alex. 'cin' is like
        a messenger that allows a program to receive information from a user. It
        stands for 'console input' and is incredibly valuable when you want your
        program to listen and respond to the user's input." 📬
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Alex nodded, eager to learn more. "So, how does 'cin' work, and how can
        we use it in a program?" 🧐
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        {`"Good question," Professor Bytes continued. "To use 'cin,' you pair it
        with the '>>' operator, which is like an arrow pointing from the user's
        input to a variable where you want to store that input. Let's see an
        example:`}
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <SyntaxHighlighter language="cpp">{`int userAge;
cout << "Please enter your age: ";
cin >> userAge;`}</SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        {`"In this code," Professor Bytes explained, "we first declare an 'int' variable called 'userAge' to store the user's input, which will be their age. Then, we use 'cout' to display a message asking the user to enter their age. After that, we use 'cin' paired with '>>' to receive the input and store it in the 'userAge' variable. The user can type their age, press 'Enter,' and it will be stored in the variable."`}
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Alex understood the basic idea but wanted to know more. "What happens if
        the user enters something that's not a number? Does the program break?"
        🤨
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Professor Bytes reassured Alex, "Great question! If the user enters
        something that's not a number, 'cin' will have difficulty storing it in
        an 'int' variable, which expects a whole number. It might cause issues,
        but skilled programmers handle these situations by checking and
        validating the input." 🛠️
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Alex was excited to learn about making programs more user-friendly and
        interactive. "So, 'cin' allows a program to receive information and
        respond accordingly. It's like a conversation between the program and
        the user!" 🗣️💬
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        "Exactly," Professor Bytes agreed. "With 'cin,' you can create programs
        that engage with users, making them more dynamic and responsive. It
        opens up a world of possibilities for creating interactive
        applications." 🌍✨
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        With this newfound understanding of 'cin,' Alex continued their
        programming adventure, eager to build programs that could communicate
        with users and respond to their input. What exciting applications would
        they develop with this new tool in their programming toolkit? 🚀🎉
      </Typography>

      <Typography variant="h5" className="mt-4">
        Try It Yourself 🚀
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        A content creator will give you money. You can take the money or you can
        double it and give it to the next person. You decided to double it and
        give it to that next person (because your a kind person).
      </Typography>

      <ul className="pl-8 mt-2 list-disc space-y-2">
        <li>
          <Typography variant="paragraph">
            write a code that will accept how much is the current money and
            assign it to the "number" variable
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph">
            Run your code and enter your inputs. The number you enter will get
            doubled.
          </Typography>
        </li>
      </ul>
    </main>
  );
}
