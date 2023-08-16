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
        "p-4 rounded-full min-w-[120px] bg-slate-300 hover:bg-slate-200 transition-all",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
