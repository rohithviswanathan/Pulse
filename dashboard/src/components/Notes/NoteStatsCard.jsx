import { Box, Typography } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export default function NoteStatsCard({
  label,
  value,
  icon: Icon,
}) {
  const accent = "#22c55e";

  return (
    <Box
      sx={{
        position: "relative",
        width: "250px",
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
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
        },
      }}
    >
      {/* Ambient Glow */}
      <Box
        sx={{
          position: "absolute",
          top: -30,
          right: -30,
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${accent}15 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Top Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 2,
          mb: 2,
        }}
      >
        {/* Left */}
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontSize: "1.9rem",
              fontWeight: 700,
              color: "#f1f5f9",
              lineHeight: 1,
              fontFamily: "'Courier New', monospace",
              letterSpacing: "-0.03em",
            }}
          >
            {value}
          </Typography>

          <Typography
            sx={{
              fontSize: "0.7rem",
              color: "#64748b",
              textTransform: "uppercase",
              letterSpacing: "0.09em",
              fontWeight: 500,
              mt: 0.75,
            }}
          >
            {label}
          </Typography>
        </Box>

        {/* Icon */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 44,
            height: 44,
            borderRadius: "12px",
            backgroundColor: `${accent}18`,
            color: accent,
            flexShrink: 0,
          }}
        >
          <Icon sx={{ fontSize: 22 }} />
        </Box>
      </Box>

      {/* Progress Bar */}
      <Box sx={{ mb: 1.5 }}>
        <Box
          sx={{
            width: "100%",
            height: 5,
            borderRadius: "99px",
            backgroundColor: "rgba(255,255,255,0.06)",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "72%",
              borderRadius: "99px",
              background: `linear-gradient(90deg, ${accent}88, ${accent})`,
              boxShadow: `0 0 6px ${accent}66`,
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 0.5,
          }}
        >
          <Typography
            sx={{
              fontSize: "0.6rem",
              color: "#334155",
            }}
          >
            Active
          </Typography>

          <Typography
            sx={{
              fontSize: "0.6rem",
              color: "#334155",
            }}
          >
            100%
          </Typography>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          pt: 1.5,
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <TrendingUpIcon
          sx={{
            fontSize: 14,
            color: accent,
          }}
        />

        <Typography
          sx={{
            fontSize: "0.7rem",
            color: accent,
            fontWeight: 600,
          }}
        >
          Notes Updated Recently
        </Typography>
      </Box>
    </Box>
  );
}