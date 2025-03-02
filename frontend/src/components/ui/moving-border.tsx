import React from "react";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";

export const MovingBorder = ({
  children,
  duration = 2000,
  rx = "100%",
  ry = "100%",
  className,
  containerClassName,
  borderClassName,
  ...props
}: {
  children?: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  [key: string]: any;
}) => {
  return (
    <div
      className={cn(
        "relative p-[1px] overflow-hidden rounded-lg",
        containerClassName
      )}
    >
      <motion.div
        className={cn(
          "absolute inset-0 z-0",
          borderClassName
        )}
        style={{
          background: `linear-gradient(to right, #6366f1, #8b5cf6, #d946ef)`,
        }}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: duration / 1000, repeat: Infinity }}
        {...props}
      />
      <div
        className={cn(
          "relative z-10 bg-black rounded-lg",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};