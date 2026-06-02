import { Box, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

const iconMap = {
  CalendarDays: CalendarMonthIcon,
  Clock: AccessTimeIcon,
  AlertCircle: WarningAmberIcon,
};

const DAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"];

function SparkBars({ data, accent }) {
  const max = Math.max(...data);
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end", gap: "3px", height: 28 }}>
      {data.map((v, i) => (
        <Box key={i} sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
          <Box
            sx={{
              width: 14,
              height: `${(v / max) * 24}px`,
              borderRadius: "3px 3px 2px 2px",
              backgroundColor: i === 6 ? accent : `${accent}40`,
              transition: "height 0.3s ease",
            }}
          />
          <Typography sx={{ fontSize: "0.5rem", color: "#334155", lineHeight: 1 }}>
            {DAY_LABELS[i]}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default function CalendarStatCard({
  label, value, unit, change, changeLabel,
  accent, icon, progress = 0.5, targetLabel = "of target", weeklyBars = [3,4,5,3,6,4,5],
}) {
  const IconComponent = iconMap[icon] || CalendarMonthIcon;
  const isPositive = change >= 0;

  return (
    <Box
      sx={{
        position: "relative",
        width: "350px",
        backgroundColor: "#0f172a",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "16px",
        p: "20px 24px",
        overflow: "hidden",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: `0 8px 32px ${accent}22`,
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "2px",
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
        },
      }}
    >
      {/* Glow orb */}
      <Box sx={{
        position: "absolute", top: -30, right: -30,
        width: 120, height: 120, borderRadius: "50%",
        background: `radial-gradient(circle, ${accent}15 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      {/* ── Row 1: Icon  +  Value & Label ── */}
      <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, mb: 2 }}>
        {/* Icon box */}
        <Box sx={{
          display: "flex", alignItems: "center", justifyContent: "center",
          width: 44, height: 44, borderRadius: "12px",
          backgroundColor: `${accent}18`,
          color: accent, flexShrink: 0, mt: "2px",
        }}>
          <IconComponent sx={{ fontSize: 22 }} />
        </Box>

        {/* Value + label + change */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
            <Typography sx={{
              fontSize: "1.9rem", fontWeight: 700, color: "#f1f5f9",
              lineHeight: 1, fontFamily: "'Courier New', monospace", letterSpacing: "-0.03em",
            }}>
              {value}
            </Typography>
            <Typography sx={{ fontSize: "0.8rem", color: "#475569", fontWeight: 400 }}>
              {unit}
            </Typography>
          </Box>

          <Typography sx={{
            fontSize: "0.7rem", color: "#64748b",
            textTransform: "uppercase", letterSpacing: "0.09em",
            fontWeight: 500, mt: 0.25,
          }}>
            {label}
          </Typography>
        </Box>

        {/* Spark bars — right-aligned */}
        <Box sx={{ flexShrink: 0 }}>
          <SparkBars data={weeklyBars} accent={accent} />
        </Box>
      </Box>

      {/* ── Row 2: Progress bar ── */}
      <Box sx={{ mb: 1.75 }}>
        <Box sx={{
          width: "100%", height: 5, borderRadius: "99px",
          backgroundColor: "rgba(255,255,255,0.06)",
          overflow: "hidden",
        }}>
          <Box sx={{
            height: "100%",
            width: `${Math.round(progress * 100)}%`,
            borderRadius: "99px",
            background: `linear-gradient(90deg, ${accent}88, ${accent})`,
            boxShadow: `0 0 6px ${accent}66`,
          }} />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 0.5 }}>
          <Typography sx={{ fontSize: "0.6rem", color: "#334155" }}>
            {Math.round(progress * 100)}% {targetLabel}
          </Typography>
          <Typography sx={{ fontSize: "0.6rem", color: "#334155" }}>
            100%
          </Typography>
        </Box>
      </Box>

      {/* ── Row 3: Change indicator ── */}
      <Box sx={{
        display: "flex", alignItems: "center", gap: 0.5,
        pt: 1.5, borderTop: "1px solid rgba(255,255,255,0.05)",
      }}>
        {isPositive
          ? <TrendingUpIcon sx={{ fontSize: 14, color: "#10b981" }} />
          : <TrendingDownIcon sx={{ fontSize: 14, color: "#f97316" }} />}
        <Typography sx={{
          fontSize: "0.7rem",
          color: isPositive ? "#10b981" : "#f97316",
          fontWeight: 600,
        }}>
          {isPositive ? "+" : ""}{change} {changeLabel}
        </Typography>
      </Box>
    </Box>
  );
}