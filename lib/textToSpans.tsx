import { motion } from "framer-motion";

interface animate {
  initial: { [key: string]: string | number };
  animate: { [key: string]: string | number };
  transition: { [key: string]: string | number };
}

const textToSpans = (
  text: string,
  animate: animate,
  offsetDelay: number = 0
): JSX.Element[] => {
  const letters = text.split("");
  let delay = 0 + offsetDelay;

  return letters.map((letter, index) => {
    if (letter !== " ") {
      delay++;
    }
    return (
      <motion.span
        key={index}
        initial={{ ...animate.initial }}
        animate={{ ...animate.animate }}
        transition={{ ...animate.transition, delay: delay * 0.075 }}
      >
        {letter === " " ? <>&nbsp;</> : letter}
      </motion.span>
    );
  });
};

export default textToSpans;
