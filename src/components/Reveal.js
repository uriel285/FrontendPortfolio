import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Reveal = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInView = useInView( ref, {once: true });

  const mainControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView, mainControl]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          oculto: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="oculto"
        animate={mainControl}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
