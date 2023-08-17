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
        "px-4 py-2 rounded-full bg-slate-300 hover:bg-slate-200 transition-all",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
