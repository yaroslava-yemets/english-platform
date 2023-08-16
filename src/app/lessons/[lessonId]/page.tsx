"use client";

import { useEffect, useState } from "react";
import {
  Button,
  ChooseList,
  Drag,
  DragAndDropContext,
  Drop,
} from "../../../../components";
import classNames from "classnames";

const familyMembers = [
  { text: "When you have children, you are a", id: 1 },
  { text: "If you are a male parent, you are a", id: 2 },
  { text: "If you are female parent, you are a", id: 3 },
  { text: "If one of your children is a boy, he is your", id: 4 },
  { text: "If one of your children is a girl, she is your", id: 5 },
  { text: "When a couple gets married, the man is the", id: 6 },
  { text: "When a couple gets married, the woman is the", id: 7 },
  { text: "A brother and sister both have the same parents", id: 8 },
];

const answers = [
  { text: "daughter", id: 5 },
  { text: "wife", id: 7 },
  { text: "siblings", id: 8 },
  { text: "father", id: 2 },
  { text: "husband", id: 6 },
  { text: "son", id: 4 },
  { text: "parent", id: 1 },
  { text: "mother", id: 3 },
];

export default function Lesson() {
  const [answersArray, setAnswersArray] =
    useState<{ text: string; id: number }[]>(answers);
  const [familyMembersArray, setFamilyMembersArray] =
    useState<{ text: string; id: number }[]>(familyMembers);
  const [chosenIds, setChosenIds] = useState<Set<number>>(new Set());
  const [chosenMember, setChosenMember] = useState<{
    text: string;
    id: number;
  } | null>(null);
  const [chosenAnswer, setChosenAnswer] = useState<{
    text: string;
    id: number;
  } | null>(null);

  useEffect(() => {
    if (!chosenAnswer || !chosenMember) return;

    if (chosenAnswer.id === chosenMember.id) {
      console.log("they are equal");
      setChosenIds((prev) => prev.add(chosenAnswer.id));

      const a = [...answersArray];
      const f = [...familyMembersArray];

      const startIndexMember = f.findIndex(
        (member) => member.id === chosenMember.id
      );
      const startIndexAnswer = a.findIndex((an) => an.id === chosenAnswer.id);

      f.splice(startIndexMember, 1);
      f.splice(f.length, 0, chosenMember);

      a.splice(startIndexAnswer, 1);
      a.splice(a.length, 0, chosenAnswer);

      setAnswersArray(a);
      setFamilyMembersArray(f);

      setChosenAnswer(null);
      setChosenMember(null);
    }
  }, [chosenAnswer, chosenMember, answersArray, familyMembersArray, chosenIds]);

  return (
    <div className="p-12 w-full flex flex-col items-center">
      <h2 className="font-bold text-blue-900">Immediate Family</h2>

      <ChooseList questions={familyMembers} answers={answers} />

      <Button onClick={() => console.log("click on button")}>Text</Button>
    </div>
  );
}
