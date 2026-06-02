import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

const weeklyData = [4, 7, 3, 9, 6, 8, 11];
const days = ["S", "M", "T", "W", "T", "F", "S"];

export default function NotesOverviewChart() {
  const max = Math.max(...weeklyData);

  return (
    <Card
      elevation={0}
      sx={{
        position: "relative",
        backgroundColor: "#0f172a",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "16px",
        overflow: "hidden",

        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background:
            "linear-gradient(90deg, transparent, #22c55e, transparent)",
        },
      }}
    >
      {/* Glow */}
      <Box
        sx={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 220,
          height: 220,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <CardContent sx={{ p: 3 }}>
        <Typography
          sx={{
            fontSize: "0.7rem",
            color: "#64748b",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontWeight: 600,
            mb: 3,
          }}
        >
          Notes Activity
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 4,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {/* Left Metrics */}
          <Box
            sx={{
              minWidth: 220,
              flex: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: "2.5rem",
                fontWeight: 700,
                color: "#f1f5f9",
                lineHeight: 1,
                fontFamily: "'Courier New', monospace",
              }}
            >
              128
            </Typography>

            <Typography
              sx={{
                fontSize: "0.75rem",
                color: "#64748b",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                mb: 3,
              }}
            >
              Total Notes
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.25,
              }}
            >
              {[
                {
                  label: "Created This Week",
                  value: "24",
                  color: "#22c55e",
                },
                {
                  label: "Edited Today",
                  value: "12",
                  color: "#06b6d4",
                },
                {
                  label: "Pinned Notes",
                  value: "8",
                  color: "#a78bfa",
                },
              ].map((item) => (
                <Box
                  key={item.label}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: item.color,
                    }}
                  />

                  <Typography
                    sx={{
                      flex: 1,
                      color: "#64748b",
                      fontSize: "0.75rem",
                    }}
                  >
                    {item.label}
                  </Typography>

                  <Typography
                    sx={{
                      color: item.color,
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      fontFamily:
                        "'Courier New', monospace",
                    }}
                  >
                    {item.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Right Weekly Activity */}
          <Box
            sx={{
              flex: 1,
              minWidth: 280,
              height: 220,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 1,
              p: 2,
              borderRadius: "12px",
              backgroundColor:
                "rgba(255,255,255,0.02)",
              border:
                "1px solid rgba(255,255,255,0.05)",
            }}
          >
            {weeklyData.map((value, index) => (
              <Box
                key={index}
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: 1,
                  height: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.65rem",
                    color: "#475569",
                  }}
                >
                  {value}
                </Typography>

                <Box
                  sx={{
                    width: "100%",
                    maxWidth: 34,
                    height: `${(value / max) * 140}px`,
                    borderRadius:
                      "8px 8px 4px 4px",
                    background:
                      index === weeklyData.length - 1
                        ? "#22c55e"
                        : "rgba(34,197,94,0.35)",
                    boxShadow:
                      index === weeklyData.length - 1
                        ? "0 0 12px rgba(34,197,94,0.4)"
                        : "none",
                    transition:
                      "all 0.25s ease",
                  }}
                />

                <Typography
                  sx={{
                    fontSize: "0.65rem",
                    color: "#334155",
                    fontWeight: 600,
                  }}
                >
                  {days[index]}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}