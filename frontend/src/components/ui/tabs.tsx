import { cn } from "../../utils/cn";
import { motion } from "framer-motion";
import { useState } from "react";

type Tab = {
  title: string;
  value: string;
  content?: React.ReactNode;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState(propTabs[0].value);
  const [tabs, setTabs] = useState(propTabs);

  const activeTab = tabs.find((tab) => tab.value === active);
  const activeIndex = tabs.findIndex((tab) => tab.value === active);

  return (
    <div className={cn("flex flex-col", containerClassName)}>
      <div className="flex flex-row items-center justify-start space-x-2 overflow-auto">
        {tabs.map((tab, index) => (
          <button
            key={tab.value}
            onClick={() => setActive(tab.value)}
            className={cn(
              "relative px-4 py-2 rounded-full",
              tabClassName
            )}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {active === tab.value && (
              <motion.div
                layoutId="pill-tabs"
                className={cn(
                  "absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full",
                  activeTabClassName
                )}
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <span
              className={cn(
                "relative z-10 text-sm",
                active === tab.value ? "text-white" : "text-black"
              )}
            >
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <div className={cn("mt-4", contentClassName)}>
        {activeTab?.content}
      </div>
    </div>
  );
};