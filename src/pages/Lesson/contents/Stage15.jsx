/* eslint-disable react/no-unescaped-entities */
import { Typography } from "@material-tailwind/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function Stage15() {
  return (
    <main className="p-4">
      <Typography
        variant="h4"
        className="text-gray-900 font-semibold text-center"
      >
        Sort and Search 🔍🧹
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        One day, Mr. Anderson asked Alice to help him organize his apples and
        bananas in a more orderly fashion so customers could find what they
        needed quickly. Alice decided to use the built-in `sort()` function in
        C++ to sort the `appleInventory` array: 🍏🍌
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <SyntaxHighlighter language="cpp">
          {`#include <algorithm> // Include the necessary header

int appleInventory[3] = {15, 20, 10}; // Unsorted array

// Sorting the array using sort()
sort(begin(appleInventory), end(appleInventory));`}
        </SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        With just a single line of code, Alice sorted the `appleInventory` array
        in ascending order, making it easier for customers to find their
        favorite apples. 📦🍎
      </Typography>

      <Typography variant="h6" className="mt-4">
        Searching Arrays with C++ 🔎
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        To help customers find their desired items, Alice also implemented a
        search functionality using the built-in `find()` function. For instance,
        a customer wanted to know if there were any Granny Smith apples
        available: 🍏🔍
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        <SyntaxHighlighter language="cpp">
          {`#include <algorithm> // Include the necessary header

int appleInventory[3] = {10, 15, 20}; // Sorted array

int target = 15; // The quantity of Granny Smith apples we're looking for

// Searching the array using find()
auto result = find(begin(appleInventory), end(appleInventory), target);

if (result != end(appleInventory)) {
    // Granny Smith apples found
    // Perform actions like informing the customer
} else {
    // Granny Smith apples not found
    // Perform actions like offering an alternative or apologizing
}`}
        </SyntaxHighlighter>
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        With the help of `find()`, Alice efficiently searched the
        `appleInventory` array to let the customer know if the store had the
        desired Granny Smith apples in stock. 🍎🔍
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        As Alice continued to refine her programming skills, she learned that
        C++ provides powerful built-in functions for sorting and searching
        arrays, making grocery shopping at Mr. Anderson's store even more
        efficient and customer-friendly. Arrays were indeed versatile tools in
        programming, offering endless possibilities for organizing, sorting,
        searching, and manipulating data. 🛒💻
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        With these newfound skills, Alice and Mr. Anderson's grocery store
        thrived, and their customers were always delighted by the efficient and
        organized shopping experience. 🎉🛒
      </Typography>

      <Typography variant="paragraph" className="mt-4">
        And so, our story ends with the knowledge that arrays are versatile
        tools in the world of programming, and C++ provides built-in functions
        that make sorting and searching arrays a breeze. Alice's journey in
        programming and grocery store management showed her that, just like in
        real life, arrays are essential for keeping things in order and making
        life easier for everyone. 🌟🍏🍌🔍
      </Typography>
    </main>
  );
}
