"use client";
import React from "react";
import { cn } from "../../utils/cn";

export const ButtonsCard = ({
  children,
  className,
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "w-full bg-white rounded-xl border border-neutral-100 backdrop-blur-sm bg-white/5 border-white/[0.2] hover:border-neutral-200 flex items-center justify-center",
        className
      )}
    >
      <div className="">{children}</div>
    </div>
  );
};

