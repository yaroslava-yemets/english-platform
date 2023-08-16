"use client";

import classNames from "classnames";
import { MouseEvent, ReactNode } from "react";

type ButtonProps = {
  children?: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
};

export function Button(props: ButtonProps) {
  const { children, className, onClick } = props;

  return (
    <button
      className={classNames(
        "p-4 border rounded-full min-w-[120px] bg-slate-500",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
