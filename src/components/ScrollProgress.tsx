"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { styled } from "@mui/material/styles";

import { colors, zIndex } from "@/theme/theme";

const ProgressBar = styled(motion.div)({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: "4px",
  backgroundColor: colors.buttercream,
  transformOrigin: "left",
  zIndex: zIndex.tooltip,
});

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return <ProgressBar style={{ scaleX }} />;
};
