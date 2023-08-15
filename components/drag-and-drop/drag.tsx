"use client";

import classNames from "classnames";
import { Draggable } from "react-beautiful-dnd";

type DragProps = {
  text: string;
  index: number;
  className?: string;
};

export function Drag(props: DragProps) {
  const { text, index, className } = props;
  return (
    <Draggable draggableId={text} index={index}>
      {(provided, snapshot) => (
        <div
          className={classNames("min-w-[120px] w-14", className)}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {text}
        </div>
      )}
    </Draggable>
  );
}
