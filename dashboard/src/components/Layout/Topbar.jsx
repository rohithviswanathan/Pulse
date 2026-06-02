import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  InputBase,
  Paper,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { useLocation } from "react-router-dom";

const pages = {
  "/dashboard": {
    title: "Dashboard",
    subtitle: "Overview of your productivity",
    color: "#3b82f6",
  },
  "/tasks": {
    title: "Tasks",
    subtitle: "Manage and complete your work",
    color: "#f97316",
  },
  "/habits": {
    title: "Habits",
    subtitle: "Track your daily consistency",
    color: "#ec4899",
  },
  "/calendar": {
    title: "Calendar",
    subtitle: "Plan and organize your schedule",
    color: "#06b6d4",
  },
  "/notes": {
    title: "Notes",
    subtitle: "Capture and organize ideas",
    color: "#22c55e",
  },
};

export default function Topbar() {
  const location = useLocation();

  const current =
    pages[location.pathname] || pages["/dashboard"];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "rgba(2,6,23,0.88)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        py: 0.5,
      }}
    >
      <Toolbar
        sx={{
          minHeight: "96px",
          px: 4,
          gap: 4,
        }}
      >
        {/* Title Section */}
        <Box
          sx={{
            flexGrow: 1,
            py: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.25,
              mb: 0.75,
            }}
          >
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: current.color,
                boxShadow: `0 0 14px ${current.color}`,
                flexShrink: 0,
              }}
            />

            <Typography
              sx={{
                color: "#f8fafc",
                fontWeight: 700,
                fontSize: "1.55rem",
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              {current.title}
            </Typography>
          </Box>

          <Typography
            sx={{
              color: "#64748b",
              fontSize: "0.82rem",
              lineHeight: 1.6,
            }}
          >
            {current.subtitle}
          </Typography>
        </Box>

        {/* Search */}
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",

            px: 2.5,
            py: 1.1,

            width: {
              xs: 220,
              sm: 300,
              md: 380,
            },

            backgroundColor: "#0f172a",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "16px",

            transition: "all 0.2s ease",

            "&:hover": {
              borderColor: "rgba(255,255,255,0.12)",
              backgroundColor: "#111c31",
            },

            "&:focus-within": {
              borderColor: current.color,
              boxShadow: `0 0 0 1px ${current.color}40`,
            },
          }}
        >
          <SearchIcon
            sx={{
              color: "#64748b",
              fontSize: 20,
            }}
          />

          <InputBase
            placeholder="Search..."
            sx={{
              ml: 1.25,
              flex: 1,
              color: "#e2e8f0",

              "& input::placeholder": {
                color: "#64748b",
                opacity: 1,
              },
            }}
          />
        </Paper>

        {/* User Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2.5,
          }}
        >

          <Avatar
            sx={{
              width: 44,
              height: 44,
              bgcolor: current.color,
              fontWeight: 700,
              fontSize: "0.95rem",
              boxShadow: `0 0 20px ${current.color}40`,
            }}
          >
            R
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}