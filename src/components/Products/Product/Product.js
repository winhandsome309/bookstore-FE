import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardActionArea,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Link to={`product-view/${product["id"]}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={product["img_url"]}
            title={product["title"]}
          />
        </CardActionArea>
      </Link>
      <CardContent>
        <div className={classes.cardContent}>
          <p className={classes.cardContentName}> {product["title"]}</p>
        </div>
        <div className={classes.cardContent}>
          <p className={classes.cardContentPrice}>
            <b>{product["price"]}</b>
          </p>
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <Button
          variant="contained"
          className={classes.button}
          endIcon={<AddShoppingCart />}
          onClick={() => onAddToCart(product["id"], 1, product["price"])}
        >
          <b>ADD TO CART</b>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
