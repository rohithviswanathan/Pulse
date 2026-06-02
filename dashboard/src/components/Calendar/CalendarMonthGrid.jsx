import { Box, Typography } from "@mui/material";
import { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const sampleEvents = {
  3: [{ label: "Design Sync", color: "#06b6d4" }],
  5: [{ label: "Deadline: MVP", color: "#f97316" }],
  7: [
    { label: "Team Standup", color: "#a78bfa" },
    { label: "1:1 Mgr", color: "#10b981" },
  ],
  10: [{ label: "Sprint Review", color: "#06b6d4" }],
  12: [{ label: "Deep Work", color: "#a78bfa" }],
  14: [{ label: "Client Call", color: "#f97316" }],
  15: [
    { label: "OKR Planning", color: "#06b6d4" },
    { label: "Retro", color: "#10b981" },
  ],
  18: [{ label: "Deep Work", color: "#a78bfa" }],
  20: [{ label: "Deadline: Beta", color: "#f97316" }],
  22: [{ label: "Demo Day", color: "#06b6d4" }],
  25: [{ label: "Design Review", color: "#a78bfa" }],
  28: [{ label: "Sprint Plan", color: "#10b981" }],
};

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

export default function CalendarMonthGrid() {
  const today = new Date();

  // ✅ LOCK RANGE
  const MIN_DATE = new Date(2026, 0, 1); // Jan 2026
  const MAX_DATE = new Date(today.getFullYear(), today.getMonth(), 1);

  const [viewDate, setViewDate] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });

  const [selectedDay, setSelectedDay] = useState(today.getDate());

  const { year, month } = viewDate;

  const currentMonthDate = new Date(year, month, 1);

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const monthLabel = new Date(year, month, 1).toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  // ✅ navigation guards
  const canGoPrev = currentMonthDate > MIN_DATE;
  const canGoNext = currentMonthDate < MAX_DATE;

  const prevMonth = () => {
    if (!canGoPrev) return;

    setViewDate(({ year, month }) =>
      month === 0
        ? { year: year - 1, month: 11 }
        : { year, month: month - 1 }
    );
  };

  const nextMonth = () => {
    if (!canGoNext) return;

    setViewDate(({ year, month }) =>
      month === 11
        ? { year: year + 1, month: 0 }
        : { year, month: month + 1 }
    );
  };

  const isToday = (d) =>
    d === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear();

  const cells = Array.from({ length: firstDay }, () => null).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  );

  return (
    <Box
      sx={{
        backgroundColor: "#0f172a",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "16px",
        p: 3,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: 700,
            color: "#f1f5f9",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontFamily: "'Courier New', monospace",
          }}
        >
          {monthLabel}
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          {/* Prev */}
          <Box
            onClick={prevMonth}
            sx={{
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.08)",
              color: canGoPrev ? "#64748b" : "#1e293b",
              cursor: canGoPrev ? "pointer" : "not-allowed",
              opacity: canGoPrev ? 1 : 0.4,
              "&:hover": canGoPrev
                ? {
                    borderColor: "#06b6d4",
                    color: "#06b6d4",
                  }
                : {},
            }}
          >
            <ChevronLeftIcon sx={{ fontSize: 16 }} />
          </Box>

          {/* Next */}
          <Box
            onClick={nextMonth}
            sx={{
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.08)",
              color: canGoNext ? "#64748b" : "#1e293b",
              cursor: canGoNext ? "pointer" : "not-allowed",
              opacity: canGoNext ? 1 : 0.4,
              "&:hover": canGoNext
                ? {
                    borderColor: "#06b6d4",
                    color: "#06b6d4",
                  }
                : {},
            }}
          >
            <ChevronRightIcon sx={{ fontSize: 16 }} />
          </Box>
        </Box>
      </Box>

      {/* Day headers */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          mb: 1,
        }}
      >
        {DAYS.map((d) => (
          <Typography
            key={d}
            sx={{
              textAlign: "center",
              fontSize: "0.65rem",
              fontWeight: 600,
              color: "#334155",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              pb: 1,
            }}
          >
            {d}
          </Typography>
        ))}
      </Box>

      {/* Calendar grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "4px",
        }}
      >
        {cells.map((day, idx) => {
          if (!day) return <Box key={idx} />;

          const events = sampleEvents[day] || [];
          const active = day === selectedDay;
          const todayCell = isToday(day);

          return (
            <Box
              key={day}
              onClick={() => setSelectedDay(day)}
              sx={{
                minHeight: 72,
                borderRadius: "10px",
                p: "6px",
                cursor: "pointer",
                border: "1px solid rgba(255,255,255,0.04)",
                backgroundColor: active
                  ? "rgba(6,182,212,0.08)"
                  : todayCell
                  ? "rgba(167,139,250,0.06)"
                  : "transparent",
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: todayCell ? 700 : 500,
                  color: todayCell
                    ? "#a78bfa"
                    : active
                    ? "#06b6d4"
                    : "#94a3b8",
                  fontFamily: "'Courier New', monospace",
                }}
              >
                {day}
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                {events.slice(0, 2).map((ev, i) => (
                  <Box
                    key={i}
                    sx={{
                      height: 4,
                      borderRadius: 2,
                      backgroundColor: ev.color,
                    }}
                  />
                ))}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}