"use client";

import { useState } from "react";
import { PrimaryInput } from "../../../../components";

export function Tests() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-800 mb-4">Present Simple</h1>
      <p className="font-bold text-blue-800 mb-4">
        Put the verbs into the correct form.
      </p>
      <ol type="1" className="flex flex-col gap-y-4">
        <li className="list-decimal list-inside">
          I (to like)
          <PrimaryInput className="mx-2" correctAnswer="like" />
          lemonade very much.
        </li>
        <li className="list-decimal list-inside">
          The girls always (to listen)
          <PrimaryInput className="mx-2" correctAnswer="listen" />
          to pop music.
        </li>
        <li className="list-decimal list-inside">
          Janet never (to wear)
          <PrimaryInput className="mx-2" correctAnswer="wears" />
          jeans.
        </li>
        <li className="list-decimal list-inside">
          Mr Smith (to teach)
          <PrimaryInput className="mx-2" correctAnswer="teaches" />
          Spanish and French.
        </li>
        <li className="list-decimal list-inside">
          You (to do)
          <PrimaryInput className="mx-2" correctAnswer="do" />
          your homework after school.
        </li>
        <li className="list-decimal list-inside">
          We (to have)
          <PrimaryInput className="mx-2" correctAnswer="have" />a nice garden.
        </li>
        <li className="list-decimal list-inside">
          She (to be)
          <PrimaryInput className="mx-2" correctAnswer="is" />
          six years old.
        </li>
        <li className="list-decimal list-inside">
          Simon (to have)
          <PrimaryInput className="mx-2" correctAnswer="has" />
          two rabbits and five goldfish.
        </li>
        <li className="list-decimal list-inside">
          I (to be)
          <PrimaryInput className="mx-2" correctAnswer="am" />
          from Vienna, Austria.
        </li>
        <li className="list-decimal list-inside">
          They (to be)
          <PrimaryInput className="mx-2" correctAnswer="are" />
          {`Sandy's parents.`}
        </li>
      </ol>
    </div>
  );
}
