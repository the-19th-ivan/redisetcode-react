/* eslint-disable react/no-unescaped-entities */
import { Typography } from "@material-tailwind/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function Stage13() {
  return (
    <main className="p-4">
      <Typography
        variant="h4"
        className="text-gray-900 font-semibold text-center"
      >
        Arrays 📦
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Once upon a time, in a quiet little town, there lived a friendly
        neighborhood grocer named Mr. Anderson. He was known for keeping a vast
        variety of fruits and vegetables in his small grocery store. Mr.
        Anderson was an organized man, and he had a clever way of arranging his
        produce that can help us understand what an array is in the world of
        programming. 🍏🍌🥦
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Imagine that Mr. Anderson had a long, sturdy shelf against the wall of
        his shop. On this shelf, he placed several boxes, each with a specific
        label. These labels represented different types of fruits and
        vegetables: one box for apples, another for bananas, and so on. Each
        box, in turn, was divided into smaller sections for different varieties
        of that fruit or vegetable. For example, the box labeled "Apples" had
        sections for Granny Smith, Red Delicious, and Gala apples. 🍎🍐🍇
      </Typography>

      <img src="/assets/archive.svg" className="w-36 my-10" />

      <Typography variant="paragraph" className="mt-4">
        In the programming world, this long shelf with labeled boxes is akin to
        an "array." An array is like a container that allows us to store
        multiple values of the same data type in a structured manner. Each
        element in the array is accessible by its position or index. Just like
        Mr. Anderson's boxes were neatly organized by type and variety, arrays
        allow us to organize and manage related pieces of data efficiently. 🗃️
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Let's bring in a young programmer named Alice to help us understand how
        arrays work in the context of grocery shopping. 👩‍💻
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Alice, being a tech-savvy individual, wanted to create a program to help
        Mr. Anderson keep track of his inventory. She chose to use the C++
        programming language for this task. She figured that arrays would be the
        perfect tool for the job. Here's how she used them: 📊
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <strong className="font-bold">1. Declaring an Array:</strong> Just like
        Mr. Anderson labeled his boxes, Alice declared an array in her C++
        program to represent the different types of fruits and vegetables in the
        store. For example, she declared an array for apples like this: 📋
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <SyntaxHighlighter language="cpp">
          {`int appleInventory[3];`}
        </SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        In this code, `appleInventory` is an array that can store three
        integers. These integers will represent the quantities of different
        apple varieties: Granny Smith, Red Delicious, and Gala. 🍏🍎🍏
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <strong className="font-bold">2. Initializing Array Elements:</strong>{" "}
        To keep track of how many of each apple variety Mr. Anderson had, Alice
        assigned initial values to the array elements like this: 📈
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <SyntaxHighlighter language="cpp">
          {`appleInventory[0] = 15;  // Granny Smith
appleInventory[1] = 20;  // Red Delicious
appleInventory[2] = 10;  // Gala`}
        </SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        This meant that Mr. Anderson had 15 Granny Smith apples, 20 Red
        Delicious apples, and 10 Gala apples in stock. 📊🍏🍎
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <strong className="font-bold">3. Accessing Array Elements:</strong> If
        Alice wanted to know how many Granny Smith apples were available, she
        simply accessed the corresponding element of the array: 🕵️‍♀️
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <SyntaxHighlighter language="cpp">
          {`int grannySmithCount = appleInventory[0];`}
        </SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Now, `grannySmithCount` contains the value 15, which is the quantity of
        Granny Smith apples. 🍏
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <strong className="font-bold">4. Updating Array Elements:</strong> As
        customers bought apples, Alice updated the array to reflect the new
        quantities: 🛒
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <SyntaxHighlighter language="cpp">{`appleInventory[0] -= 5;  // Sold 5 Granny Smith apples`}</SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        This code subtracts 5 from the quantity of Granny Smith apples in the
        array. 🍏📉
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Arrays, just like Mr. Anderson's neatly labeled boxes, allowed Alice to
        organize and manage the inventory efficiently. She could easily keep
        track of various types and quantities of produce, making the grocery
        shopping experience for Mr. Anderson and his customers much smoother.
        🏪👨‍👩‍👧‍👦
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        So, in the world of programming, an array is like a shelf with labeled
        boxes that store related data items. They are incredibly useful for
        tasks like inventory management, just as Mr. Anderson used his array of
        boxes to manage his grocery store inventory. With this new understanding
        of arrays, Alice continued to create more useful programs, and she
        always remembered the helpful analogy from Mr. Anderson's grocery shop.
        🌟
      </Typography>

      <Typography variant="h5" className="mt-4">
        Try It Yourself 🚀
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        Create your own Array of things
      </Typography>

      <ul className="pl-8 mt-2 list-disc space-y-2">
        <li>
          <Typography variant="paragraph">
            Create a string of Array called "favorites" that can hold up to 3
            values.
          </Typography>
        </li>
        <li>
          <Typography variant="paragraph">
            Add 3 values to the Array (Your top 3 favorites)
          </Typography>
        </li>
      </ul>
    </main>
  );
}
