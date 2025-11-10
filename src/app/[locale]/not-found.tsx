"use client";

import { useEffect, useState } from "react";

import { motion } from "motion/react";
import { Home, ArrowLeft } from "lucide-react";
import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

import { Link, useRouter } from "@/navigation";
import { colors, spacing, borderRadius, transitions } from "@/theme/theme";

const NotFoundSection = styled("section")({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: `linear-gradient(to bottom right, ${colors.deepNavy}, ${colors.midnightBlue}, ${colors.dustyBlue})`,
  position: "relative",
  overflow: "hidden",
  padding: `${spacing["2xl"]} 0`,
});

const AnimatedOrb = styled(motion.div)({
  position: "absolute",
  width: "600px",
  height: "600px",
  backgroundColor: colors.buttercream,
  opacity: 0.1,
  borderRadius: "50%",
  filter: "blur(48px)",
});

const ContentWrapper = styled(motion.div)({
  position: "relative",
  zIndex: 10,
  textAlign: "center",
  maxWidth: "800px",
  margin: "0 auto",
});

const ErrorCode = styled(motion.h1)({
  fontSize: "clamp(6rem, 20vw, 12rem)",
  fontWeight: 700,
  color: colors.buttercream,
  margin: `0 0 ${spacing.xl} 0`,
  lineHeight: 1,
  textShadow: "0 0 40px rgba(209, 207, 201, 0.3)",
});

const Title = styled(motion.h2)({
  fontSize: "clamp(2rem, 5vw, 3rem)",
  fontWeight: 600,
  color: colors.white,
  marginBottom: spacing.base,
  margin: `0 0 ${spacing.base} 0`,
});

const Description = styled(motion.p)({
  color: colors.ivory,
  fontSize: "18px",
  lineHeight: 1.6,
  marginBottom: spacing["2xl"],
  margin: `0 0 ${spacing["2xl"]} 0`,
});

const CountdownText = styled(motion.p)({
  color: colors.buttercream,
  fontSize: "16px",
  marginBottom: spacing["3xl"],
  fontWeight: 500,
  margin: `0 0 ${spacing["3xl"]} 0`,
});

const ButtonGroup = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: spacing.base,
  alignItems: "center",

  "@media (min-width: 640px)": {
    flexDirection: "row",
    justifyContent: "center",
  },
});

const PrimaryButton = styled(Link)({
  display: "inline-flex",
  alignItems: "center",
  gap: spacing.md,
  padding: `${spacing.base} ${spacing["2xl"]}`,
  backgroundColor: colors.buttercream,
  color: colors.midnightBlue,
  borderRadius: borderRadius.xl,
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: 600,
  transition: `all ${transitions.slow}`,

  "&:hover": {
    boxShadow: `0 25px 50px ${colors.buttercream}66`,
    transform: "translateY(-4px)",
  },
});

const SecondaryButton = styled(Link)({
  display: "inline-flex",
  alignItems: "center",
  gap: spacing.md,
  padding: `${spacing.base} ${spacing["2xl"]}`,
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(8px)",
  color: colors.white,
  border: "2px solid rgba(255, 255, 255, 0.2)",
  borderRadius: borderRadius.xl,
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: 600,
  transition: `all ${transitions.slow}`,

  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderColor: colors.buttercream,
    transform: "translateY(-4px)",
  },
});

const NotFound = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          router.push("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <NotFoundSection>
      {/* Animated Background */}
      <AnimatedOrb
        style={{ top: 0, left: 0 }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <AnimatedOrb
        style={{ bottom: 0, right: 0 }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Container maxWidth={false}>
        <ContentWrapper
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ErrorCode
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            404
          </ErrorCode>

          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Page Not Found
          </Title>

          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Oops! The page you&apos;re looking for doesn&apos;t exist or has
            been moved.
          </Description>

          <CountdownText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Redirecting to home in {countdown} seconds...
          </CountdownText>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <ButtonGroup>
              <PrimaryButton href="/">
                <Home size={20} />
                Go to Home
              </PrimaryButton>

              <SecondaryButton href="/contact">
                <ArrowLeft size={20} />
                Contact Support
              </SecondaryButton>
            </ButtonGroup>
          </motion.div>
        </ContentWrapper>
      </Container>
    </NotFoundSection>
  );
};

export default NotFound;
