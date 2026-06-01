import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChecklistIcon from "@mui/icons-material/Checklist";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EventIcon from "@mui/icons-material/Event";
import NoteIcon from "@mui/icons-material/Note";
import { useNavigate, useLocation } from "react-router-dom";

const drawerWidth = 260;

const items = [
  { label: "Dashboard", path: "/dashboard", icon: <DashboardIcon /> },
  { label: "Tasks", path: "/tasks", icon: <ChecklistIcon /> },
  { label: "Habits", path: "/habits", icon: <FavoriteIcon /> },
  { label: "Calendar", path: "/calendar", icon: <EventIcon /> },
  { label: "Notes", path: "/notes", icon: <NoteIcon /> },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

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
          borderRight: "1px solid #1e293b",
        },
        display: { xs: "none", md: "block" },
      }}
    >
      <Box sx={{ p: 1.4, textAlign: "center" }}>
        <Typography variant="h5" fontWeight={700}>
          Pulse
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          Personal dashboard
        </Typography>
      </Box>

      <Divider sx={{ my: 1, borderColor: "#1e293b" }} />

      <List sx={{ px: 1 }}>
        {items.map((item) => {
          const selected = location.pathname === item.path;
          return (
            <ListItemButton
              key={item.path}
              selected={selected}
              onClick={() => navigate(item.path)}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                "&.Mui-selected": {
                  backgroundColor: "rgba(99,102,241,0.18)",
                },
              }}
            >
              <ListItemIcon sx={{ color: selected ? "primary.main" : "text.secondary" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          );
        })}
      </List>
    </Drawer>
  );
}