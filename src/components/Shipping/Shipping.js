import React, { useEffect, useState } from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import AppTable from "../Table/AppTable"
import {
  columnsData,
} from "../Table/columnsData";


const Shipping = ({ order, totalItem, setTotalItem }) => {
  return (
    <Container>
      <AppTable props={columnsData}/>
    </Container>
  );
};

export default Shipping;
