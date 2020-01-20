import React, { useState, useEffect } from "react";
import { ipcRenderer } from "electron";
import { Text, TextInput, View } from "react-native-electron";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Container from "./Container";
import SignUp from "./SignUp";

const useStyle = makeStyles(theme =>
  createStyles({
    root: {
      border: "3px solid black",
      minWidth: "300px",
      minHeight: "500px"
    },
    head: {
      minHeight: "40px"
    }
  })
);

const Connexion = () => {
  const classes = useStyle({});

  return (
    <Container justify="center" style={{ miWidth: "300px" }}>
      <SignUp />
    </Container>
  );
};

export default Connexion;
