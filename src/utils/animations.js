export const customEase = [0.43, 0.13, 0.23, 0.96];

export const pageTransition = {
  initial: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, scale: 1.05, filter: "blur(10px)" },
  transition: { duration: 0.8, ease: customEase },
};

export const planetVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotate: -10,
  },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    filter: "drop-shadow(0 0 24px var(--color-white-17))",
    transition: {
      duration: 1,
      delay: 0.3,
      ease: customEase,
    },
  },
  infinite: {
    rotate: 360,
    transition: {
      duration: 200,
      repeat: Infinity,
      ease: "linear",
    },
  }
};

export const cascadeContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

export const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: customEase,
    },
  },
};



