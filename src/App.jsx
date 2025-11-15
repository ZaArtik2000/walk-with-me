import { useEffect, useMemo, useState } from "react";
import { Box } from "@mui/material";
import { isBefore } from "date-fns";
import InviteCard from "./components/InviteCard";
import SchedulerView from "./components/SchedulerView";
import GlobalLoader from "./components/GlobalLoader";
import WelcomeFlow from "./components/WelcomeFlow";
import "./App.css";

function App() {
  // Boot/init state
  const [isBootLoading, setIsBootLoading] = useState(true);
  const [isActivated, setIsActivated] = useState(null); // null | boolean
  const [welcomeDone, setWelcomeDone] = useState(false);
  const [view, setView] = useState("invite"); // 'invite' | 'schedule'
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [confirmed, setConfirmed] = useState(false);
  const [rangeStart, setRangeStart] = useState(null);
  const [rangeEnd, setRangeEnd] = useState(null);

  useEffect(() => {
    let mounted = true;
    // Placeholder for real API request:
    // Example using a custom client:
    // api.get("/me/activation-status").then(({ isActivated }) => { ... })
    // Example using React Query:
    // const { data, isLoading } = useApiQuery({ key: 'activation', url: '/me/activation-status' })
    const timer = setTimeout(() => {
      if (!mounted) return;
      // Simulated response:
      const response = { isActivated: false };
      setIsActivated(response.isActivated);
      setIsBootLoading(false);
    }, 1200);
    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, []);

  const handleCalendarChange = (newValue) => {
    console.log("===newValue", newValue);
    if (!newValue) return;
    setConfirmed(false);
    setSelectedDate(newValue);
    if (!rangeStart || (rangeStart && rangeEnd)) {
      setRangeStart(newValue);
      setRangeEnd(null);
      return;
    }
    if (rangeStart && !rangeEnd) {
      if (isBefore(newValue, rangeStart)) {
        setRangeStart(newValue);
      } else {
        setRangeEnd(newValue);
      }
    }
  };

  const rangeSummary = useMemo(() => {
    const start = rangeStart;
    const end = rangeEnd ?? rangeStart;
    if (!start) return null;
    const startStr = start.toLocaleDateString("uk-UA", {
      day: "numeric",
      month: "long",
    });
    const endStr = end
      ? end.toLocaleDateString("uk-UA", { day: "numeric", month: "long" })
      : null;
    const days =
      start && end
        ? Math.round(
            (end.setHours(0, 0, 0, 0) - start.setHours(0, 0, 0, 0)) /
              (1000 * 60 * 60 * 24)
          ) + 1
        : 1;
    return { start, end, startStr, endStr, days };
  }, [rangeStart, rangeEnd]);

  return (
    <Box sx={{}}>
      {isBootLoading ? (
        <GlobalLoader />
      ) : isActivated === false && !welcomeDone ? (
        <WelcomeFlow onComplete={() => setWelcomeDone(true)} />
      ) : view === "invite" ? (
        <InviteCard onProceed={() => setView("schedule")} />
      ) : (
        <SchedulerView
          rangeStart={rangeStart}
          rangeEnd={rangeEnd}
          selectedDate={selectedDate}
          onCalendarChange={handleCalendarChange}
          rangeSummary={rangeSummary}
          confirmed={confirmed}
          onBack={() => {
            setConfirmed(false);
            setRangeStart(null);
            setRangeEnd(null);
            setView("invite");
          }}
          onClear={() => {
            setConfirmed(false);
            setRangeStart(null);
            setRangeEnd(null);
          }}
          onConfirm={() => setConfirmed(true)}
        />
      )}
    </Box>
  );
}

export default App;
