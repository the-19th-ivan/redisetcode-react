import { Spinner } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
import Characters from "./Characters";
import { SignupForm } from "./SignupForm";
import Confetti from "react-confetti";
import { host } from "../../utils/env";

export default function Signup() {
  const [characters, setCharacters] = useState([]); // All characters fetch from DB
  const [character, setCharacter] = useState(null); // The current selected character ID
  const [showConfetti, setShowConfetti] = useState(false);

  const navigate = useNavigate();

  const startConfetti = () => {
    setShowConfetti(true);

    // You can stop the confetti after a certain duration
    setTimeout(() => {
      setShowConfetti(false);
    }, 10000); // Change the duration as needed
  };

  // Fetch All Characters
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${host}/api/v1/characters`);
        const data = response.data.data;
        setCharacters(data.characters);
      } catch (error) {
        navigate("/server-error");
      }
    }
    fetchData();
  }, [navigate]);

  // Set the character when fetchData is DONE
  useEffect(() => {
    if (characters.length > 0) setCharacter(characters[0]._id);
  }, [characters]);

  // Get the current Character ID that will be send to Form
  function handleGetCharacter(id) {
    setCharacter(id);
  }

  // Show loading screen when data fetching is not yet done
  if (characters.length === 0) {
    return (
      <main className="w-full h-screen flex justify-center items-center">
        <Spinner color="indigo" />
      </main>
    );
  }

  return (
    <main className="bg-primary h-screen w-full">
      <section className="p-4 md:p-8 lg:p-10 flex flex-col lg:flex-row gap-6">
        <div className="lg:w-3/5 lg:px-12 flex flex-col items-center">
          <Characters
            onGetCharacter={handleGetCharacter}
            characters={characters}
          />
        </div>
        <div className="lg:w-2/5 ">
          <SignupForm character={character} onConfetti={startConfetti} />
        </div>
      </section>
      {showConfetti && <Confetti />}
    </main>
  );
}
