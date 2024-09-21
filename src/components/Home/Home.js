import React, { useState } from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  ListItemText,
  Link as MuiLink,
  Box,
} from "@mui/material";
import { Link } from "react-scroll";
import { styled } from "@mui/system";
import EastIcon from "@mui/icons-material/East";
import Image from "../../image/image.png";
import NewsContent from "../../components/News/NewsContent";
import EventsContent from "../../components/Events/EventsContent";

const StyledLink = styled(Link)({
  cursor: "pointer",
  color: "inherit",
  textDecoration: "none",
});

const Section = ({ id, title, children }) => (
  <Card sx={{ marginBottom: 4, borderRadius: "10px" }}>
    <CardContent>
      <Typography
        variant="h5"
        component="h1"
        gutterBottom
        id={id}
        style={{ fontWeight: "bold", color: "#004953", marginBottom: "20px" }}
      >
        {title}
      </Typography>
      {children}
    </CardContent>
  </Card>
);

const Home = () => {
  const sections = [
    { id: "about", title: "About IFAC" },
    { id: "people", title: "People" },
    { id: "news", title: "News" },
    { id: "calendar", title: "Calendar" },
    { id: "contact", title: "Contact Info" },
  ];

  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open(
      "https://www.ifac-control.org/structure/associated-member-organizations-amos",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div>
      <Box
        sx={{
          // position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          padding: "10px 25px",
          backgroundColor: "rgba(255,255,255,0.8)",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          zIndex: 1000,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <a href="https://www.ifac-control.org/">
              <img src={Image} width={140} height={70} />
            </a>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {sections.map((section) => (
              <StyledLink
                key={section.id}
                to={section.id}
                smooth={true}
                duration={500}
                spy={true}
              >
                <Typography
                  variant="button"
                  sx={{
                    marginRight: 2,
                    fontSize: "20px",
                    color: "#004953",
                    fontWeight: "bold",
                    "&:hover": { color: "#8F9779" },
                    fontSize: "16px",
                  }}
                >
                  {section.title}
                </Typography>
              </StyledLink>
            ))}
          </div>
        </div>
      </Box>
      <div
        style={{
          paddingTop: "20px", // Add padding here to offset the height of the header
          background: "linear-gradient(135deg, #f5f7fa 0%, #F0F8FF 100%)",
        }}
      >
        <Container>
          <Section id="about" title="About IFAC AMOs">
            <Typography
              onClick={handleClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Typography
                sx={{
                  mr: 1,
                  fontSize: "20px",
                  textDecoration: isHovered ? "underline" : "none",
                  color: isHovered ? "#B784A7" : "#8F9779",
                }}
              >
                IFAC AMOs
              </Typography>
              <EastIcon
                sx={{
                  fontSize: "30px",
                  transition: "transform 0.3s ease-in-out",
                  transform: isHovered ? "translateX(5px)" : "translateX(0)",
                }}
              />
            </Typography>
          </Section>
          <Section id="people" title="People">
            <Grid container spacing={2}>
              {[
                "Dany Abou Jaoude (AUB)",
                "Roy ABI ZEID DAOU (ULS)",
                "Naseem Daher (AUB)",
                "Noel Maalouf (LAU)",
                "Bechara Nehme (USEK)",
                "Michel Owayjan (AUST)",
                "Flavia Khatounian Rajji (USJ)",
                "Jean Sawma (USJ)",
              ].map((person, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    sx={{
                      padding: 2,
                      borderRadius: 2,
                      boxShadow: 3,
                      backgroundColor: "#f5f5f5",
                    }}
                  >
                    <ListItemText
                      primary={
                        <span>
                          {person.split(" (")[0]}{" "}
                          <span
                            style={{ fontWeight: "normal", color: "#494F55" }}
                          >{`(${person.split(" (")[1]}`}</span>
                        </span>
                      }
                      primaryTypographyProps={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: "#494F55",
                      }}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Section>

          <Section id="news" title="News">
            <Typography>
              {" "}
              <NewsContent />{" "}
            </Typography>
          </Section>

          <Section id="calendar" title="Calendar">
            <EventsContent />
          </Section>

          {/* <Section id="gallery" title="Gallery">
          <Gallery />
        </Section> */}

          <Section id="contact" title="Contact Info">
            <Typography variant="body1" paragraph>
              <strong>Postal mailing address:</strong> P.O. Box 11-0236, Riad El
              Solh Street, Beirut, Lebanon – postal code: 1107 2020
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Telephone number:</strong> +961 1 35 00 00 – Ext. 3542
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Fax:</strong> +961 1 74 44 62
            </Typography>
            <Typography variant="body1">
              <strong>Email:</strong> nd38@aub.edu.lb
            </Typography>
          </Section>
        </Container>
      </div>
    </div>
  );
};

export default Home;
