import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { NavLink } from "react-router-dom";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function NavMenu(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <ul
              style={{
                display: "flex",
                textDecoration: "none",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <li style={{ padding: "0 25px", listStyle: "none" }}>
                <NavLink
                  exact
                  activeClassName="activeRoute"
                  to="/"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  Home
                </NavLink>
              </li>
              <li style={{ padding: "0 25px", listStyle: "none" }}>
                <NavLink
                  exact
                  activeClassName="activeRoute"
                  to="/rq-superHeros"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  RQ SuperHeros
                </NavLink>
              </li>
              <li style={{ padding: "0 25px", listStyle: "none" }}>
                <NavLink
                  exact
                  activeClassName="activeRoute"
                  to="/super-heros"
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  Super Heros
                </NavLink>
              </li>
            </ul>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
