"use client";

import { ReactNode, useCallback } from "react";
import { DragDropContext } from "react-beautiful-dnd";

type DragAndDropContextProps = {
  children: ReactNode;
  onDragComplete: (v: any) => void;
};

export function DragAndDropContext({
  children,
  onDragComplete,
}: DragAndDropContextProps) {
  // using useCallback is optional
  const onBeforeCapture = useCallback(() => {
    /*...*/
  }, []);
  const onBeforeDragStart = useCallback(() => {
    /*...*/
  }, []);
  const onDragStart = useCallback((v: any) => {
    console.log("start dragging", v);
  }, []);
  const onDragUpdate = useCallback(() => {
    /*...*/
  }, []);
  const onDragEnd = useCallback((v: any) => {
    // the only one that is required
    console.log("stop dragging", v);
    onDragComplete(v);
  }, []);

  return (
    <DragDropContext
      onBeforeCapture={onBeforeCapture}
      onBeforeDragStart={onBeforeDragStart}
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
      onDragEnd={onDragEnd}
    >
      {children}
    </DragDropContext>
  );
}
