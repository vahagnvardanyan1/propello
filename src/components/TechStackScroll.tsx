"use client";

import { useState } from "react";

import { motion } from "motion/react";
import { Code2, Database, Cloud, Palette, Cpu, Zap } from "lucide-react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import {
  colors,
  spacing,
  borderRadius,
  shadows,
  transitions,
} from "@/theme/theme";

const technologies = [
  {
    name: "React",
    category: "Frontend",
    icon: Code2,
    color: "linear-gradient(to bottom right, #3b82f6, #06b6d4)",
    description: "Component-based UI",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: Cpu,
    color: "linear-gradient(to bottom right, #10b981, #059669)",
    description: "High-performance runtime",
  },
  {
    name: "TypeScript",
    category: "Language",
    icon: Code2,
    color: "linear-gradient(to bottom right, #2563eb, #60a5fa)",
    description: "Type-safe development",
  },
  {
    name: "AWS",
    category: "Cloud",
    icon: Cloud,
    color: "linear-gradient(to bottom right, #f97316, #fb923c)",
    description: "Scalable infrastructure",
  },
  {
    name: "OpenAI API",
    category: "AI",
    icon: Zap,
    color: "linear-gradient(to bottom right, #a855f7, #ec4899)",
    description: "AI-powered features",
  },
  {
    name: "Zapier",
    category: "Automation",
    icon: Zap,
    color: "linear-gradient(to bottom right, #ea580c, #ef4444)",
    description: "Workflow automation",
  },
  {
    name: "Next.js",
    category: "Framework",
    icon: Code2,
    color: "linear-gradient(to bottom right, #374151, #111827)",
    description: "Full-stack React",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: Database,
    color: "linear-gradient(to bottom right, #1d4ed8, #4f46e5)",
    description: "Reliable data storage",
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: Cloud,
    color: "linear-gradient(to bottom right, #3b82f6, #0ea5e9)",
    description: "Containerization",
  },
  {
    name: "Figma",
    category: "Design",
    icon: Palette,
    color: "linear-gradient(to bottom right, #ec4899, #a855f7)",
    description: "Design collaboration",
  },
  {
    name: "TailwindCSS",
    category: "Styling",
    icon: Palette,
    color: "linear-gradient(to bottom right, #06b6d4, #3b82f6)",
    description: "Utility-first CSS",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: Database,
    color: "linear-gradient(to bottom right, #059669, #10b981)",
    description: "NoSQL database",
  },
];

const ScrollContainer = styled(Box)({
  position: "relative",
  overflow: "hidden",
  padding: `${spacing["4xl"]} 0`,
  background: `linear-gradient(to bottom right, ${colors.white}, ${colors.ivory}33, ${colors.white})`,
});

const DecorativeOrb1 = styled(Box)({
  position: "absolute",
  top: 0,
  left: "25%",
  width: "400px",
  height: "400px",
  backgroundColor: colors.buttercream,
  opacity: 0.05,
  borderRadius: "50%",
  filter: "blur(48px)",
});

const DecorativeOrb2 = styled(Box)({
  position: "absolute",
  bottom: 0,
  right: "25%",
  width: "400px",
  height: "400px",
  backgroundColor: colors.dustyBlue,
  opacity: 0.05,
  borderRadius: "50%",
  filter: "blur(48px)",
});

const GradientOverlayLeft = styled(Box)({
  position: "absolute",
  left: 0,
  top: 0,
  bottom: 0,
  width: "80px",
  background: `linear-gradient(to right, ${colors.white}, ${colors.white}cc, transparent)`,
  zIndex: 10,
  pointerEvents: "none",

  "@media (min-width: 640px)": {
    width: "160px",
  },
});

const GradientOverlayRight = styled(Box)({
  position: "absolute",
  right: 0,
  top: 0,
  bottom: 0,
  width: "80px",
  background: `linear-gradient(to left, ${colors.white}, ${colors.white}cc, transparent)`,
  zIndex: 10,
  pointerEvents: "none",

  "@media (min-width: 640px)": {
    width: "160px",
  },
});

const ScrollRow = styled(Box)({
  display: "flex",
  gap: spacing.base,

  "@media (min-width: 640px)": {
    gap: spacing.xl,
  },
});

const TechCard = styled(motion.div)({
  flexShrink: 0,
  position: "relative",
});

const CardInner = styled(Box)({
  position: "relative",
  backgroundColor: colors.white,
  border: `2px solid ${colors.dustyBlue}1a`,
  borderRadius: borderRadius["2xl"],
  padding: spacing.lg,
  boxShadow: shadows.lg,
  width: "240px",
  overflow: "hidden",
  transition: `box-shadow ${transitions.slow}`,

  "@media (min-width: 640px)": {
    padding: spacing.xl,
    width: "280px",
  },

  "&:hover": {
    boxShadow: shadows["2xl"],
  },
});

