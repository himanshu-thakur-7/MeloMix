import { cn } from "../../utils/cn";
import React, { useEffect, useRef, useState } from "react";

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
  revealClassName,
}: {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
  revealClassName?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={ref}
      className={cn(
        "h-full relative overflow-hidden cursor-pointer",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="relative z-10 h-full">
        <div className="p-10 text-center text-white">
          <h3 className="text-3xl font-bold">{text}</h3>
        </div>
        {children}
      </div>
      <div
        style={{
          WebkitMaskImage: `radial-gradient(circle at ${position.x}px ${position.y}px, transparent 50px, black 150px)`,
          maskImage: `radial-gradient(circle at ${position.x}px ${position.y}px, transparent 50px, black 150px)`,
          WebkitMaskSize: isHovered ? "100%" : "0%",
          maskSize: isHovered ? "100%" : "0%",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: `${position.x}px ${position.y}px`,
          maskPosition: `${position.x}px ${position.y}px`,
          transition: "mask-size 1s, -webkit-mask-size 1s",
        }}
        className={cn(
          "absolute inset-0 z-20 flex items-center justify-center text-center bg-black",
          revealClassName
        )}
      >
        <div className="p-10 text-white">
          <h3 className="text-3xl font-bold">{revealText}</h3>
        </div>
      </div>
    </div>
  );
};