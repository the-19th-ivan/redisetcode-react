/* eslint-disable react/prop-types */
import { Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export default function Characters({ onGetCharacter, characters }) {
  const [index, setIndex] = useState(0); // use this to change the character in selection

  // swith to previous character in selection
  function handlePrevious() {
    if (index <= 0) return;
    const previousIndex = index - 1;
    setIndex(previousIndex);
    onGetCharacter(characters[previousIndex]._id); // update the ID of character that will send to form
  }

  // switch to next character in selection
  function handleNext() {
    if (index >= characters.length - 1) return;
    const nextIndex = index + 1;
    setIndex(nextIndex);
    onGetCharacter(characters[nextIndex]._id); // update the ID of character that will send to form
  }

  return (
    <>
      <Typography variant="h5" className="mt-4 lg:mt-0 mb-10 animate-bounce">
        Select your Character
      </Typography>
      <div className="flex gap-6 items-center">
        <Button
          variant="text"
          className={`${
            index <= 0 ? "text-gray-800 dark:text-gray-600" : "text-blue-800"
          }`}
          onClick={handlePrevious}
        >
          <HiChevronLeft className="text-4xl" />
        </Button>
        <img
          className="w-40 h-40 rounded-full object-cover object-center"
          src={characters[index].avatar}
          alt="nature image"
        />
        <Button
          variant="text"
          className={`${
            index >= characters.length - 1
              ? "text-gray-800 dark:text-gray-600"
              : "text-blue-800"
          }`}
          onClick={handleNext}
        >
          <HiChevronRight className="text-4xl" />
        </Button>
      </div>
      <Typography variant="h4" className="mt-10 font-montserrat font-bold">
        {characters[index].name}
      </Typography>
      <Typography variant="paragraph" className="mt-16 font-montserrat">
        {characters[index].description}
      </Typography>
    </>
  );
}
