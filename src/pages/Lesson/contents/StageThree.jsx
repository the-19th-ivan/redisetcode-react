/* eslint-disable react/no-unescaped-entities */
import { Typography } from "@material-tailwind/react";

export default function StageThree() {
  return (
    <main className="p-4">
      <Typography
        variant="h4"
        className="text-gray-900 font-semibold text-center"
      >
        Storing Enchantment: Memory Concept
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Hello again, young apprentice! We're back for the next part of our
        adventure at Hebrion Academy. Today, we're going to explore the
        fascinating world of memory in C++. Think of memory like a treasure
        chest where we keep important things for our spells. Just like a wizard
        keeps ingredients for potions, we need memory to work our programming
        magic.
      </Typography>

      <Typography variant="h5" className="text-gray-900 font-semibold mt-6">
        The Tale of Memory: Storing Enchantment
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Imagine that memory is like a special chest for wizards, where they
        store their magical ingredients. In the programming world, memory is our
        special chest. It's where we keep things our spells (code) need to do
        their magic. Just like wizards need their ingredients, we need memory.
      </Typography>

      <Typography variant="h5" className="text-gray-900 font-semibold mt-6">
        Discussing Memory Concepts
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        In our magical world, we have two main places to keep our things:
      </Typography>

      <Typography variant="unordered-list" className="mt-2 pl-4">
        <ul className="list-disc">
          <li>
            <Typography variant="paragraph" className="mt-2">
              <span className="font-semibold">Stack:</span> This is like a
              temporary shelf in our chest. We use it to store things we need
              for a short time. It's like a wizard grabbing an ingredient, using
              it, and then putting it back.
            </Typography>
          </li>
          <li>
            <Typography variant="paragraph" className="mt-2">
              <span className="font-semibold">Heap:</span> The heap is like a
              secret part of our chest where we store valuable things for a long
              time. This is where we keep bigger and more important items, like
              complex spells. It's like keeping your most powerful ingredients
              safe and ready for big spells.
            </Typography>
          </li>
        </ul>
      </Typography>

      <Typography variant="h5" className="text-gray-900 font-semibold mt-6">
        The Role of Pointers: Connecting the Dots
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        In our magical code, we use something called "pointers" to connect to
        the things in our memory chest. Pointers are like magic wands that help
        us reach into the chest and use what's inside. Just as a wizard uses a
        wand to cast spells, we use pointers to make our code work its magic.
      </Typography>

      <Typography variant="h5" className="text-gray-900 font-semibold mt-6">
        Conclusion: Harnessing the Power of Memory
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Learning about memory is like discovering the secret compartments of a
        magical chest. It's an important skill for every apprentice. With
        memory, we can store and use information, making our spells more
        powerful and versatile.
      </Typography>

      <Typography variant="h5" className="text-gray-900 font-semibold mt-6">
        Side Quest
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Your side quest is to remember that our spell (code) uses memory. Just
        know it for now as you will need it later for algorithm development. You
        might study about this topic deeper if you like.
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        With this knowledge, you're getting closer to becoming a skilled
        codekeeper, mastering the art of memory in the digital world.
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Keep the magic alive in your journey of discovery! 🪄📚🧙‍♂️
      </Typography>
    </main>
  );
}
