import { Card, CardContent, Typography, Box } from "@mui/material";

export default function SectionCard({ title, subtitle, action, children }) {
  return (
    <Card sx={{ backgroundColor: "background.paper", border: "1px solid #1e293b" }}>
      <CardContent>
        {(title || subtitle || action) && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: 2,
              mb: 2,
            }}
          >
            <Box>
              {title && (
                <Typography variant="h6" fontWeight={600}>
                  {title}
                </Typography>
              )}
              {subtitle && (
                <Typography variant="body2" color="text.secondary">
                  {subtitle}
                </Typography>
              )}
            </Box>
            {action}
          </Box>
        )}

        {children}
      </CardContent>
    </Card>
  );
}