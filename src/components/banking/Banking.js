import { FormLabel, Input, Textarea } from "@chakra-ui/react";
import { Container } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import "./style.css";

const Banking = ({ user }) => {
  return (
    <Container className="create-product">
      <div>
        <img
          src={`https://img.vietqr.io/image/970448-0004100033273001-compact2.jpg?amount=5000&addInfo=${user["id"]}&accountName=Nguyen%20Xuan%20Thang`}
        />
        <h5> *** Just need adjust amount money ***</h5>
      </div>
    </Container>
  );
};

export default Banking;
