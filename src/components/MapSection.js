"use client";

import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  mapSection: {
    "& iframe": {
      filter: "grayscale(50%)",
      maxHeight: "35rem",
      maxWidth: "100%",
    },
  },
}));

const MapSection = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{ py: "5rem", color: "white", bgcolor: "#0F1625" }}
      className={classes.mapSection}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.5985153957304!2d-73.89728968422406!3d40.74885904329598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f0421bde3e5%3A0xd9525333c6e64414!2s70-09%2037th%20Ave%2C%20Flushing%2C%20NY%2011372!5e0!3m2!1sen!2sus!4v1629610944396!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
      />
    </Box>
  );
};

export default MapSection;
