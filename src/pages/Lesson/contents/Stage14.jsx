/* eslint-disable react/no-unescaped-entities */
import { Typography } from "@material-tailwind/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function Stage14() {
  return (
    <main className="p-4">
      <Typography
        variant="h4"
        className="text-gray-900 font-semibold text-center"
      >
        1 Dimensional vs 2 Dimensional Array 📦📦
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        As Alice delved deeper into the world of programming and grocery store
        management, she encountered the need to handle more complex scenarios,
        like tracking different products in Mr. Anderson's store, not just
        apples. This is where the concept of single-dimensional and
        multidimensional arrays comes into play. 🍏🍌🥕
      </Typography>

      <Typography variant="h6" className="mt-4">
        Single-Dimensional Arrays:
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Imagine Mr. Anderson's store expanded to include more than just apples.
        There were now different types of fruits, vegetables, and other grocery
        items. To manage this diverse inventory, Alice used single-dimensional
        arrays. 🏪
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        A single-dimensional array is like a single row of boxes on Mr.
        Anderson's shelf, where each box contains items of the same type, just
        like the arrays for apples. Here's how Alice used single-dimensional
        arrays in her C++ program: 📋
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <SyntaxHighlighter language="cpp">
          {`int appleInventory[3]; // Array for apples (Granny Smith, Red Delicious, Gala)
int bananaInventory[2]; // Array for bananas (Cavendish, Plantains)
int carrotInventory[1]; // Array for carrots`}
        </SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        In this case, she declared multiple single-dimensional arrays, each
        dedicated to a specific type of item. For example, the `appleInventory`
        array stored information about different apple varieties, and the
        `bananaInventory` array did the same for bananas. 🍏🍌
      </Typography>

      <Typography variant="h6" className="mt-4">
        Multidimensional Arrays:
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        As Mr. Anderson's store grew even larger, Alice realized she needed a
        more efficient way to organize data. She turned to multidimensional
        arrays for this purpose. These arrays are like multiple rows and columns
        of boxes on the shelf, allowing for even more structured storage of
        information. 📊📊
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        For example, Alice wanted to manage both the types and varieties of
        fruits together. She used a two-dimensional array to do this: 🍏🍌🍊
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <SyntaxHighlighter language="cpp">
          {`int fruitInventory[3][3]; // 2D array for fruits (rows for types, columns for varieties)`}
        </SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        In this two-dimensional array, the rows represented different types of
        fruits (e.g., apples, bananas, and oranges), and the columns represented
        varieties (e.g., Granny Smith, Red Delicious, Cavendish, Plantains,
        Navel, and Valencia). The `fruitInventory` array allowed her to organize
        data in a way that made it easy to access both type and variety
        information. 🍏🍌🍊
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Here's how Alice initialized and accessed the `fruitInventory` array:
        🍎🍏🍌
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <SyntaxHighlighter language="cpp">
          {`// Initializing the array
fruitInventory[0][0] = 15; // Apples: Granny Smith
fruitInventory[0][1] = 20; // Apples: Red Delicious
fruitInventory[1][0] = 10; // Bananas: Cavendish
// ... and so on

// Accessing the array
int redDeliciousCount = fruitInventory[0][1]; // Access Red Delicious apples
int plantainsCount = fruitInventory[1][1]; // Access Plantains bananas`}
        </SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        This two-dimensional array was like an organized grid of boxes, making
        it easy to keep track of various types and varieties of fruits and other
        grocery items. It simplified inventory management as Mr. Anderson's
        store continued to expand. 🏪📊
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        In summary, single-dimensional arrays are like individual rows of
        labeled boxes, suitable for managing a single type of item. On the other
        hand, multidimensional arrays are like a grid of boxes with rows and
        columns, perfect for handling more complex data structures involving
        multiple characteristics, such as different types and varieties of
        grocery items. Alice learned to choose the right type of array based on
        the complexity of the data she needed to manage in Mr. Anderson's
        ever-growing grocery store. 🌟
      </Typography>

      <Typography variant="h5" className="mt-4">
        Try It Yourself 🚀
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        This time, will give it to you. Feel free to explore this concept on
        your own. (This is our challenge for you)
      </Typography>

      <ul className="pl-8 mt-2 list-disc space-y-2">
        <li>
          <Typography variant="paragraph">
            Learn on your own with this topic. You can use the editor or copy
            the examples above.
          </Typography>
        </li>
      </ul>
    </main>
  );
}
