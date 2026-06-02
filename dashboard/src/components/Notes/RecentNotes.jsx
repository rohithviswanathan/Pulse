import {
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const notes = [
  {
    title: "React Architecture Notes",
    updated: "2 hours ago",
    category: "Frontend",
    color: "#22c55e",
  },
  {
    title: "API Documentation",
    updated: "5 hours ago",
    category: "Backend",
    color: "#06b6d4",
  },
  {
    title: "Design Meeting Summary",
    updated: "Yesterday",
    category: "Design",
    color: "#f97316",
  },
  {
    title: "User Research Findings",
    updated: "2 days ago",
    category: "Research",
    color: "#a78bfa",
  },
];

export default function RecentNotes() {
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
      {/* Ambient Glow */}
      <Box
        sx={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 260,
          height: 260,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)",
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
            mb: 2,
          }}
        >
          Recent Notes
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {notes.map((note) => (
            <Box
              key={note.title}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                p: "10px 14px",
                borderRadius: "12px",
                backgroundColor: `${note.color}0a`,
                border: `1px solid ${note.color}20`,
                transition: "all 0.15s ease",
                cursor: "pointer",

                "&:hover": {
                  backgroundColor: `${note.color}15`,
                  borderColor: `${note.color}40`,
                  transform: "translateX(2px)",
                },
              }}
            >
              {/* Left Accent */}
              <Box
                sx={{
                  width: 4,
                  height: 40,
                  borderRadius: "4px",
                  backgroundColor: note.color,
                  flexShrink: 0,
                }}
              />

              {/* Icon */}
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "10px",
                  backgroundColor: `${note.color}20`,
                  color: note.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <DescriptionOutlinedIcon sx={{ fontSize: 18 }} />
              </Box>

              {/* Content */}
              <Box sx={{ flex: 1, overflow: "hidden" }}>
                <Typography
                  sx={{
                    color: "#e2e8f0",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {note.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "0.65rem",
                    color: "#475569",
                    mt: 0.25,
                  }}
                >
                  {note.category}
                </Typography>
              </Box>

              {/* Time */}
              <Box
                sx={{
                  textAlign: "right",
                  flexShrink: 0,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: 0.5,
                  }}
                >
                  <AccessTimeIcon
                    sx={{
                      fontSize: 12,
                      color: note.color,
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "0.65rem",
                      color: note.color,
                      fontWeight: 700,
                      fontFamily: "'Courier New', monospace",
                    }}
                  >
                    {note.updated}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}