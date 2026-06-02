import { Box, Typography } from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import BoltIcon from "@mui/icons-material/Bolt";

const upcomingEvents = [
  { time: "10:00 AM", label: "Design Sync",    color: "#06b6d4", duration: "30m", type: "Meeting" },
  { time: "1:00 PM",  label: "Deep Work Block", color: "#a78bfa", duration: "2h",  type: "Focus" },
  { time: "3:30 PM",  label: "Client Call",    color: "#f97316", duration: "45m", type: "External" },
  { time: "5:00 PM",  label: "Sprint Review",  color: "#10b981", duration: "1h",  type: "Team" },
];

function RadialArc({ progress, size = 160, strokeWidth = 8, color }) {
  const r = (size - strokeWidth) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = 2 * Math.PI * r;
  const dashOffset = circumference * (1 - progress);

  return (
    <svg width={size} height={size} style={{ position: "absolute", top: 0, left: 0, transform: "rotate(-90deg)" }}>
      {/* Track */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={strokeWidth} />
      {/* Progress */}
      <circle
        cx={cx} cy={cy} r={r}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
        strokeLinecap="round"
        style={{ filter: `drop-shadow(0 0 6px ${color}88)`, transition: "stroke-dashoffset 1s ease" }}
      />
    </svg>
  );
}

export default function CalendarUpcomingRing({
  label = "Today's Schedule",
  completedEvents = 2,
  totalEvents = 6,
  focusHours = 3.5,
}) {
  const progress = completedEvents / totalEvents;
  const now = new Date();
  const timeStr = now.toLocaleTimeString("en", { hour: "2-digit", minute: "2-digit" });

  return (
    <Box
      sx={{
        backgroundColor: "#0f172a",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "16px",
        p: 3,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "2px",
          background: "linear-gradient(90deg, transparent, #06b6d4, transparent)",
        },
      }}
    >
      {/* Ambient glow */}
      <Box sx={{
        position: "absolute", bottom: -60, right: -60,
        width: 220, height: 220, borderRadius: "50%",
        background: "radial-gradient(circle, #06b6d420 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <Box sx={{ display: "flex", gap: 4, alignItems: "center", flexWrap: "wrap" }}>

        {/* Left: Radial ring */}
        <Box sx={{ position: "relative", width: 160, height: 160, flexShrink: 0 }}>
          {/* Outer ring: day progress */}
          <RadialArc progress={progress} size={160} strokeWidth={8} color="#06b6d4" />
          {/* Inner ring: focus ratio */}
          <Box sx={{ position: "absolute", top: 14, left: 14, width: 132, height: 132 }}>
            <RadialArc progress={focusHours / 8} size={132} strokeWidth={6} color="#a78bfa" />
          </Box>

          {/* Center content */}
          <Box sx={{
            position: "absolute", inset: 0,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
          }}>
            <Typography sx={{
              fontSize: "0.6rem", color: "#475569",
              textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, mb: 0.25,
            }}>
              Now
            </Typography>
            <Typography sx={{
              fontSize: "1.15rem", fontWeight: 700, color: "#f1f5f9",
              fontFamily: "'Courier New', monospace", lineHeight: 1,
            }}>
              {timeStr}
            </Typography>
            <Typography sx={{ fontSize: "0.65rem", color: "#06b6d4", fontWeight: 600, mt: 0.25 }}>
              {completedEvents}/{totalEvents} done
            </Typography>
          </Box>
        </Box>

        {/* Center: Metrics */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 160 }}>
          <Box>
            <Typography sx={{ fontSize: "0.65rem", color: "#475569", textTransform: "uppercase", letterSpacing: "0.1em", mb: 0.5, fontWeight: 600 }}>
              {label}
            </Typography>
            <Typography sx={{ fontSize: "1.6rem", fontWeight: 700, color: "#f1f5f9", lineHeight: 1, fontFamily: "'Courier New', monospace" }}>
              {completedEvents}
              <Typography component="span" sx={{ fontSize: "1rem", color: "#334155", fontFamily: "inherit" }}>
                /{totalEvents}
              </Typography>
            </Typography>
            <Typography sx={{ fontSize: "0.7rem", color: "#64748b", mt: 0.25 }}>events completed</Typography>
          </Box>

          {/* Legend */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.75 }}>
            {[
              { color: "#06b6d4", label: "Day Progress", value: `${Math.round(progress * 100)}%`, icon: WhatshotIcon },
              { color: "#a78bfa", label: "Focus Time",   value: `${focusHours}h`,                icon: BoltIcon },
            ].map(({ color, label, value, icon: Icon }) => (
              <Box key={label} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: color, flexShrink: 0 }} />
                <Typography sx={{ fontSize: "0.7rem", color: "#64748b", flex: 1 }}>{label}</Typography>
                <Typography sx={{ fontSize: "0.7rem", color: color, fontWeight: 700, fontFamily: "'Courier New', monospace" }}>
                  {value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Right: Upcoming event list */}
        <Box sx={{ flex: 1, minWidth: 200 }}>
          <Typography sx={{
            fontSize: "0.65rem", color: "#475569",
            textTransform: "uppercase", letterSpacing: "0.1em",
            fontWeight: 600, mb: 1.5,
          }}>
            Up Next
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.75 }}>
            {upcomingEvents.map((ev, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex", alignItems: "center", gap: 1.5,
                  p: "8px 12px",
                  borderRadius: "10px",
                  backgroundColor: `${ev.color}0a`,
                  border: `1px solid ${ev.color}20`,
                  transition: "all 0.15s",
                  "&:hover": { backgroundColor: `${ev.color}15`, borderColor: `${ev.color}40` },
                }}
              >
                <Box sx={{ width: 3, height: 32, borderRadius: "2px", backgroundColor: ev.color, flexShrink: 0 }} />
                <Box sx={{ flex: 1, overflow: "hidden" }}>
                  <Typography sx={{
                    fontSize: "0.75rem", fontWeight: 600, color: "#e2e8f0",
                    whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                  }}>
                    {ev.label}
                  </Typography>
                  <Typography sx={{ fontSize: "0.65rem", color: "#475569" }}>
                    {ev.type}
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "right", flexShrink: 0 }}>
                  <Typography sx={{ fontSize: "0.65rem", color: ev.color, fontWeight: 700, fontFamily: "'Courier New', monospace" }}>
                    {ev.time}
                  </Typography>
                  <Typography sx={{ fontSize: "0.6rem", color: "#334155" }}>{ev.duration}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

      </Box>
    </Box>
  );
}