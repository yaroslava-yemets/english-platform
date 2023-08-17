"use client";

import { useMemo, useState } from "react";
import { FamilyVocabulary } from "./family-vocabulary";
import ReactPlayer from "react-player";
import { Button } from "../../../../components";
import { Tests } from "./tests";

export default function Lesson() {
  const [pageNumber, setPageNumber] = useState<number>(1);

  const page = useMemo(() => {
    if (pageNumber === 1) return <FamilyVocabulary />;

    if (pageNumber === 2)
      return (
        <div className="w-full bg-slate-100 h-full p-6">
          <h1 className="font-bold text-blue-900 text-2xl text-center mb-4">
            What is Family?
          </h1>

          <div className="flex gap-5">
            <div>
              <ReactPlayer url="https://youtu.be/aWYcH_Jgsvg" />
            </div>

            <p
              className="font-mono text-lg"
              onMouseUp={() => {
                const selectedWord = window.getSelection()?.toString();
                console.log("winodw", selectedWord);
              }}
            >
              {`Mothers, Fathers, Daughters, Sons, Aunts, Uncles, and Cousins… people
              who are related to you. But what if they're not? Are they still
              family? Should the question be not what, but who is family? Because
              aren't they the ones who are there when you need them? To share the
              successes, but also the setbacks. The ones who care about us. Who care
              for us. Who pick us up and talk us down. The late night phone calls.
              The comfortable silences. Because it’s not what a family is, that‘s
              important, it's what a family does, that matters. So here's to the
              families, to the hockey moms and dance dads. To the mentors and
              coaches, To our classmates, teammates, roommates, and soulmates. To
              our brothers, and to our brothers, our sisters, and to our sisters. So
              this Family Day celebrate the ones who are your family, hold them
              close, tell them they matter. Because they do. They're family. And
              from our family to yours, we hope you have the very best Family Day
              ever.`}
            </p>
          </div>
        </div>
      );

    if (pageNumber === 3) return <Tests />;
  }, [pageNumber]);
  return (
    <div className="bg-slate-100 pb-6">
      {page}

      <div className="flex justify-center gap-x-4">
        <Button
          onClick={() => setPageNumber(1)}
          className={pageNumber === 1 ? "bg-slate-400" : ""}
        >
          1
        </Button>
        <Button
          onClick={() => setPageNumber(2)}
          className={pageNumber === 2 ? "bg-slate-400" : ""}
        >
          2
        </Button>
        <Button
          onClick={() => setPageNumber(3)}
          className={pageNumber === 3 ? "bg-slate-400" : ""}
        >
          3
        </Button>
      </div>
    </div>
  );
}
