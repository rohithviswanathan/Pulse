import { Box, Typography, Stack } from "@mui/material";
import { keyframes } from "@mui/system";
import habitData from "../../data/habits";

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const DAYS_OF_WEEK = ["M", "T", "W", "T", "F", "S", "S"];

// Status color engine for completion history nodes
const NODE_STATUS = {
  complete: { bg: "linear-gradient(135deg, #10b981 0%, #059669 100%)", border: "rgba(16,185,129,0.4)", glow: "rgba(16,185,129,0.4)" },
  missed:   { bg: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)", border: "rgba(239,68,68,0.3)",  glow: "transparent" },
  pending:  { bg: "rgba(30, 41, 59, 0.7)", border: "rgba(255,255,255,0.08)", glow: "transparent" }
};

export default function HabitMatrix() {
  const activeHabitsCount = habitData.length;

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "16px",
        border: "1px solid rgba(255,255,255,0.05)",
        background: "linear-gradient(145deg, #0f172a 0%, #0d1526 100%)",
        overflow: "hidden",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: -60, right: -60,
          width: 200, height: 200,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        },
      }}
    >
      {/* ── Header Area ── */}
      <Box sx={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        px: "28px", pt: "24px", pb: "20px",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}>
        <Box>
          <Typography sx={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#475569", mb: 0.5 }}>
            Consistency Grid
          </Typography>
          <Typography sx={{ fontSize: "1.1rem", fontWeight: 700, color: "#f1f5f9" }}>
            Weekly Routine
          </Typography>
        </Box>

        {/* Day Labels for Table Alignment Header */}
        <Box sx={{ display: "flex", gap: "12px", pr: 2 }}>
          {DAYS_OF_WEEK.map((day, idx) => (
            <Typography key={idx} sx={{ width: 28, textAlignment: "center", fontSize: "0.68rem", fontWeight: 700, color: "#475569", textAlign: "center" }}>
              {day}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* ── Habits Rows ── */}
      <Stack sx={{ px: "20px", py: "20px" }} spacing={1.5}>
        {habitData.map((habit, idx) => (
          <Box
            key={habit.id}
            sx={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.03)",
              backgroundColor: "rgba(255,255,255,0.01)",
              p: "14px 16px",
              animation: `${slideIn} 0.4s ease both`,
              animationDelay: `${idx * 0.06}s`,
              transition: "all 0.25s ease",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.03)",
                borderColor: "rgba(99,102,241,0.2)",
              }
            }}
          >
            {/* Habit Identity */}
            <Box>
              <Typography sx={{ fontSize: "0.85rem", fontWeight: 600, color: "#f1f5f9" }}>
                {habit.title}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5 }}>
                <Typography sx={{ fontSize: "0.7rem", color: "#6366f1", fontWeight: 600 }}>
                  🔥 {habit.currentStreak} Day Streak
                </Typography>
                <Typography sx={{ fontSize: "0.7rem", color: "#475569" }}>
                  • Target: {habit.frequency}
                </Typography>
              </Box>
            </Box>

            {/* Interactive Grid Dots */}
            <Box sx={{ display: "flex", gap: "12px" }}>
              {habit.weeklyHistory.map((status, dayIdx) => {
                const node = NODE_STATUS[status] || NODE_STATUS.pending;
                return (
                  <Box
                    key={dayIdx}
                    sx={{
                      width: 28,
                      height: 28,
                      borderRadius: "8px",
                      background: node.bg,
                      border: `1px solid ${node.border}`,
                      boxShadow: node.glow !== "transparent" ? `0 0 10px ${node.glow}` : "none",
                      transition: "transform 0.2s ease",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "scale(1.12)"
                      }
                    }}
                  />
                );
              })}
            </Box>

          </Box>
        ))}
      </Stack>
    </Box>
  );
}