const CardGlowEffect = styled(motion.div, {
  shouldForwardProp: (prop) => prop !== "bgGradient",
})<{ bgGradient: string }>(({ bgGradient }) => ({
  position: "absolute",
  inset: 0,
  borderRadius: borderRadius["2xl"],
  filter: "blur(40px)",
  opacity: 0,
  background: bgGradient,

  ".group:hover &": {
    opacity: 0.5,
  },

  transition: `opacity ${transitions.slower}`,
}));

const CardBgGradient = styled(motion.div, {
  shouldForwardProp: (prop) => prop !== "bgGradient",
})<{ bgGradient: string }>(({ bgGradient }) => ({
  position: "absolute",
  inset: 0,
  background: bgGradient,
  opacity: 0,
  transition: `opacity ${transitions.slower}`,

  ".group:hover &": {
    opacity: 0.05,
  },
}));

const CardContent = styled(Box)({
  position: "relative",
  zIndex: 10,
});

const CardHeader = styled(Box)({
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
  marginBottom: spacing.md,

  "@media (min-width: 640px)": {
    marginBottom: spacing.base,
  },
});

const IconContainer = styled(motion.div, {
  shouldForwardProp: (prop) => prop !== "bgGradient",
})<{ bgGradient: string }>(({ bgGradient }) => ({
  width: "48px",
  height: "48px",
  borderRadius: borderRadius.xl,
  background: bgGradient,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: shadows.lg,

  "@media (min-width: 640px)": {
    width: "56px",
    height: "56px",
  },
}));

const CategoryBadge = styled(motion.span)({
  padding: `${spacing.xs} ${spacing.md}`,
  borderRadius: borderRadius.full,
  fontSize: "12px",
  fontWeight: 600,
  backgroundColor: colors.ivory,
  color: colors.dustyBlue,
  border: `1px solid ${colors.dustyBlue}1a`,
  whiteSpace: "nowrap",
});

const TechName = styled("h3")({
  color: colors.midnightBlue,
  marginBottom: spacing.sm,
  fontSize: "18px",
  fontWeight: 600,
  margin: `0 0 ${spacing.sm} 0`,

  "@media (min-width: 640px)": {
    fontSize: "20px",
  },
});

const TechDescription = styled(motion.p)({
  color: colors.dustyBlue,
  fontSize: "14px",
  lineHeight: 1.6,
  margin: 0,
});

const AccentLine = styled(motion.div, {
  shouldForwardProp: (prop) => prop !== "bgGradient",
})<{ bgGradient: string }>(({ bgGradient }) => ({
  height: "4px",
  borderRadius: borderRadius.full,
  background: bgGradient,
  marginTop: spacing.md,

  "@media (min-width: 640px)": {
    marginTop: spacing.base,
  },
}));

const BottomGradient = styled(Box)({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: "80px",
  background: `linear-gradient(to top, ${colors.white}, transparent)`,
  pointerEvents: "none",
});

interface TechCardProps {
  tech: (typeof technologies)[0];
  index: number;
}

const TechStackCard = ({ tech, index }: TechCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = tech.icon;

  return (
    <TechCard
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      <CardGlowEffect bgGradient={tech.color} />

      <CardInner>
        <CardBgGradient bgGradient={tech.color} />

        <CardContent>
          <CardHeader>
            <IconContainer
              bgGradient={tech.color}
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Icon color={colors.white} size={20} />
            </IconContainer>

            <CategoryBadge
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
            >
              {tech.category}
            </CategoryBadge>
          </CardHeader>

          <TechName>{tech.name}</TechName>

          <TechDescription
            initial={{ opacity: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0.8 }}
          >
            {tech.description}
          </TechDescription>

          <AccentLine
            bgGradient={tech.color}
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          />
        </CardContent>
      </CardInner>
    </TechCard>
  );
};

export const TechStackScroll = () => {
  return (
    <ScrollContainer>
      <DecorativeOrb1 />
      <DecorativeOrb2 />

      <GradientOverlayLeft />
      <GradientOverlayRight />

      <Box sx={{ display: "flex", flexDirection: "column", gap: spacing.xl }}>
        {/* First Row - Scrolling Left */}
        <motion.div
          animate={{
            x: [0, -2200],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 45,
              ease: "linear",
            },
          }}
        >
          <ScrollRow>
            {[...technologies, ...technologies, ...technologies].map(
              (tech, index) => (
                <TechStackCard
                  key={`tech-1-${index}`}
                  tech={tech}
                  index={index}
                />
              ),
            )}
          </ScrollRow>
        </motion.div>

        {/* Second Row - Scrolling Right */}
        <motion.div
          animate={{
            x: [-2200, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 45,
              ease: "linear",
            },
          }}
        >
          <ScrollRow>
            {[...technologies, ...technologies, ...technologies]
              .reverse()
              .map((tech, index) => (
                <TechStackCard
                  key={`tech-2-${index}`}
                  tech={tech}
                  index={index}
                />
              ))}
          </ScrollRow>
        </motion.div>
      </Box>

      <BottomGradient />
    </ScrollContainer>
  );
};
