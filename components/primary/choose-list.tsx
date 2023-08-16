"use client";

import { useEffect, useState } from "react";
import { ChooseListItem } from "../../types";
import classNames from "classnames";

type ChooseListProps = {
  questions: ChooseListItem[];
  answers: ChooseListItem[];
};

export function ChooseList(props: ChooseListProps) {
  const { questions, answers } = props;
  const [answersArray, setAnswersArray] = useState<ChooseListItem[]>(answers);
  const [questionsArray, setQuestionsArray] =
    useState<ChooseListItem[]>(questions);
  const [chosenIds, setChosenIds] = useState<Set<number>>(new Set());
  const [chosenQuestion, setChosenQuestion] = useState<ChooseListItem | null>(
    null
  );
  const [chosenAnswer, setChosenAnswer] = useState<ChooseListItem | null>(null);

  useEffect(() => {
    if (!chosenAnswer || !chosenQuestion) return;

    // If chosenAnswer.id === chosenQuestion.Id we need to update arrays
    if (chosenAnswer.id === chosenQuestion.id) {
      setChosenIds((prev) => prev.add(chosenAnswer.id));

      const a = [...answersArray];
      const q = [...questionsArray];

      // Find the index of the element that is chosen
      const startIndexMember = q.findIndex((q) => q.id === chosenQuestion.id);
      const startIndexAnswer = a.findIndex((an) => an.id === chosenAnswer.id);

      // Delete this element from the previous position
      q.splice(startIndexMember, 1);
      a.splice(startIndexAnswer, 1);

      // Move this element to the end of the array
      q.splice(q.length, 0, chosenQuestion);
      a.splice(a.length, 0, chosenAnswer);

      // Update arrays with questions and answers
      setAnswersArray(a);
      setQuestionsArray(q);

      // Set chosen elements to null
      setChosenAnswer(null);
      setChosenQuestion(null);
    }
  }, [chosenAnswer, chosenQuestion, answersArray, questionsArray, chosenIds]);

  return (
    <div className="flex gap-x-6">
      <ul className="p-3">
        {questionsArray.map(({ id, text }) => (
          <li
            key={id}
            className={classNames("p-4 border cursor-pointer", {
              "bg-green-300": chosenQuestion?.id === id || chosenIds.has(id),
              "bg-red-300":
                chosenAnswer &&
                chosenQuestion &&
                chosenQuestion.id === id &&
                chosenAnswer?.id !== chosenQuestion.id,
            })}
            onClick={() => setChosenQuestion({ id, text })}
          >
            {text}
          </li>
        ))}
      </ul>

      <ul className="p-3">
        {answersArray.map(({ id, text }) => (
          <li
            key={id}
            onClick={() => setChosenAnswer({ id, text })}
            className={classNames("p-4 border cursor-pointer", {
              "bg-green-300": chosenAnswer?.id === id || chosenIds.has(id),
              "bg-red-300":
                chosenAnswer &&
                chosenQuestion &&
                chosenAnswer.id === id &&
                chosenAnswer?.id !== chosenQuestion.id,
            })}
          >
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}
