/* eslint-disable react/no-unescaped-entities */
import { Typography } from "@material-tailwind/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function Stage9() {
  return (
    <main className="p-4">
      <Typography
        variant="h4"
        className="text-gray-900 font-semibold text-center"
      >
        Pseudocode ✍️
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        As Mia delved deeper into the world of technology and algorithms, she
        stumbled upon a mysterious method called "pseudocode." Intrigued, she
        sought out the Algorithm Guru for guidance. 🤔🗺️
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Mia asked, "Guru, I've been learning about algorithms, but what's this
        'pseudocode' I keep hearing about? How does it fit into programming and
        problem-solving?" 🤷‍♀️💻
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        The Algorithm Guru, known for their knack for simplifying complex ideas,
        responded, "Ah, pseudocode is like the secret language of programmers.
        It's not actual code that computers can understand, but it's a way for
        humans to plan and describe how an algorithm works in simple, everyday
        language." 🧙‍♂️📜
      </Typography>

      <img src="/assets/prototype.svg" className="w-36 my-10" />

      <Typography variant="paragraph" className="mt-4">
        Mia was curious but still a bit puzzled. "So, is pseudocode like a
        blueprint for an algorithm?" 🤨🗺️
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        The Guru nodded and explained, "Exactly! Pseudocode is like sketching a
        plan before building something. It helps you think through how your
        algorithm will work, step by step, using words and simple instructions.
        It's a way to outline your idea, making sure you know the path before
        you start writing actual code." 🗺️🖋️
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Mia realized the value of pseudocode in organizing her thoughts and
        plans. "Why not just start writing code right away? Why use pseudocode?"
        🤔💡
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        The Guru smiled, "That's a great question! Pseudocode helps you think
        clearly and catch mistakes early. It's like making a roadmap before a
        journey; it makes sure you don't get lost. You can test your idea
        without worrying about the tiny details of actual coding. Once you have
        a clear pseudocode plan, it's much easier to turn it into real code."
        🚗🛣️
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Mia was excited to use pseudocode to map out her ideas before diving
        into coding. "So, it's like writing down the steps of my plan in simple
        words before I start using a programming language?" 📝🧩
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        The Guru nodded, "Exactly! Pseudocode is your best friend when planning
        algorithms. It's like telling a story in plain language about how your
        algorithm will solve a problem. Once your story makes sense, you can
        transform it into real code that computers understand." 📚🔍
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Mia wanted to see an example, and the Guru happily obliged: 📌💬
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <SyntaxHighlighter language="plaintext">
          {`Start
  Set a variable 'total' to 0
  Repeat 5 times
    Input a number 'num'
    Add 'num' to 'total'
  End Repeat
  Display 'total'
End`}
        </SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        The Guru explained, "In this pseudocode, we're adding 5 numbers to find
        their total. This plan can help you understand the steps you need to
        take before you start writing actual code." 🧩✨
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Armed with the power of pseudocode and a clear example, Mia was ready to
        tackle her next big tech challenge. She would sketch out her ideas, plan
        her algorithms, and make sure she had a clear path before diving into
        actual coding. 🚀📝🤖
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Mia's journey continued, and with pseudocode by her side, she was now
        equipped to solve even more complex problems and create technology that
        would make her city an even smarter and more efficient place. What
        exciting adventures lay ahead, and how would pseudocode help her pave
        the way to success? 🌟🏙️
      </Typography>

      <Typography variant="h5" className="mt-4">
        Try It Yourself 🚀
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Convert this pseudocode into an actual code
      </Typography>

      <Typography variant="paragraph" className="mt-2">
        <SyntaxHighlighter language="plaintext">
          {`Start
  Set a variable 'firstName' to your name
  Set a variable 'lastName' to your last name
  Display your full name using firstName and lastName
End`}
        </SyntaxHighlighter>
      </Typography>
    </main>
  );
}
