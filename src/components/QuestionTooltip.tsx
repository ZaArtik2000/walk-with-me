import {
  Tooltip,
  Box,
  Typography,
  IconButton,
  SxProps,
  Theme,
} from "@mui/material";
import React from "react";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";

export function QuestionTooltip({
  title,
  description,
  sx,
}: {
  title: string;
  description: string;
  sx: SxProps<Theme>;
}) {
  return (
    <Tooltip
      arrow
      placement="top"
      slotProps={{
        tooltip: {
          sx: {
            bgcolor: "grey.900",
            color: "common.white",
            boxShadow: "0 8px 24px rgba(17,17,26,0.2)",
            p: 2,
            borderRadius: 2,
            maxWidth: 320,
            fontSize: 13.5,
          },
        },
        arrow: { sx: { color: "grey.900" } },
      }}
      title={
        <Box>
          {title && (
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 700, mb: 0.5, color: "common.white" }}
            >
              {title}
            </Typography>
          )}
          <Typography variant="body2" sx={{ color: "common.white" }}>
            {description}
          </Typography>
        </Box>
      }
    >
      <IconButton size="small" aria-label="Пояснення" sx={{ mt: 0.25, ...sx }}>
        <HelpOutlineRoundedIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
}
