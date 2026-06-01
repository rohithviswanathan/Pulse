import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(0.8); }
`;

export default function StatCard({ label, value, note }) {
  return (
    <Box
      sx={{
        width: "250px",
        height: "100%",
        minHeight: 160,
        position: "relative",
        borderRadius: "16px",
        border: "1px solid rgba(255,255,255,0.05)",
        background: "linear-gradient(145deg, #0f172a 0%, #0d1526 100%)",
        overflow: "hidden",
        p: "24px 28px",
        cursor: "default",
        transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 16px 48px rgba(99,102,241,0.2)",
          borderColor: "rgba(99,102,241,0.35)",
        },
        // Radial glow corner
        "&::before": {
          content: '""',
          position: "absolute",
          top: -50, right: -50,
          width: 150, height: 150,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        },
        // Bottom accent line
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0, left: 0,
          width: "45%", height: "1px",
          background: "linear-gradient(90deg, rgba(99,102,241,0.6), transparent)",
        },
      }}
    >

      {/* Pulsing live dot */}
      <Box sx={{
        position: "absolute", top: 22, right: 22,
        width: 7, height: 7, borderRadius: "50%",
        backgroundColor: "#6366f1",
        boxShadow: "0 0 10px rgba(99,102,241,0.9)",
        animation: `${pulse} 2.5s ease-in-out infinite`,
      }} />

      {/* Label */}
      <Typography sx={{
        fontSize: "0.65rem", fontWeight: 700,
        letterSpacing: "0.14em", textTransform: "uppercase",
        color: "#475569", mb: 1.5,
      }}>
        {label}
      </Typography>

      {/* Value */}
      <Typography sx={{
        fontSize: "clamp(1.8rem, 2.5vw, 2.5rem)",
        fontWeight: 800, lineHeight: 1,
        color: "#f1f5f9", letterSpacing: "-0.03em",
        mb: 2.5,
      }}>
        {value}
      </Typography>

      {/* Note with accent dash */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box sx={{
          width: 18, height: 2, borderRadius: "2px", flexShrink: 0,
          background: "linear-gradient(90deg, #6366f1, #818cf8)",
        }} />
        <Typography sx={{ fontSize: "0.73rem", color: "#475569", fontWeight: 500 }}>
          {note}
        </Typography>
      </Box>

    </Box>
  );
}