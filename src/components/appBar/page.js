import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
//import AccontCircle from "@material-ui/icons/AccountCircle";
//import AutoComplete from '../autoComplete'

export default function page(props) {
  return (
    <AppBar position="static">
      <Toolbar className="appbar">
        <Typography variant="h6" color="#57851">
          LOGOBETEL
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
