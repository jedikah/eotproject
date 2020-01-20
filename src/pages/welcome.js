import React from "react";
import { ipcRenderer } from "electron";
import { Text, TextInput, View } from "react-native-electron";
import Connexion from "../components/Connexion";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(theme =>
  createStyles({
    root: {
      width: "100%",
      height: "100%",
      margin: 0,
      padding: 0,
      border: "1px solid green"
    }
  })
);

const Welcome = props => {
  console.log(props);
  const classes = useStyle({});
  return (
    <div className="App" className={classes.root}>
      <Connexion />
    </div>
  );
};

export default Welcome;
