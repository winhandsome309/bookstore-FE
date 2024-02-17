import { Button, Divider, ListItem, ListItemText, Typography } from "@material-ui/core";
import React from "react";
import axios from "axios";
import Review from "./Review";

const PaymentForm = ({
  nextStep,
  backStep,
  shippingData,
  order,
  user,
}) => {

  const onSubmit = async () => {
    const formData = new FormData();
    formData.append("first_name", shippingData["firstName"]);
    formData.append("last_name", shippingData["lastName"]);
    formData.append("email", shippingData["email"]);
    formData.append("phone", shippingData["phone"]);
    formData.append("address", shippingData["address"]);
    formData.append("shipping_province", shippingData["shippingProvince"]);
    formData.append("shipping_district", shippingData["shippingDistrict"]);
    formData.append("shipping_ward", shippingData["shippingWard"]);
    formData.append("order_id", order["id"]);
    axios.post("https://go-bookstore-opbz.onrender.com/checkout", formData, {
      withCredentials: true,
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 200) {
          swal({
            text: "Purchase successfully",
            icon: "success",
          });
          window.location.replace("https://bookstore-fe-v8ch.onrender.com/");
        } else {
          swal({
            text: "Purchase fail",
            icon: "error",
          });
        }
      });
  };

  const onAddMoney = async () => {

  }

  return (
    <>
      <Review order={order} />
      <Divider />
      <ListItem style={{ padding: '10px 0' }}>
        <ListItemText primary={<Typography style={{ fontWeight: 700 }} gutterBottom >
          Your Balance
        </Typography>} />
        <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
          {user["balance"]}
        </Typography>
      </ListItem>
      <Divider />
      <ListItem style={{ padding: '10px 0', color: (user["balance"] - order["total_price"] >= 0) ? "#00ff95" : "red" }}>
        <ListItemText primary={<Typography style={{ fontWeight: 700 }} gutterBottom >
          Remain
        </Typography>} />
        <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
          {user["balance"] - order["total_price"]}
        </Typography>
      </ListItem >
      {/* <form onSubmit={() => onSubmit()}> */}
      <br /> <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="outlined" onClick={backStep}>
          Back
        </Button>
        <Button
          type="submit"
          variant="contained"
          style={{ backgroundColor: "#001524", color: "#FFFF" }}
          onClick={() => {
            (user["balance"] - order["total_price"] >= 0) ? onSubmit() : onAddMoney();
          }}
        >
          {user["balance"] - order["total_price"] >= 0 ? "Pay" : "Add more money"}
        </Button>
      </div>
      {/* </form> */}
    </>
  );
};

export default PaymentForm;
