import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import LoadingButton from "@mui/lab/LoadingButton";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import useStyles from './styles';

const CartItem = ({ item, totalPrice, setTotalPrice, totalItem, setTotalItem, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();

  const [product, setProduct] = useState({});

  const [loading, setLoading] = useState(false);

  const [totalQuantity, setTotalQuantity] = useState(item["quantity"]);

  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  const handleUpDown = async (quantity) => {
    const formData = new FormData();
    formData.append("product_id", item["product"]["id"])
    formData.append("order_id", item["order_id"])
    formData.append("quantity", quantity)
    formData.append("price", quantity * item["product"]["price"])
    axios.post("http://localhost:8080/orders", formData, {
      withCredentials: true,
      credentials: "include",
    }).then((res) => {
      setTotalItem(totalItem + quantity)
      setTotalPrice(totalPrice + quantity * item["product"]["price"]);
      setTotalQuantity(totalQuantity + quantity);
      setLoading(false);
    });
  }

  const fetchProduct = async () => {
    axios
      .get("http://localhost:8080/products/" + item["product_id"], {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        setProduct(res.data)
      });
  };

  useEffect(() => {
    // fetchProduct();
  }, [])

  return (
    <Card className="cart-item">
      <CardMedia image={item["product"]["img_url"]} alt={item["product"]["title"]} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h6">{item["product"]["title"]}</Typography>
        <Typography variant="h6" color='secondary' >{item["product"]["price"]}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <LoadingButton
            type="submit"
            size="small"
            disabled={totalQuantity === 1}
            onClick={() => {
              setLoading(true);
              handleUpDown(-1);
            }}
            loading={loading}
          >
            -
          </LoadingButton>
          <Typography>&nbsp;{totalQuantity}&nbsp;</Typography>
          <LoadingButton
            type="submit"
            size="small"
            onClick={() => {
              setLoading(true);
              handleUpDown(1);
            }}
            loading={loading}
          >
            +
          </LoadingButton>
        </div>
        <Button className={classes.button} variant="contained" type="button" color='secondary' onClick={() => onRemoveFromCart(item["product_id"], item["order_id"], totalQuantity)}>Remove</Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
