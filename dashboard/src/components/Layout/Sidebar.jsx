import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Divider,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ChecklistIcon from "@mui/icons-material/Checklist";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EventIcon from "@mui/icons-material/Event";
import NoteIcon from "@mui/icons-material/Note";
import pulse from "../../assets/pulse.png";

import { useNavigate, useLocation } from "react-router-dom";

const drawerWidth = 260;

const items = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon />,
    color: "#3b82f6",
  },
  {
    label: "Tasks",
    path: "/tasks",
    icon: <ChecklistIcon />,
    color: "#f97316",
  },
  {
    label: "Habits",
    path: "/habits",
    icon: <FavoriteIcon />,
    color: "#ec4899",
  },
  {
    label: "Calendar",
    path: "/calendar",
    icon: <EventIcon />,
    color: "#06b6d4",
  },
  {
    label: "Notes",
    path: "/notes",
    icon: <NoteIcon />,
    color: "#22c55e",
  },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const activeItem =
    items.find((item) => location.pathname === item.path) ||
    items[0];

  const sidebarAccent = activeItem.color;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#020617",
          borderRight: "1px solid rgba(255,255,255,0.06)",
          overflow: "hidden",
          position: "relative",
        },

        display: { xs: "none", md: "block" },
      }}
    >
      {/* Dynamic Ambient Glow */}
      <Box
        sx={{
          position: "absolute",
          top: -120,
          left: -80,
          width: 260,
          height: 260,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${sidebarAccent}18 0%, transparent 70%)`,
          transition: "all 0.3s ease",
          pointerEvents: "none",
        }}
      />

      {/* Logo Section */}
       <Box
        component="img"
        src={pulse}
        alt="Pulse"
        sx={{
          height: 42,
          width: "auto",
          display: "block",
          objectFit: "contain",
          mx: "auto",
          my: 3,
        }}
      />

      <Divider
        sx={{
          borderColor: "rgba(255,255,255,0.06)",
          mb: 2,
        }}
      />

      {/* Navigation */}
      <List sx={{ px: 1.5 }}>
        {items.map((item) => {
          const selected = location.pathname === item.path;
          const accent = item.color;

          return (
            <ListItemButton
              key={item.path}
              onClick={() => navigate(item.path)}
              selected={selected}
              sx={{
                minHeight: 56,
                borderRadius: "14px",
                mb: 1,
                transition: "all 0.18s ease",

                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.03)",
                  transform: "translateX(4px)",
                },

                "&.Mui-selected": {
                  backgroundColor: `${accent}15`,
                  border: `1px solid ${accent}30`,

                  "&:hover": {
                    backgroundColor: `${accent}20`,
                  },
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 44,
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

                    backgroundColor: selected
                      ? `${accent}22`
                      : "rgba(255,255,255,0.04)",

                    color: selected
                      ? accent
                      : "#64748b",

                    transition: "all 0.18s ease",
                  }}
                >
                  {item.icon}
                </Box>
              </ListItemIcon>

              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  sx: {
                    fontSize: "0.86rem",
                    fontWeight: selected ? 600 : 500,
                    color: selected
                      ? "#f8fafc"
                      : "#94a3b8",
                  },
                }}
              />

              {selected && (
                <Box
                  sx={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    backgroundColor: accent,
                    boxShadow: `0 0 12px ${accent}`,
                    flexShrink: 0,
                  }}
                />
              )}
            </ListItemButton>
          );
        })}
      </List>

    </Drawer>
  );
}