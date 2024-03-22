"use client";
import React, { useState } from "react";
import BackButton from "../components/BackButton"

const Page = () => {
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;

    setPassword(value.substring(0, 9));
    if (value.length == 9) {
      setIsSubmitted(true);
    }
    if (value == "apartheid") {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div>
      <BackButton/>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl mb-6 select-none">Enter the password</h1>
        <div className="flex mb-6">
          {Array.from({ length: 9 }, (_, index) => (
            <div
              key={index}
              className="h-12 w-12 border rounded-md mx-1 flex items-center justify-center text-center text-white select-none"
            >
              {index < password.length ? password[index] : "_"}
            </div>
          ))}
        </div>

        <input
          type="password"
          className="input rounded-md p-2 text-xl text-center outline-none"
          value={password}
          onChange={handleInputChange}
          maxLength="9"
          autoFocus
        />
        {isSubmitted && (
          <p className={`mt-4 ${isCorrect ? "text-success" : "text-error"}`}>
            {isCorrect
              ? "Correct Password! Starting in 5 seconds."
              : "Incorrect Password!"}
          </p>
        )}
      </div>
    </div>
  );
};

export default Page;
