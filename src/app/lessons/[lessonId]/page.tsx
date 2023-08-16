"use client";

import { useState } from "react";
import { Vocabulary } from "./vocabulary";

export default function Lesson() {
  const [isNextPage, setIsNextPage] = useState<boolean>(false);
  return isNextPage ? (
    <div>
      Next Page
      <video src="https://youtu.be/aWYcH_Jgsvg">Video</video>
    </div>
  ) : (
    <Vocabulary setIsNextPage={setIsNextPage} />
  );
}
