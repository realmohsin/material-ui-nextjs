// import { makeStyles } from "@material-ui/core/styles";
// import { makeStyles } from "@mui/material";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
// import { Link } from "gatsby";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const useStyles = makeStyles((theme) => ({
  navbarContainer: {
    position: "fixed",
    width: "100%",
    zIndex: "100",
    padding: "0rem 5rem 0",
    color: "white",
    background: theme.palette.secondary.dark,
    boxShadow: "0px 5px 5px rgb(46 46 46 / 30%)",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "165rem",
    margin: "0 auto",
    background: "transparent",
  },
  leftSideContainer: {
    display: "flex",
    alignItems: "center",
  },
  logoText: {
    color: theme.palette.primary.main,
    fontSize: "2.2rem",
    paddingLeft: "1rem",
    fontWeight: 300,
  },
  logoContainer: {
    width: "6rem",
    padding: "0.7rem",
  },
  navUl: {
    display: "flex",
    alignItems: "center",
  },
  navLink: {
    fontSize: "1.5rem",
    textShadow: "black 0px 0px 7px",
    fontWeight: "bold",
    padding: "0.75rem 0",
    marginLeft: "3.2rem",
    position: "relative",
    color: "#ccc",
    "&::before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "2px",
      bottom: 0,
      left: 0,
      backgroundColor: theme.palette.primary.main,
      visibility: "hidden",
      transform: "scaleX(0)",
      transition: "all 0.3s ease-in-out 0s",
    },
    "&:hover": {
      color: theme.palette.primary.main,
    },
    "&:hover::before": {
      visibility: "visible",
      transform: "scaleX(1)",
    },
  },
  activeLink: {
    color: theme.palette.primary.main,
    "&::before": {
      visibility: "visible",
      transform: "scaleX(1)",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const pathname = usePathname();

  const isActive = ({ isCurrent }) => {
    return isCurrent
      ? { className: clsx(classes.navLink, classes.activeLink) }
      : { className: classes.navLink };
  };

  return (
    <Box
      className={classes.navbarContainer}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box component="nav" className={classes.navbar}>
        <Box className={classes.leftSideContainer}>
          <Box className={classes.logoContainer}>
            {/* <StaticImage
              src="../../images/logo-no-title.png"
              alt="Logo"
              placeholder="none"
            /> */}
            <Image
              src="/logo-no-title.png"
              alt="Logo"
              width={50}
              height={50}
              // placeholder="none"
              className={classes.logo}
            />
          </Box>
          <Box className={classes.logoText}>Finkels Alterations</Box>
        </Box>
        <Box component="ul" className={classes.navUl}>
          <Box component="li">
            <Link
              href="/"
              className={
                pathname === "/"
                  ? clsx(classes.navLink, classes.activeLink)
                  : classes.navLink
              }
              // getProps={isActive}
            >
              Home
            </Link>
          </Box>
          <Box component="li">
            <Link
              href="/about"
              className={
                pathname === "/about"
                  ? clsx(classes.navLink, classes.activeLink)
                  : classes.navLink
              }
              // getProps={isActive}
            >
              About
            </Link>
          </Box>
          <Box component="li">
            <Link
              href="/services"
              className={
                pathname === "/services"
                  ? clsx(classes.navLink, classes.activeLink)
                  : classes.navLink
              }
              // getProps={isActive}
            >
              Services
            </Link>
          </Box>
          <Box component="li">
            <Link
              href="/gallery"
              className={
                pathname === "/gallery"
                  ? clsx(classes.navLink, classes.activeLink)
                  : classes.navLink
              }
              // getProps={isActive}
            >
              Gallery
            </Link>
          </Box>
          {/* <li>
            <Link href="/careers" getProps={isActive}>
              Careers
            </Link>
          </li> */}
          <Box component="li">
            <Link
              href="/contact"
              className={
                pathname === "/contact"
                  ? clsx(classes.navLink, classes.activeLink)
                  : classes.navLink
              }
              // getProps={isActive}
            >
              Contact
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
