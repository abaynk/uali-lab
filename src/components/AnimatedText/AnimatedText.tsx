import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const AnimatedCharacters = ({ text }: any) => {
  const item = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const wrapper = {
    hidden: {
      transform: "translate3d(0px, 80%, 0px)",
    },
    visible: {
      transform: "translate3d(0px, 0%, 0px)",
    },
  };
  const splitWords = text.split(" ");

  const words: string[][] = [];

  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  words.map((word) => {
    return word.push("\u00A0");
  });

  return (
    <AnimatePresence>
      {words.map((word, index) => {
        return (
          <motion.span
            className="TextAnimateUp_word__Yvn5A"
            key={index}
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              animation:
                "0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8",
            }}
            variants={wrapper}
            initial="hidden"
            animate="visible"
          >
            {words[index].flat().map((element, index) => {
              return (
                <motion.span
                  style={{
                    display: "inline-block",
                    whiteSpace: "pre",
                    animation:
                      "0.8s cubic-bezier(0, 0.55, 0.45, 1) 0s 1 normal forwards running TextAnimateUp_mask-down__TzvI8",
                  }}
                  variants={item}
                  key={index}
                  initial="hidden"
                  animate="visible"
                >
                  {element}
                </motion.span>
              );
            })}
          </motion.span>
        );
      })}
    </AnimatePresence>
  );
};

export default AnimatedCharacters;
