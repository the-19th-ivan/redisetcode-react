/* eslint-disable react/no-unescaped-entities */
import { Typography } from "@material-tailwind/react";

export default function StageOne() {
  return (
    <main className="p-4">
      <Typography
        variant="h4"
        className="text-gray-900 font-semibold text-center"
      >
        👩‍💻 Intro to Programming 👨‍💻
      </Typography>

      <img src="/assets/village.svg" className="w-36 my-10" />

      <Typography variant="paragraph" className=" mt-4">
        Once upon a time in a quiet town called "Digitalville," there lived a
        young and curious person named Alex. Alex had always been fascinated by
        machines and the way they worked. The town had various gadgets, from
        automatic coffee makers to traffic lights, and they all seemed to do
        magical things. Alex wanted to uncover the secrets behind these machines
        and understand how they followed orders. 🧐
      </Typography>

      <img src="/assets/wizard.svg" className="w-36 my-10" />

      <Typography variant="paragraph" className=" mt-4">
        One day, a wise old man named Professor Bytes visited Digitalville. He
        was known as the town's programming guru. People said he had the power
        to make machines do anything he wanted. Intrigued, Alex decided to seek
        out the professor and ask him about this mysterious art. 🧙‍♂️
      </Typography>

      <Typography variant="paragraph" className=" mt-4">
        Professor Bytes welcomed Alex with a warm smile and said, "My dear,
        programming is like giving instructions to machines to make them do what
        we want. Just like you follow a recipe to bake a cake, we give machines
        a recipe to perform tasks. These recipes are called 'programs.' 🍰"
      </Typography>

      <img src="/assets/recipe.svg" className="w-36 my-10" />

      <Typography variant="paragraph" className=" mt-4">
        Alex's eyes widened with curiosity. "But where is programming used,
        Professor?" 🤔
      </Typography>

      <Typography variant="paragraph" className=" mt-4">
        The wise old man chuckled, "Programming is everywhere! From your
        smartphone and computer to the traffic lights on the streets and even in
        space exploration. It's the language of technology, the driving force
        behind the modern world." 🌍
      </Typography>

      <Typography variant="paragraph" className=" mt-4">
        Alex was amazed by the reach of programming. "But what about C++? I
        heard it's a part of programming." 🤯
      </Typography>

      <Typography variant="paragraph" className=" mt-4">
        Professor Bytes nodded. "You're absolutely right. C++ is one of the many
        programming languages we use to write these recipes. Just like different
        people speak different languages, machines understand specific
        programming languages. C++ is a powerful and versatile language, known
        for its efficiency and flexibility. It's used in applications like
        creating video games, operating systems, and much more." 💪
      </Typography>

      <img src="/assets/cpp.svg" className="w-36 my-10" />

      <Typography variant="paragraph" className=" mt-4">
        With this newfound knowledge about programming and C++, Alex returned to
        Digitalville with a sense of wonder. They realized that with
        programming, they could create their own magic and make machines dance
        to their tunes. From that day on, Alex started learning the art of
        programming and, like a wizard with a wand, began to create amazing
        things with the power of C++. 🪄
      </Typography>

      <Typography variant="paragraph" className=" mt-4">
        And so, the story of programming, where it is used, and what C++ is all
        about, continued in Digitalville, a place where curiosity and learning
        made the world a better, more connected, and more exciting place. Alex
        was eager to explore even more about programming. What would they
        discover next? 🌟
      </Typography>

      <Typography variant="h5" className=" mt-4">
        Programming Tips and Tricks
      </Typography>

      <Typography variant="paragraph" className=" mt-4">
        Here are the following tips and tricks we recommend before we start this
        exciting journey:
      </Typography>

      <ul className="pl-8 mt-2 list-disc space-y-2">
        <li>
          <Typography variant="paragraph">
            Learning should be fun and enjoyable! As much as possible, do things
            that will make your learning journey more fun and exciting (just
            like how we made this app).
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph">
            Some lessons have coding exercises and a code editor might appear on
            the right. That's where you write and run your code.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph">
            Do the code exercises (practical knowledge) per lesson and spare
            some time to visit the Quest section (theoretical knowledge) to
            assess your knowledge.
          </Typography>
        </li>
      </ul>
    </main>
  );
}
