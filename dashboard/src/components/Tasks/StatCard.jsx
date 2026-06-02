import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(0.8); }
`;

export default function StatCard({ label, value, note, dot = "#6366f1" }) {
  return (
    <Box sx={{
      width: "250px", height: "100%", minHeight: 140,
      position: "relative", borderRadius: "16px",
      border: "1px solid rgba(255,255,255,0.05)",
      background: "linear-gradient(145deg, #0f172a 0%, #0d1526 100%)",
      overflow: "hidden", p: "24px 28px", cursor: "default",
      transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
      "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: `0 16px 48px ${dot}28`,
        borderColor: `${dot}45`,
      },
      "&::before": {
        content: '""', position: "absolute",
        top: -50, right: -50, width: 140, height: 140,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${dot}18 0%, transparent 70%)`,
        pointerEvents: "none",
      },
      "&::after": {
        content: '""', position: "absolute",
        bottom: 0, left: 0, width: "45%", height: "1px",
        background: `linear-gradient(90deg, ${dot}80, transparent)`,
      },
    }}>

      <Box sx={{
        position: "absolute", top: 22, right: 22,
        width: 7, height: 7, borderRadius: "50%",
        backgroundColor: dot, boxShadow: `0 0 10px ${dot}`,
        animation: `${pulse} 2.5s ease-in-out infinite`,
      }} />

      <Typography sx={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#475569", mb: 1.5 }}>
        {label}
      </Typography>

      <Typography sx={{ fontSize: "clamp(1.8rem, 2.5vw, 2.5rem)", fontWeight: 800, lineHeight: 1, color: "#f1f5f9", letterSpacing: "-0.03em", mb: 2 }}>
        {value}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box sx={{ width: 18, height: 2, borderRadius: "2px", flexShrink: 0, background: `linear-gradient(90deg, ${dot}, ${dot}66)` }} />
        <Typography sx={{ fontSize: "0.73rem", color: "#475569", fontWeight: 500 }}>{note}</Typography>
      </Box>

    </Box>
  );
}