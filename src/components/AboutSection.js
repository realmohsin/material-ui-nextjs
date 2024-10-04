"use client";

import { Box, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import Image from "next/image";

const useStyles = makeStyles((theme) => ({}));

const AboutSection = () => {
  const classes = useStyles();

  return (
    <Box sx={{ px: "1.8rem", py: "5rem" }}>
      <Container maxWidth="lg" sx={{ bgcolor: "#F5F6F9" }}>
        <Box>
          <Typography variant="h1">Welcome to Hotel EXAMPLE</Typography>
          <Typography variant="body1">
            about us Welcome to Hotel Progati Inn Hotel Progati Inn, the family
            Set in Dhaka, 2 km from Armed Forces Medical College, Hotel Progati
            Inn Ltd. Provides air-conditioned rooms with free WiFi and concierge
            services. The property is around 3.3 km from UITS, 4 km from
            Consulate of Singapore and 4.2 km from Primeasia University. The
            accommodation offers free shuttle service, room service and currency
            exchange for guests. All rooms are equipped with a safety deposit
            box, while some rooms come with a balcony. The units at the hotel
            come with a seating area. At Hotel Progati Inn Ltd. You will find a
            restaurant serving American, Chinese and Indian cuisine. Vegetarian
            and halal options can also be requested. Ironing facilities, free
            private parking and a business centre are available, as well as a
            24-hour front desk. North South University is 4.2 km from the
            accommodation, while Independent University Bangladesh is 4.8 km
            away. The nearest airport is Hazrat Shahjalal International Airport,
            5 km from Hotel Progati Inn Ltd..budget travelers. Be inspired by
            the vibrancy surrounding of our exquisite modern accommodation in
            Dhaka. Our customized retreat offers a calming respite from the
            hustle and bustle of downtown Dhaka, where contemporary comforts
            will refresh your senses. Hotel Progati Inn offers special
            privileges and perks every time you stay with us.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
