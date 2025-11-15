import {
  Paper,
  Stack,
  Button,
  Typography,
  Chip,
  Divider,
  Fade,
  Alert,
  Box,
} from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { isWithinInterval, isSameDay } from "date-fns";

function SchedulerView({
  rangeStart,
  rangeEnd,
  selectedDate,
  onCalendarChange,
  rangeSummary,
  confirmed,
  onBack,
  onClear,
  onConfirm,
}) {
  return (
    <Fade in>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, sm: 5 },
          maxWidth: 880,
          width: "100%",
          borderRadius: 4,
          bgcolor: "common.white",
          boxShadow:
            "0 8px 20px rgba(17, 17, 26, 0.05), 0 30px 60px rgba(17, 17, 26, 0.08)",
          border: "1px solid",
          borderColor: "rgba(0,0,0,0.05)",
          mx: "auto",
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Pacifico", cursive',
            fontSize: { xs: 26, sm: 32 },
            color: "text.primary",
          }}
        >
          Ура! Обери кілька послідовних днів, коли тобі зручно ✨
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          sx={{ mt: 3 }}
        >
          <Box sx={{ flex: 1, minWidth: 280 }}>
            <DateCalendar
              value={rangeEnd || rangeStart || selectedDate}
              onChange={onCalendarChange}
              disablePast
              renderDay={(day, _value, dayProps) => {
                const isSelected =
                  (!!rangeStart && isSameDay(day, rangeStart)) ||
                  (!!rangeEnd && isSameDay(day, rangeEnd)) ||
                  (!!rangeStart &&
                    !!rangeEnd &&
                    isWithinInterval(day, {
                      start: rangeStart,
                      end: rangeEnd,
                    }));
                return (
                  <PickersDay
                    {...dayProps}
                    sx={{
                      ...(isSelected && {
                        bgcolor: "primary.main",
                        color: "primary.contrastText",
                        "&:hover": { bgcolor: "primary.dark" },
                      }),
                    }}
                  />
                );
              }}
            />
          </Box>

          <Box sx={{ flex: 1, minWidth: 280 }}>
            <Typography sx={{ color: "text.secondary" }}>
              План такий: обери день початку і день завершення — я підлаштуюсь
              під твій настрій. Якщо захочеш змінити, просто натисни ще раз і
              обери інший діапазон. ☀️🌿
            </Typography>
            {rangeSummary ? (
              <Stack
                direction="row"
                spacing={1.5}
                sx={{ mt: 2 }}
                alignItems="center"
                justifyContent="center"
              >
                <CalendarMonthRoundedIcon color="primary" />
                <Chip
                  label={
                    rangeSummary.end
                      ? `З ${rangeSummary.startStr} по ${rangeSummary.endStr} · ${rangeSummary.days} дн.`
                      : `Обрано: ${rangeSummary.startStr}`
                  }
                  color="primary"
                  variant="outlined"
                  sx={{ fontWeight: 600 }}
                />
              </Stack>
            ) : null}
          </Box>
        </Stack>

        <Divider sx={{ my: 3 }} />

        {confirmed ? (
          <Alert
            severity="success"
            icon={<CheckRoundedIcon fontSize="inherit" />}
            sx={{ mb: 2 }}
          >
            Чудово! Я вже не можу дочекатися. Напишу, щоб узгодити 🌿😊
          </Alert>
        ) : null}

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="space-between"
        >
          <Button
            variant="text"
            color="inherit"
            startIcon={<ArrowBackRoundedIcon />}
            onClick={onBack}
            sx={{ textTransform: "none" }}
          >
            Назад
          </Button>
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button
              variant="outlined"
              color="inherit"
              startIcon={<DeleteOutlineRoundedIcon />}
              onClick={onClear}
              sx={{ textTransform: "none" }}
            >
              Очистити
            </Button>
            <Button
              variant="contained"
              disabled={!rangeStart}
              onClick={onConfirm}
              sx={{
                textTransform: "none",
                fontWeight: 700,
                boxShadow:
                  "0 6px 14px rgba(25, 118, 210, 0.2), 0 10px 32px rgba(25, 118, 210, 0.16)",
              }}
            >
              Підтвердити
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Fade>
  );
}

export default SchedulerView;
