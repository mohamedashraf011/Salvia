import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: {
      duration: 0.1,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

function PageTransition({ children, pageKey }) {
  return (
    <motion.div
      key={pageKey}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      style={{ 
        width: "100%", 
        height: "100%",
        position: "relative",
        backgroundColor: "transparent",
        willChange: "transform, opacity",
        overflow: "hidden",
      }}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;