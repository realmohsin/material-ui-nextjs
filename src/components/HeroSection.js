"use client";

import "@/slick-arrows.css";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const useStyles = makeStyles((theme) => ({
  // SliderSection: {
  //   height: "100rem",
  //   padding: "16.5rem 6rem",
  //   position: "relative",
  //   "& > .gatsby-image-wrapper-constrained": {
  //     position: "absolute",
  //     top: 0,
  //     bottom: 0,
  //     right: 0,
  //     left: 0,
  //   },
  //   [theme.breakpoints.down("md")]: {
  //     height: "125rem",
  //   },
  //   [theme.breakpoints.down("xs")]: {
  //     padding: "14rem 0",
  //     height: "90rem",
  //   },
  // },
  // bgImg: {
  //   zIndex: -10,
  // },
  slider: {
    backgroundColor: "red",
    height: "100%",
    // // height: "80rem",
    // height: "100vh",
    // width: "100%",
    // // maxWidth: "158rem",
    // // margin: "0 auto",
    // cursor: "move" /* fallback if grab cursor is unsupported */,
    // cursor: "grab",
    // // overflow: 'visible',
    // "&:active": {
    //   cursor: "grabbing",
    // },
    "& div": {
      // width: "100%",
      height: "100%",
    },
  },
  button: {
    position: "absolute",
    left: "9%",
    bottom: "15%",
    "@media (max-width: 1525px)": {
      left: "6%",
      bottom: "20%",
    },
    [theme.breakpoints.down("md")]: {
      bottom: "25%",
      left: "7%",
      transform: "scale(0.9)",
    },
    "@media (max-width: 1245px)": {
      left: "5%",
    },
    "@media (max-width: 1125px)": {
      left: "2%",
      bottom: "35%",
      transform: "scale(0.75)",
    },
    [theme.breakpoints.down("sm")]: {
      position: "static",
      transform: "scale(1)",
      margin: "6rem auto",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "1rem auto",
      right: "15%",
    },
  },
}));

const SliderSection = () => {
  const classes = useStyles();

  const settings = {
    fade: true,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: "true",
    autoplaySpeed: 3500,
    pauseOnHover: false,
  };

  const list = [1, 2, 3, 4];

  return (
    <Box sx={{ height: "94vh" }}>
      <Slider {...settings} className={classes.slider}>
        {list.map((item) => (
          <Box
            key={item}
            sx={{
              bgcolor: "gray",
              height: "100%",
            }}
          >
            <Image
              alt="Mountains"
              src={`/hotel-hero-${item}.jpg`}
              // placeholder="blur"
              quality={100}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default SliderSection;
