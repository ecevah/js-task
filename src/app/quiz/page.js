"use client";
import React, { useState, useEffect } from "react";
import { useFetchQuestionQuery } from "@/services/store";

function generateUniqueRandomNumbers(min, max, count) {
  const numbers = new Set();
  while (numbers.size < count) {
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.add(number);
  }
  return [...numbers];
}

const Quiz = () => {
  const { data, error, isLoading } = useFetchQuestionQuery();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [randomQuestionIndexes, setRandomQuestionIndexes] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (currentQuestionIndex <= 9) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      if (timeLeft <= 20) {
        setIsButtonDisabled(false);
      }

      if (timeLeft === 0) {
        handleAnswer("Null");
        setTimeLeft(30);
        setIsButtonDisabled(true);
      }

      return () => clearTimeout(timer);
    }
  }, [timeLeft, currentQuestionIndex]);

  useEffect(() => {
    if (data && data.length > 0) {
      setRandomQuestionIndexes(
        generateUniqueRandomNumbers(0, data.length - 1, 10)
      );
    }
  }, [data]);

  const handleAnswer = (answer) => {
    if (currentQuestionIndex <= 9) {
      setAnswers([...answers, answer]);
    }
    if (currentQuestionIndex < 9) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(30);
      setIsButtonDisabled(true);
    } else {
      setShowResults(true);
    }
  };

  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center w-full h-[100vh]">
        <div className="text-[30px] mb-[15px]">Quiz Uploading</div>
        <span class="loader"></span>
      </div>
    );
  if (error) return <div>An error occurred: {error.toString()}</div>;

  if (!data || randomQuestionIndexes.length < 10)
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="text-[30px] mb-[15px]">Quiz Uploading</div>
        <span class="loader"></span>
      </div>
    );

  const currentQuestion = data[randomQuestionIndexes[currentQuestionIndex]];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      {!showResults ? (
        <div className="w-full max-w-xl p-8 space-y-8 bg-white rounded-lg shadow-md">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800">Quiz</h2>
            <p className="text-gray-500">Question {currentQuestionIndex + 1}</p>
          </div>
          <div className="bg-blue-100 p-4 rounded">
            <p className="text-blue-800">{currentQuestion.title + " ?"}</p>
          </div>
          <div className="flex flex-col">
            {currentQuestion.body
              .split("\n")
              .slice(0, 4)
              .map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option, currentQuestionIndex)}
                  disabled={isButtonDisabled}
                  className={`px-4 py-2 text-sm font-medium my-2 rounded shadow text-start ${
                    isButtonDisabled
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  {option}
                </button>
              ))}
            <button
              onClick={() => handleAnswer("Null", currentQuestionIndex)}
              disabled={isButtonDisabled}
              className={`px-4 py-2 text-sm font-medium rounded shadow text-end w-fit ${
                isButtonDisabled
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-red-500 text-white hover:bg-red-600"
              }`}
            >
              Leave the Question Blank
            </button>
          </div>
          <div className="text-gray-600">
            Remaining Time:{" "}
            <span className="font-semibold text-gray-800">
              {timeLeft} second
            </span>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-xl p-8 bg-white rounded-lg shadow-md space-y-4">
          <h2 className="text-center text-xl font-semibold text-gray-800">
            Results
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {answers.map((answer, index) => (
              <li key={index} className="text-gray-600">
                Question {index + 1}: {answer}
              </li>
            ))}
          </ul>
          <div className="flex justify-center">
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Start Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
