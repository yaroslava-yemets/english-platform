import Link from "next/link";

export default function Lessons() {
  return (
    <div>
      <div>Lessons</div>
      <ul>
        <li>
          <Link href={`/lessons/1`}> Lesson 1</Link>
        </li>
        <li>Lesson 2</li>
        <li>Lesson 3</li>
        <li>Lesson 4</li>
        <li>Lesson 5</li>
      </ul>
    </div>
  );
}
