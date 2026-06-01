import { Box, Typography, Stack } from "@mui/material";

export default function PageTitle({ title, subtitle, action }) {
  return (
    <Box sx={{ mb: 3 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" gap={2}>
        <Box>
          <Typography variant="h4" fontWeight={700}>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body2" color="text.secondary" mt={0.5}>
              {subtitle}
            </Typography>
          )}
        </Box>
        {action}
      </Stack>
    </Box>
  );
}