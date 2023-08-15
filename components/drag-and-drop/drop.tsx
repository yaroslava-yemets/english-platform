"use client";

import { ReactNode } from "react";
import { Droppable } from "react-beautiful-dnd";

type DropProps = {
  children: ReactNode;
  id: string;
  className?: string;
  success?: boolean;
};

export function Drop({ children, id, className, success }: DropProps) {
  return (
    <Droppable droppableId={id}>
      {(provided, snapshot) => {
        const backgroundColor = () => {
          if (snapshot.isDraggingOver) return "blue";
          if (success) return "green";

          return "yellow";
        };

        return (
          <div
            className={className}
            ref={provided.innerRef}
            style={{
              backgroundColor: backgroundColor(),
            }}
            {...provided.droppableProps}
          >
            {children}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
}
