import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { Box, Typography } from "@mui/material";
import chartData from "../../data/chartData";

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <Box sx={{
      backgroundColor: "#080f1e",
      border: "1px solid rgba(99,102,241,0.35)",
      borderRadius: "10px", px: 2, py: 1.5,
      boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
    }}>
      <Typography sx={{ fontSize: "0.65rem", fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: "0.1em", mb: 0.5 }}>
        {label}
      </Typography>
      <Typography sx={{ fontSize: "1.15rem", fontWeight: 800, color: "#f1f5f9" }}>
        {payload[0].value}
        <Box component="span" sx={{ fontSize: "0.75rem", color: "#6366f1", ml: 0.5 }}>pts</Box>
      </Typography>
    </Box>
  );
};

export default function WeeklyChart() {
  const avg     = Math.round(chartData.reduce((s, d) => s + d.value, 0) / chartData.length);
  const peak    = Math.max(...chartData.map((d) => d.value));
  const peakDay = chartData.find((d) => d.value === peak)?.day;

  return (
    <Box sx={{
      width: "100%",
      borderRadius: "16px",
      border: "1px solid rgba(255,255,255,0.05)",
      background: "linear-gradient(145deg, #0f172a 0%, #0d1526 100%)",
      overflow: "hidden", position: "relative",
      "&::before": {
        content: '""', position: "absolute",
        top: -60, right: -60, width: 180, height: 180,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      },
      "&::after": {
        content: '""', position: "absolute",
        bottom: 0, left: 0, width: "45%", height: "1px",
        background: "linear-gradient(90deg, rgba(99,102,241,0.5), transparent)",
      },
    }}>

      {/* ── Header ── */}
      <Box sx={{
        display: "flex", justifyContent: "space-between",
        alignItems: "center", flexWrap: "wrap", gap: 1.5,
        px: "28px", pt: "24px", pb: "20px",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}>
        <Box>
          <Typography sx={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#475569", mb: 0.5 }}>
            Analytics
          </Typography>
          <Typography sx={{ fontSize: "1.1rem", fontWeight: 700, color: "#f1f5f9", lineHeight: 1 }}>
            Weekly progress
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
          {[
            { label: `Avg ${avg}pts`, dot: "#6366f1", bg: "rgba(99,102,241,0.1)",  border: "rgba(99,102,241,0.2)" },
            { label: `Peak ${peakDay}`, dot: "#10b981", bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.2)" },
          ].map(({ label, dot, bg, border }) => (
            <Box key={label} sx={{ display: "flex", alignItems: "center", gap: 0.75, backgroundColor: bg, border: `1px solid ${border}`, borderRadius: "20px", px: 1.5, py: 0.75 }}>
              <Box sx={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: dot, boxShadow: `0 0 6px ${dot}` }} />
              <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, color: dot }}>{label}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── Chart ── */}
      <Box sx={{ width: "100%", height: 300, px: "16px", py: "20px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} barCategoryGap="10%" maxBarSize={100}>
            <defs>
              <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#818cf8" stopOpacity={1}    />
                <stop offset="100%" stopColor="#6366f1" stopOpacity={0.65} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#475569", fontSize: 11, fontWeight: 600 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: "#475569", fontSize: 11 }} width={28} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(99,102,241,0.06)", radius: [8, 8, 0, 0] }} />
            <Bar dataKey="value" fill="url(#barGrad)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Box>

    </Box>
  );
}