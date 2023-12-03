import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

import style from "./AnimateInView.module.scss";

interface AnimateInViewProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  overflow?: "hidden" | "visible";
  delay?: number;
}

const AnimateInView = ({
  children,
  width = "fit-content",
  overflow = "hidden",
  delay = 0.1,
}: AnimateInViewProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      void mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ width, overflow }} className={style.container}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimateInView;
