import React, { useEffect, useState } from "react";
import { Typography, Button, TextField, Stack } from "@mui/material";
import { Form, useNavigate } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AddEvents } from "../../services/Add_Events";

function AddEventsPage() {
  const [Event, setEvent] = useState({ title: "", Date: null, Duration: "00" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDateChange = (newDate) => {
    setEvent((prevEvent) => ({
      ...prevEvent,
      Date: newDate,
    }));
  };

  useEffect(() => {
    // Check if the auth token is present in localStorage
    const token = localStorage.getItem("token");
    if (!token) {
      // Redirect to login page if no token
      navigate("/login");
    }
  }, [navigate]);

  const updateValue = (e, type) => {
    setEvent((prevEventData) => ({
      ...prevEventData,
      [type]: e.target.value,
    }));
  };

  const HandleAddEvents = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await AddEvents(Event);
      if (response.status === 200) {
        setLoading(false);
        setEvent({ title: "", Date: null, Duration: "00" });
        navigate("/");
      } else {
        console.error("Failed to add Event");
      }
    } catch (error) {
      console.error("Failed to add Event", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #F0F8FF 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          component={"div"}
          sx={{
            backgroundColor: "#F8F8F8",
            borderRadius: "10px",
            display: "inline-block",
            justifyContent: "center",
            margin: "0 auto",
            boxShadow: "0 4px 8px rgba(170,170,170, 0.5)",
            padding: "0px 35px 20px 35px",
            marginTop: "100px",
          }}
        >
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
            onSubmit={HandleAddEvents}
            method="Post"
          >
            <h2 style={{ color: "#004953", textAlign: "center" }}>
              Add Event:
            </h2>
            <Stack>
              <TextField
                value={Event.title}
                sx={{
                  m: "10px 0 0 0",
                  width: { xs: "25ch", md: "35ch", sm: "25ch" },
                }}
                onChange={(e) => updateValue(e, "title")}
                fullWidth
                label="Title"
                required
                variant="filled"
              />
            </Stack>
            <Stack
              direction={{ sm: "row", xs: "column" }}
              spacing={2}
              mt={"10px"}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  value={Event.Date}
                  onChange={handleDateChange}
                  label="Pick your date"
                  sx={{
                    m: "10px 0 0 0",
                    width: { xs: "25ch", md: "35ch", sm: "25ch" },
                    "& .MuiInputBase-root": {
                      backgroundColor: "#f0f0f0",
                      "&:hover": {
                        backgroundColor: "#e0e0e0",
                      },
                    },
                    "& .MuiFilledInput-underline:before": {
                      borderBottomColor: "rgba(0, 0, 0, 0.42)",
                    },
                    "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before":
                      {
                        borderBottomColor: "rgba(0, 0, 0, 0.87)",
                      },
                  }}
                />
              </LocalizationProvider>
            </Stack>
            <Stack
              direction={{ sm: "row", xs: "column" }}
              spacing={2}
              mt={"10px"}
            >
              <TextField
                sx={{
                  m: "10px 0 0 0",
                  width: { xs: "25ch", md: "35ch", sm: "25ch" },
                }}
                value={Event.Duration}
                onChange={(e) => updateValue(e, "Duration")}
                fullWidth
                label="Duration (minutes)"
                variant="filled"
                required
              />
            </Stack>
            <Button
              type="submit"
              sx={{ marginTop: "20px" }}
              color="primary"
              variant="contained"
              disabled={loading}
            >
              {loading ? "Adding Event..." : "Add Event"}
            </Button>
          </Form>
        </Typography>
      </div>
    </div>
  );
}

export default AddEventsPage;
