"use client";

import classNames from "classnames";
import { ChangeEvent, useState } from "react";

type PrimaryInputProps = {
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  value?: string;
  isError?: boolean;
  correctAnswer?: string;
};

export function PrimaryInput(props: PrimaryInputProps) {
  const { type, onChange, className, value, isError, correctAnswer } = props;
  const [isCorrect, setIsCorrent] = useState<boolean>(false);
  const [isNotCorrent, setIsNotCorrent] = useState<boolean>(false);

  return (
    <input
      //   value={value}
      type={type ?? "text"}
      onChange={(e) => {
        if (correctAnswer) {
          const value = e.target.value;

          if (!value) {
            setIsCorrent(false);
            setIsNotCorrent(false);

            return;
          }

          const isAnswerCorrect =
            value.toLocaleLowerCase() === correctAnswer.toLocaleLowerCase();

          console.log("isAnswerCorrect", isAnswerCorrect);

          if (isAnswerCorrect) {
            setIsCorrent(true);
            setIsNotCorrent(false);
          }

          if (!isAnswerCorrect && value) {
            setIsCorrent(false);
            setIsNotCorrent(true);
          }
        }

        // onChange(e);
      }}
      className={classNames(
        "outline-none focus:border-blue-500 rounded-lg border-b shadow-lg py-1 px-2",
        {
          "text-red-500 border-red-500 focus:border-red-500":
            isError || isNotCorrent,
          "text-green-700 border-green-500 focus:border-green-500": isCorrect,
        },
        className
      )}
    />
  );
}
