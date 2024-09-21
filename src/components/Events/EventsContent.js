import * as React from "react";
import "../../App.css"; // Assuming you've added the CSS here
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { GetEvents } from "../../services/Get_Events";
import { useEffect, useState } from "react";

import moment from "moment";
import { CircularProgress } from "@mui/material";
import "moment/locale/en-gb";

const localizer = momentLocalizer(moment);

const EventsContent = () => {
  const [loading, setloading] = useState(false);
  const [eventsList, setEventsList] = useState([]);

  const [view, setView] = useState("month");
  const [date, setDate] = useState(new Date());

  const handleSelectEvent = (event) => {
    setDate(event.start);
    setView("day");
  };

  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await GetEvents();
        if (response.status === 200) {
          const data = await response.json();
          const events = data.Events.map((event) => ({
            title: event.title || "No Title",
            start: new Date(event.Date),
            end: new Date(
              new Date(event.Date).getTime() + event.Duration * 60000
            ),
          }));
          setEventsList(events);
          setloading(false);
        } else {
          console.log("error");
        }
      } catch (error) {
        console.log("error");
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ height: "700px" }}>
      {loading ? (
        <CircularProgress />
      ) : (
        <Calendar
          localizer={localizer}
          events={eventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "100vh" }}
          views={["month", "day"]}
          view={view}
          date={date}
          onNavigate={setDate}
          onView={setView}
          onSelectEvent={handleSelectEvent}
        />
      )}
    </div>
  );
};

export default EventsContent;
