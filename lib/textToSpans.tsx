import { motion, MotionProps } from "framer-motion";

const textToSpans = (
  text: string,
  animate: MotionProps,
  letterDelay: number = 0,
  offsetDelay: number = 0
): JSX.Element[] => {
  const letters = text.split("");
  let delay = 0;

  return letters.map((letter, index) => {
    if (letter !== " ") {
      delay++;
    }
    return (
      <motion.span
        key={index}
        initial={animate.initial}
        animate={animate.animate}
        transition={{
          ...animate.transition,
          delay: offsetDelay + delay * letterDelay,
        }}
      >
        {letter === " " ? <>&nbsp;</> : letter}
      </motion.span>
    );
  });
};

export default textToSpans;
