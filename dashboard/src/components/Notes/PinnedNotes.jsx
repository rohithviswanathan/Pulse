import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const pinnedNotes = [
  {
    title: "Project Ideas",
    updated: "2 hours ago",
    category: "Planning",
    color: "#22c55e",
  },
  {
    title: "Meeting Notes",
    updated: "Yesterday",
    category: "Work",
    color: "#06b6d4",
  },
  {
    title: "Ayurveda Research",
    updated: "3 days ago",
    category: "Research",
    color: "#a78bfa",
  },
];

export default function PinnedNotes() {
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
          bottom: -80,
          right: -80,
          width: 240,
          height: 240,
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
            mb: 2.5,
          }}
        >
          Pinned Notes
        </Typography>

        <Grid container spacing={2}>
          {pinnedNotes.map((note) => (
            <Grid item xs={12} md={4} key={note.title}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: "12px",
                  width: "350px",
                  backgroundColor: `${note.color}0a`,
                  border: `1px solid ${note.color}20`,
                  transition: "all 0.15s ease",
                  cursor: "pointer",

                  "&:hover": {
                    transform: "translateY(-2px)",
                    backgroundColor: `${note.color}15`,
                    borderColor: `${note.color}40`,
                  },
                }}
              >
                {/* Top Row */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: `${note.color}20`,
                      color: note.color,
                    }}
                  >
                    <PushPinOutlinedIcon sx={{ fontSize: 18 }} />
                  </Box>

                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        color: "#e2e8f0",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        lineHeight: 1.2,
                      }}
                    >
                      {note.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "0.65rem",
                        color: note.color,
                        fontWeight: 600,
                        mt: 0.25,
                      }}
                    >
                      {note.category}
                    </Typography>
                  </Box>
                </Box>

                {/* Footer */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.75,
                    pt: 1.25,
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <AccessTimeIcon
                    sx={{
                      fontSize: 13,
                      color: "#475569",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "0.65rem",
                      color: "#64748b",
                    }}
                  >
                    Updated {note.updated}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}