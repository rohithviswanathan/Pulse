import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import tasks from "../../data/tasks";

const fadeSlide = keyframes`
  from { opacity: 0; transform: translateX(-10px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const STATUS = {
  Done:  { color: "#10b981", bg: "rgba(16,185,129,0.08)", glow: false },
  Doing: { color: "#f59e0b", bg: "rgba(245,158,11,0.08)", glow: true  },
  Todo:  { color: "#475569", bg: "rgba(71,85,105,0.12)",  glow: false },
};

const PRIORITY = {
  High:   { color: "#ef4444", bg: "rgba(239,68,68,0.08)"   },
  Medium: { color: "#f59e0b", bg: "rgba(245,158,11,0.08)"  },
  Low:    { color: "#10b981", bg: "rgba(16,185,129,0.08)"  },
};

export default function TaskTable({ search = "", filter = "All" }) {
  const filtered = tasks.filter((t) => {
    const matchFilter = filter === "All" || t.status === filter;
    const matchSearch = t.title.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <Box sx={{
      width: "100%", borderRadius: "16px",
      border: "1px solid rgba(255,255,255,0.05)",
      background: "linear-gradient(145deg, #0f172a 0%, #0d1526 100%)",
      overflow: "hidden", position: "relative",
      "&::before": {
        content: '""', position: "absolute",
        top: -60, right: -60, width: 180, height: 180, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      },
      "&::after": {
        content: '""', position: "absolute",
        bottom: 0, left: 0, width: "45%", height: "1px",
        background: "linear-gradient(90deg, rgba(99,102,241,0.5), transparent)",
      },
    }}>

      {/* Column headers */}
      <Box sx={{
        display: "grid", gridTemplateColumns: "1fr 100px 90px",
        gap: 2, px: "28px", pt: "20px", pb: "14px",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}>
        {["Task", "Status", "Priority"].map((h) => (
          <Typography key={h} sx={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#334155" }}>
            {h}
          </Typography>
        ))}
      </Box>

      {/* Rows */}
      <Box sx={{ px: "16px", py: "12px" }}>
        {filtered.length === 0 ? (
          <Box sx={{ py: 5, textAlign: "center" }}>
            <Typography sx={{ color: "#334155", fontSize: "0.85rem" }}>No tasks match your filter</Typography>
          </Box>
        ) : filtered.map((task, i) => {
          const s = STATUS[task.status]  ?? STATUS.Todo;
          const p = PRIORITY[task.priority] ?? PRIORITY.Medium;
          return (
            <Box key={task.title} sx={{
              display: "grid", gridTemplateColumns: "1fr 100px 90px",
              gap: 2, alignItems: "center",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.04)",
              backgroundColor: "rgba(255,255,255,0.02)",
              px: 2, py: 1.5, mb: 1,
              position: "relative", overflow: "hidden",
              animation: `${fadeSlide} 0.35s ease both`,
              animationDelay: `${i * 0.06}s`,
              transition: "background 0.2s, border-color 0.2s, transform 0.2s",
              cursor: "default",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.045)", borderColor: `${s.color}30`, transform: "translateX(4px)" },
              "&::before": {
                content: '""', position: "absolute",
                left: 0, top: "20%", width: "2px", height: "60%",
                borderRadius: "0 2px 2px 0", backgroundColor: s.color,
                opacity: task.status === "Todo" ? 0.3 : 0.85,
              },
            }}>

              <Typography sx={{ fontSize: "0.82rem", fontWeight: 500, pl: 0.5, color: task.status === "Done" ? "#475569" : "#cbd5e1", textDecoration: task.status === "Done" ? "line-through" : "none" }}>
                {task.title}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, backgroundColor: s.bg, border: `1px solid ${s.color}35`, borderRadius: "20px", px: 1.25, py: 0.4, width: "fit-content" }}>
                <Box sx={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: s.color, ...(s.glow && { boxShadow: `0 0 6px ${s.color}` }) }} />
                <Typography sx={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.06em", color: s.color }}>{task.status}</Typography>
              </Box>

              <Box sx={{ backgroundColor: p.bg, border: `1px solid ${p.color}35`, borderRadius: "20px", px: 1.25, py: 0.4, width: "fit-content" }}>
                <Typography sx={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.06em", color: p.color }}>{task.priority ?? "—"}</Typography>
              </Box>

            </Box>
          );
        })}
      </Box>

    </Box>
  );
}