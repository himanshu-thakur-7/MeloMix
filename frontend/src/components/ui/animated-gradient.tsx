import React from "react";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";

export const AnimatedGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
  [key: string]: any;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0% 50%",
    },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    },
  };
  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      <motion.div
        initial="initial"
        animate={animate ? "animate" : "initial"}
        variants={variants}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
        className={cn(
          "absolute inset-0 z-0 bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 opacity-20 blur-xl",
          className
        )}
        {...props}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};