"use client";

import { useCallback, useMemo, useState } from "react";
import { Button, Drag, DragAndDropContext, Drop } from "../../../../components";

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
  { text: "father", id: 2 },
  { text: "siblings", id: 8 },
  { text: "son", id: 4 },
  { text: "husband", id: 6 },
  { text: "parent", id: 1 },
  { text: "wife", id: 7 },
  { text: "mother", id: 3 },
];

export default function Lesson() {
  const [answersArray, setAnswersArray] =
    useState<{ text: string; id: number }[]>(answers);

  const newArray = [...answers];

  const onDragComplete = useCallback(
    (v: any) => {
      const array = [...answers];
      // console.log("start array", array);

      const startIndex = v.source.index;
      const stopIndex = v.destination.index;
      const updatedItem = newArray[startIndex];

      console.log("startIndex", startIndex);
      console.log("stopIndex", stopIndex);

      // Delete moved item from array
      newArray.splice(startIndex, 1);
      console.log("array after delete", array);

      // Update array with new item position
      newArray.splice(stopIndex, 0, updatedItem);
      console.log("array", array);

      setAnswersArray(
        array
        // // Delete moved item from array
        // prev.splice(startIndex, 1);

        // // Update array with new item position
        // prev.splice(stopIndex, 0, updatedItem);

        // return prev;
      );
    },
    [newArray]
  );

  console.log("answersArray", answersArray);

  return (
    <div className="p-0">
      Lesson
      <div className="flex">
        <ul className="p-3">
          {familyMembers.map(({ id, text }) => (
            <li key={id} className="p-4 border">
              {text}
            </li>
          ))}
        </ul>

        <DragAndDropContext onDragComplete={onDragComplete}>
          <Drop id="family" className="p-3" success={true}>
            {newArray.map((item, index) => (
              <Drag
                key={item.id}
                className="p-4 border"
                text={item.text}
                index={index}
              />
            ))}
            {/* <Drag className="p-4 border" text="1" index={2} />
            <Drag className="p-4 border" text="2" index={1} />
            <Drag className="p-4 border" text="3" index={3} />
            <Drag className="p-4 border" text="4" index={4} />
            <Drag className="p-4 border" text="5" index={5} />
            <Drag className="p-4 border" text="6" index={6} /> */}
          </Drop>
        </DragAndDropContext>
      </div>
      {/* <Button onClick={() => console.log("click on button")}>Text</Button> */}
    </div>
  );
}
