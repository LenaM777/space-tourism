export const pageTransition = {
  initial: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, scale: 1.05, filter: "blur(10px)" },
  transition: { 
    duration: 0.8, 
    ease: [0.43, 0.13, 0.23, 0.96] 
  }
};