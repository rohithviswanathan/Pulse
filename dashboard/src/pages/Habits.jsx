import { Box, Grid } from "@mui/material";
import HabitStatCard from "../components/Habit/HabitStatCard";
import HabitMatrix from "../components/Habit/HabitMatrix";
import HabitStreakRing from "../components/Habit/HabitStreakRing";
import { habitStats } from "../data/habitStats";

export default function Habits() {
  return (
    <Box sx={{ width: "100%", p: 3, backgroundColor: "#020617", minHeight: "100vh" }}>
      
      {/* Top Layer: Stats Summary Grid */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {habitStats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={4} key={stat.label}>
              <HabitStatCard
                {...stat}
                index={index}
              />
            </Grid>
        ))}
      </Grid>

      {/* Middle Layer: Full-width Consistency Matrix */}
      <Box sx={{ width: "100%", mb: 3 }}>
        <HabitMatrix />
      </Box>

      {/* Bottom Layer: Full-width Hero Habit Progress Ring */}
      <Box sx={{ width: "100%" }}>
        <HabitStreakRing 
          habitName="Neuro-Linguistic Reading"
          currentStreak={21}
          milestoneTarget={30}
        />
      </Box>

    </Box>
  );
}