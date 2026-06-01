import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";

const glowSpin = keyframes`
  from { stroke-dashoffset: 283; }
  to   { stroke-dashoffset: 70; } /* Animates the progress ring loading up */
`;

export default function HabitStreakRing({ 
  habitName = "Deep Work Focus Blocks", 
  currentStreak = 18, 
  milestoneTarget = 30,
  metricNote = "8 days until Elite Status" 
}) {
  // SVG Ring Mathematics
  const radius = 45;
  const circumference = 2 * Math.PI * radius; // Approx 282.7
  const calculatedPercentage = (currentStreak / milestoneTarget) * 100;
  const strokeOffset = circumference - (calculatedPercentage / 100) * circumference;

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "16px",
        border: "1px solid rgba(255,255,255,0.05)",
        background: "linear-gradient(145deg, #0f172a 0%, #0d1526 100%)",
        p: "24px 28px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 3,
        "&::before": {
          content: '""',
          position: "absolute",
          top: -40, left: -40,
          width: 130, height: 130,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }
      }}
    >
      {/* ── Content Details Left ── */}
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <Typography sx={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6366f1", mb: 0.5 }}>
          Hero Habit Milestone
        </Typography>
        <Typography sx={{ fontSize: "1.1rem", fontWeight: 700, color: "#f1f5f9", lineHeight: 1.2, mb: 1.5 }}>
          {habitName}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mt: "auto" }}>
          <Box>
            <Typography sx={{ fontSize: "0.68rem", color: "#475569", fontWeight: 600 }}>CURRENT</Typography>
            <Typography sx={{ fontSize: "1.2rem", fontWeight: 800, color: "#f1f5f9" }}>🔥 {currentStreak}d</Typography>
          </Box>
          <Box sx={{ width: "1px", height: "24px", backgroundColor: "rgba(255,255,255,0.08)" }} />
          <Box>
            <Typography sx={{ fontSize: "0.68rem", color: "#475569", fontWeight: 600 }}>TARGET</Typography>
            <Typography sx={{ fontSize: "1.2rem", fontWeight: 800, color: "#475569" }}>🎯 {milestoneTarget}d</Typography>
          </Box>
        </Box>
      </Box>

      {/* ── SVG Progress Meter Right ── */}
      <Box sx={{ position: "relative", width: 110, height: 110, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <svg width="100%" height="100%" viewBox="0 0 100 100" style={{ transform: "rotate(-90deg)" }}>
          {/* Base Track Ring */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="rgba(255, 255, 255, 0.03)"
            strokeWidth="6"
          />
          {/* Glowing Active Ring */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="url(#indigoGlowGradient)"
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={strokeOffset}
            strokeLinecap="round"
            style={{
              animation: `${glowSpin} 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
            }}
          />
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="indigoGlowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Percentage Text */}
        <Box sx={{ position: "absolute", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <Typography sx={{ fontSize: "1.1rem", fontWeight: 800, color: "#f1f5f9", lineHeight: 1 }}>
            {Math.round(calculatedPercentage)}%
          </Typography>
          <Typography sx={{ fontSize: "0.55rem", color: "#475569", fontWeight: 700, textTransform: "uppercase", mt: 0.25 }}>
            Done
          </Typography>
        </Box>
      </Box>

      {/* Accent Bottom Bar */}
      <Box sx={{
        position: "absolute", bottom: 0, left: 0, width: "100%", height: "2px",
        background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.3), transparent)"
      }} />
    </Box>
  );
}