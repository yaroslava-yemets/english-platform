"use client";

import { useState } from "react";
import { PrimaryInput } from "../../../../components";

export function Tests() {
  const [name, setName] = useState<string>("");
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-800 mb-4">Present Simple</h1>
      <p className="font-bold text-blue-800 mb-4">
        Put the verbs into the correct form.
      </p>
      <ol type="1" className="flex flex-col gap-y-4">
        <li className="list-decimal list-inside">
          I (to like)
          <PrimaryInput
            className="mx-2"
            onChange={(e: any) => setName(e.target.value)}
            correctAnswer="like"
          />
          lemonade very much.
        </li>
        <li className="list-decimal list-inside">
          The girls always (to listen)
          <PrimaryInput
            className="mx-2"
            onChange={(e: any) => setName(e.target.value)}
            correctAnswer="listen"
          />
          to pop music.
        </li>
        <li className="list-decimal list-inside">
          Janet never (to wear)
          <PrimaryInput
            className="mx-2"
            onChange={(e: any) => setName(e.target.value)}
            correctAnswer="wears"
          />
          jeans.
        </li>
        <li className="list-decimal list-inside">
          Mr Smith (to teach)
          <PrimaryInput
            className="mx-2"
            onChange={(e: any) => setName(e.target.value)}
            correctAnswer="teaches"
          />
          Spanish and French.
        </li>
        <li className="list-decimal list-inside">
          You (to do)
          <PrimaryInput
            className="mx-2"
            onChange={(e: any) => setName(e.target.value)}
            correctAnswer="do"
          />
          your homework after school.
        </li>
      </ol>

      <PrimaryInput
        onChange={(e: any) => setName(e.target.value)}
        value={name}
      />
    </div>
  );
}
