import { Box, Typography, InputBase } from "@mui/material";

const FILTERS = ["All", "Done", "Doing", "Todo"];

const CHIP = {
  All:   { color: "#6366f1", bg: "rgba(99,102,241,0.12)",  border: "rgba(99,102,241,0.3)"  },
  Done:  { color: "#10b981", bg: "rgba(16,185,129,0.12)",  border: "rgba(16,185,129,0.3)"  },
  Doing: { color: "#f59e0b", bg: "rgba(245,158,11,0.12)",  border: "rgba(245,158,11,0.3)"  },
  Todo:  { color: "#64748b", bg: "rgba(100,116,139,0.12)", border: "rgba(100,116,139,0.3)" },
};

export default function TaskFilters({ search, onSearch, filter, onFilter }) {
  return (
    <Box sx={{
      width: "100%", borderRadius: "16px",
      border: "1px solid rgba(255,255,255,0.05)",
      background: "linear-gradient(145deg, #0f172a 0%, #0d1526 100%)",
      px: "24px", py: "18px",
      display: "flex", alignItems: "center", flexWrap: "wrap", gap: 2,
    }}>

      {/* Search */}
      <Box sx={{
        display: "flex", alignItems: "center", gap: 1,
        backgroundColor: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "10px", px: 1.5, py: 1,
        flex: "1 1 180px", maxWidth: 260,
        transition: "border-color 0.2s",
        "&:focus-within": { borderColor: "rgba(99,102,241,0.4)" },
      }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <InputBase
          placeholder="Search tasks…"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          sx={{ fontSize: "0.82rem", color: "#cbd5e1", flex: 1, "& input::placeholder": { color: "#475569" } }}
        />
      </Box>

      {/* Filter chips */}
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        {FILTERS.map((f) => {
          const s = CHIP[f];
          const active = filter === f;
          return (
            <Box key={f} onClick={() => onFilter(f)} sx={{
              display: "flex", alignItems: "center", gap: 0.75,
              px: 1.5, py: 0.75, borderRadius: "20px", cursor: "pointer",
              backgroundColor: active ? s.bg : "transparent",
              border: `1px solid ${active ? s.border : "rgba(255,255,255,0.07)"}`,
              transition: "all 0.2s ease",
              "&:hover": { backgroundColor: s.bg, borderColor: s.border },
            }}>
              {active && <Box sx={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: s.color, boxShadow: `0 0 5px ${s.color}` }} />}
              <Typography sx={{ fontSize: "0.72rem", fontWeight: active ? 700 : 500, color: active ? s.color : "#475569", letterSpacing: "0.04em" }}>
                {f}
              </Typography>
            </Box>
          );
        })}
      </Box>

      {/* New task */}
      <Box sx={{ ml: "auto" }}>
        <Box sx={{
          display: "flex", alignItems: "center", gap: 0.75,
          backgroundColor: "rgba(99,102,241,0.12)",
          border: "1px solid rgba(99,102,241,0.28)",
          borderRadius: "10px", px: 2, py: 1, cursor: "pointer",
          transition: "all 0.2s",
          "&:hover": { backgroundColor: "rgba(99,102,241,0.22)", borderColor: "rgba(99,102,241,0.5)" },
        }}>
          <Typography sx={{ fontSize: "1rem", color: "#6366f1", lineHeight: 1, fontWeight: 300 }}>+</Typography>
          <Typography sx={{ fontSize: "0.78rem", fontWeight: 700, color: "#818cf8" }}>New task</Typography>
        </Box>
      </Box>

    </Box>
  );
}