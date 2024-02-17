import React, { useEffect, useState } from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import CartItem from "./CartItem/CartItem";
import useStyles from "./styles";

const Cart = ({ order, totalItem, setTotalItem }) => {
  // const [cart, setCart] = useState([]);
  // const [order, setOrder] = useState();
  // const [orderlines, setOrderlines] = useState([]);
  const classes = useStyles();
  const [totalPrice, setTotalPrice] = useState(order["total_item"]);
  const [orderlines, setOrderlines] = useState(order["lines"]);

  const handleEmptyCart = () => {
    axios
      .delete("https://go-bookstore-opbz.onrender.com/orders/" + order["id"])
      .then((res) => {
        setTotalItem(0);
        if (res.status === 200) {
          // fetchOrderLines();
          fetchOrder();
        } else {
        }
      });
  };

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,
      <Link className={classes.link} to="/">
        {" "}
        start adding some
      </Link>
      !
    </Typography>
  );

  if (!order) return "Loading";

  const fetchOrder = async () => {
    axios
      .get("https://go-bookstore-opbz.onrender.com/orders", {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        if (res.status === 200) {
          setTotalPrice(res.data["order"]["total_price"]);
          setOrderlines(res.data["order"]["lines"]);
        } else {
        }
      });
  };

  const headers = {
    Accept: "*/*",
    // "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  const onRemoveFromCart = async (productId, orderId, quantity) => {
    const formData = new FormData();
    formData.append("product_id", productId);
    formData.append("order_id", orderId);
    axios
      .delete("https://go-bookstore-opbz.onrender.com/orderlines", {
        data: formData,
        // withCredentials: true,
        // credentials: "include",
        // headers: headers,
      })
      .then((res) => {
        setTotalItem(totalItem - quantity);
        if (res.status === 200) {
          // fetchOrderLines();
          fetchOrder();
        } else {
        }
      });
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  const renderCart = () => (
    <>
      <Grid container spacing={4}>
        {orderlines.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem["id"]}>
            <CartItem
              item={lineItem}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              totalItem={totalItem}
              setTotalItem={setTotalItem}
              // onUpdateCartQty={onUpdateCartQty}
              onRemoveFromCart={onRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h5">
          Subtotal: <b>{totalPrice}</b>
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty cart
          </Button>
          <Button
            className={classes.checkoutButton}
            component={Link}
            to="/checkout"
            size="large"
            type="button"
            variant="contained"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h5" gutterBottom>
        <b>Your Shopping Cart</b>
      </Typography>
      <hr />
      {orderlines == null ? renderEmptyCart() : renderCart()}
    </Container>
  );
};

export default Cart;
