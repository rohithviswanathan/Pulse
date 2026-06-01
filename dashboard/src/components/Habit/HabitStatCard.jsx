import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";

const greenPulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.4; transform: scale(0.85); }
`;

export default function HabitStatCard({ label, value, note }) {
  return (
    <Box
      sx={{
        width: "350px",
        minHeight: 150,
        position: "relative",
        borderRadius: "16px",
        border: "1px solid rgba(255,255,255,0.05)",
        background: "linear-gradient(145deg, #0f172a 0%, #0d1526 100%)",
        overflow: "hidden",
        p: "24px 28px",
        transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 16px 44px rgba(16,185,129,0.15)",
          borderColor: "rgba(16,185,129,0.3)",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: -50, right: -50,
          width: 140, height: 140,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0, left: 0,
          width: "40%", height: "1px",
          background: "linear-gradient(90deg, rgba(16,185,129,0.5), transparent)",
        },
      }}
    >
      {/* Glowing Tracking Pulse */}
      <Box sx={{
        position: "absolute", top: 24, right: 24,
        width: 6, height: 6, borderRadius: "50%",
        backgroundColor: "#10b981",
        boxShadow: "0 0 10px rgba(16,185,129,0.8)",
        animation: `${greenPulse} 3s ease-in-out infinite`,
      }} />

      {/* Label */}
      <Typography sx={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#475569", mb: 1 }}>
        {label}
      </Typography>

      {/* Numeric Value */}
      <Typography sx={{ fontSize: "2.2rem", fontWeight: 800, lineHeight: 1, color: "#f1f5f9", letterSpacing: "-0.02em", mb: 2 }}>
        {value}
      </Typography>

      {/* Trend context footer */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box sx={{ width: 14, height: 2, borderRadius: "2px", background: "linear-gradient(90deg, #10b981, #34d399)" }} />
        <Typography sx={{ fontSize: "0.72rem", color: "#475569", fontWeight: 500 }}>
          {note}
        </Typography>
      </Box>

    </Box>
  );
}