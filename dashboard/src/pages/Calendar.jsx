import { Box, Grid } from "@mui/material";
import CalendarStatCard from "../components/Calendar/CalendarStatCard";
import CalendarMonthGrid from "../components/Calendar/CalendarMonthGrid";
import CalendarUpcomingRing from "../components/Calendar/CalendarUpcomingRing";
import { calendarStats } from "../data/calendarStats.js";

export default function Calendar() {
  return (
    <Box sx={{ width: "100%", p: 3, backgroundColor: "#020617", minHeight: "100vh" }}>

      {/* Top Layer: Stats Summary Grid */}
      <Grid container spacing={6} sx={{ mb: 3 }}>
        {calendarStats.map((stat) => (
          <Grid item xs={12} sm={6} md={4} key={stat.label}>
            <CalendarStatCard {...stat} />
          </Grid>
        ))}
      </Grid>

      {/* Middle Layer: Full-width Month Grid */}
      <Box sx={{ width: "100%", mb: 3 }}>
        <CalendarMonthGrid />
      </Box>

      {/* Bottom Layer: Full-width Today's Schedule Ring */}
      <Box sx={{ width: "100%" }}>
        <CalendarUpcomingRing
          label="Today's Schedule"
          completedEvents={2}
          totalEvents={6}
          focusHours={3.5}
        />
      </Box>

    </Box>
  );
}