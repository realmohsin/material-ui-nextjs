"use client";

import { Box, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import Image from "next/image";

const useStyles = makeStyles((theme) => ({}));

const PolicySection = () => {
  const classes = useStyles();

  return (
    <Box sx={{ px: "1.8rem", py: "5rem", color: "white", bgcolor: "#0F1625" }}>
      <Container maxWidth="lg" sx={{}}>
        <Box>
          <Typography variant="h2">Our Policy</Typography>
          <Typography variant="body1">
            Check-in 02:00 PM Early check-in subject to availability Early
            check-in fee (subject to availability) BDT 1200.00 Check-out 12:00
            PM Late check-out subject to availability (Till 06:00 PM) Late
            check-out fee BDT 1200.00
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default PolicySection;
