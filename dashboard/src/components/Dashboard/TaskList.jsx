import { Box, Typography, Stack } from "@mui/material";
import { keyframes } from "@mui/system";
import tasks from "../../data/tasks";

const fadeSlide = keyframes`
  from { opacity: 0; transform: translateX(-10px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const STATUS = {
  Done:  { color: "#10b981", bg: "rgba(16,185,129,0.08)",  glow: false },
  Doing: { color: "#f59e0b", bg: "rgba(245,158,11,0.08)",  glow: true  },
  Todo:  { color: "#475569", bg: "rgba(71,85,105,0.12)",   glow: false },
};

export default function TaskList() {
  const doneCount = tasks.filter((t) => t.status === "Done").length;

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "16px",
        border: "1px solid rgba(255,255,255,0.05)",
        background: "linear-gradient(145deg, #0f172a 0%, #0d1526 100%)",
        overflow: "hidden",
        position: "relative",
        // Corner glow — consistent with StatCard
        "&::before": {
          content: '""',
          position: "absolute",
          top: -60, right: -60,
          width: 180, height: 180,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        },
        // Bottom accent line
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0, left: 0,
          width: "45%", height: "1px",
          background: "linear-gradient(90deg, rgba(99,102,241,0.5), transparent)",
        },
      }}
    >
      {/* ── Header ── */}
      <Box sx={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        px: "28px", pt: "24px", pb: "20px",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}>
        <Box>
          <Typography sx={{
            fontSize: "0.65rem", fontWeight: 700,
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "#475569", mb: 0.5,
          }}>
            Schedule
          </Typography>
          <Typography sx={{ fontSize: "1.1rem", fontWeight: 700, color: "#f1f5f9", lineHeight: 1 }}>
            Today's tasks
          </Typography>
        </Box>

        {/* Progress pill */}
        <Box sx={{
          display: "flex", alignItems: "center", gap: 0.75,
          backgroundColor: "rgba(99,102,241,0.1)",
          border: "1px solid rgba(99,102,241,0.2)",
          borderRadius: "20px", px: 1.5, py: 0.75,
        }}>
          <Box sx={{
            width: 6, height: 6, borderRadius: "50%",
            backgroundColor: "#6366f1",
            boxShadow: "0 0 6px rgba(99,102,241,0.9)",
          }} />
          <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, color: "#818cf8" }}>
            {doneCount} / {tasks.length} done
          </Typography>
        </Box>
      </Box>

      {/* ── Task rows ── */}
      <Stack sx={{ px: "16px", py: "16px" }} spacing={1}>
        {tasks.map((task, i) => {
          const s = STATUS[task.status] ?? STATUS.Todo;
          return (
            <Box
              key={task.title}
              sx={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.04)",
                backgroundColor: "rgba(255,255,255,0.02)",
                px: 2, py: 1.5,
                position: "relative", overflow: "hidden",
                animation: `${fadeSlide} 0.35s ease both`,
                animationDelay: `${i * 0.07}s`,
                transition: "background 0.2s ease, border-color 0.2s ease, transform 0.2s ease",
                cursor: "default",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.045)",
                  borderColor: `${s.color}40`,
                  transform: "translateX(4px)",
                },
                // Left status bar
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: 0, top: "20%",
                  width: "2px", height: "60%",
                  borderRadius: "0 2px 2px 0",
                  backgroundColor: s.color,
                  opacity: task.status === "Todo" ? 0.3 : 0.85,
                },
              }}
            >
              <Typography sx={{
                fontSize: "0.82rem", fontWeight: 500, pl: 0.5,
                color: task.status === "Done" ? "#475569" : "#cbd5e1",
                textDecoration: task.status === "Done" ? "line-through" : "none",
              }}>
                {task.title}
              </Typography>

              {/* Custom status badge */}
              <Box sx={{
                display: "flex", alignItems: "center", gap: 0.75, flexShrink: 0,
                backgroundColor: s.bg,
                border: `1px solid ${s.color}35`,
                borderRadius: "20px", px: 1.25, py: 0.4,
              }}>
                <Box sx={{
                  width: 5, height: 5, borderRadius: "50%",
                  backgroundColor: s.dot ?? s.color,
                  ...(s.glow && { boxShadow: `0 0 6px ${s.color}` }),
                }} />
                <Typography sx={{
                  fontSize: "0.68rem", fontWeight: 700,
                  letterSpacing: "0.06em", color: s.color,
                }}>
                  {task.status}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}