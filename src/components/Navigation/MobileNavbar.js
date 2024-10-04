// import { StaticImage } from 'gatsby-plugin-image'
// import { Grid, makeStyles } from "@material-ui/core";
// import { makeStyles } from "@mui/material";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
// import Grid from '@mui/material/Grid'
import { Box } from "@mui/material";
import Toggle from "./Toggle";

const useStyles = makeStyles((theme) => ({
  mobileNavbar: {
    backgroundColor: theme.palette.secondary.dark,
    backgroundColor: "#fff",
    padding: "0.15rem 0.95rem",
    position: "fixed",
    top: 0,
    boxShadow: theme.shadows[3],
    zIndex: 100,
  },
  ctaButton: {
    [theme.breakpoints.down("sm")]: {
      lineHeight: 1.2,
      marginLeft: "1rem",
    },
  },
  leftSideContainer: {
    display: "flex",
    alignItems: "center",
  },
  logoText: {
    color: theme.palette.primary.main,
    fontSize: "2rem",
    paddingLeft: "1rem",
  },
  logoContainer: {
    // height: '100%',
    // width: '7.5rem',
    // padding: '0.25rem',
  },
}));

const MobileCtaNavbar = ({ toggleSideDrawer }) => {
  const classes = useStyles();
  return (
    <Box sx={{ display: { xs: "block", md: "none" } }}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className={classes.mobileNavbar}
      >
        <div className={classes.leftSideContainer}>
          <div className={classes.logoContainer}>
            {/* <StaticImage
            src="../../images/logo-no-title.png"
            alt="Logo"
            placeholder="none"
            className={classes.logo}
          /> */}
            {/* <Image
            src="/logo-no-title.png"
            alt="Logo"
            width={230}
            height={230}
            // placeholder="none"
            className={classes.logo}
          /> */}
          </div>
          <div className={classes.logoText}>Finkels Alterations</div>
        </div>
        {/* <div className={classes.logoContainer}>
        <Image
          src="/logo-no-title.png"
          alt="Logo"
          width={230}
          height={230}
          // placeholder="none"
          className={classes.logo}
        />
      </div> */}
        <Toggle onToggle={toggleSideDrawer} />
      </Grid>
    </Box>
  );
};

export default MobileCtaNavbar;
