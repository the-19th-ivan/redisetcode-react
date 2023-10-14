/* eslint-disable react/no-unescaped-entities */
import { Typography } from "@material-tailwind/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const code = `#include <iostream>
using namespace std;
int main() {
    cout << "Hello World!" << endl;
    return 0;
}`;

export default function StageTwo() {
  return (
    <main className="p-4">
      <Typography
        variant="h4"
        className="text-gray-900 font-semibold text-center"
      >
        "Hello World" Spell
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Greetings, young apprentice, to another exciting lesson within Hebrion
        Academy as we step into the world of spellcasting with C++. Just like a
        wizard's first spell, our journey begins with the "Hello World" program.
        Get ready to take your first step into the enchanting realm of C++.
      </Typography>

      <Typography variant="h5" className="text-gray-900 font-semibold mt-6">
        The Tale of the "Hello World" Spell
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Picture this: You're a novice wizard, standing before a magical cauldron
        (your computer). To begin your journey, you need a simple spell, like
        saying "Hello" to the mystical world of programming. This spell is known
        as "Hello World."
      </Typography>

      <Typography variant="h5" className="text-gray-900 font-semibold mt-6">
        Discussing the "Hello World" Spell
      </Typography>

      <Typography variant="code" className="mt-4">
        <SyntaxHighlighter language="cpp">{code}</SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Here's what each part of the spell does:
      </Typography>

      <Typography variant="unordered-list" className="mt-2 pl-4">
        <ul className="list-disc">
          <li>
            <Typography variant="paragraph" className="mt-2">
              <span className="font-semibold">#include &lt;iostream&gt;:</span>
              It's like opening your spellbook to the right page.
            </Typography>
          </li>
          <li>
            <Typography variant="paragraph" className="mt-2">
              <span className="font-semibold">
                int main() &#123; ... &#125;:
              </span>
              This is your magical circle, where you cast your spell. Everything
              inside these curly braces is part of your spell.
            </Typography>
          </li>
          <li>
            <Typography variant="paragraph" className="mt-2">
              <span className="font-semibold">
                cout &lt;&lt; "Hello World!" &gt;&gt; endl;:
              </span>
              This line is the spell itself. It tells the computer to display
              the message "Hello World!" on the screen.
            </Typography>
          </li>
          <li>
            <Typography variant="paragraph" className="mt-2">
              <span className="font-semibold">return 0;:</span>
              It's like closing your magical circle, telling the computer that
              your spell is complete.
            </Typography>
          </li>
        </ul>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        When you recite these words, you'll see the greeting on your screen,
        just like when a wizard casts a simple spell.
      </Typography>

      <Typography variant="h5" className="text-gray-900 font-semibold mt-6">
        Side Note
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        In our magical script, you'll notice a semicolon at the end of the
        spell. The semicolon serves as the period at the end of a sentence. In
        our magical code, it tells the computer that a command is complete.
        Without it, your spell would be like a sentence without a period -
        unfinished and unclear.
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        When you include the semicolon, it's like saying "I'm done with this
        part of the spell." It's the wizard's way of ensuring that the magic
        flows correctly.
      </Typography>

      <Typography variant="h5" className="text-gray-900 font-semibold mt-6">
        Conclusion
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Now you've cast your first spell! It's a small but significant step in
        your magical journey. Like any great wizard, your path starts with
        simple spells and then progresses to more powerful incantations.
      </Typography>

      <Typography variant="h5" className="text-gray-900 font-semibold mt-6">
        Side Quest
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Your side quest is to cast the "Hello World" spell on your own. Write
        the spell on your computer, run it, and see the magic happen on your
        screen. It's your first taste of programming magic, and it's just the
        beginning of your enchanting adventure.
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        So, go forth, young sorcerer, and may your programming journey at
        Hebrion Academy be filled with wonder and discovery! 🪄🌟📜
      </Typography>
    </main>
  );
}
