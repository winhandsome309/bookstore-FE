import React from "react";
import { Container, Grid, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { commerce } from "../../lib/commerce";
import { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";

const createMarkup = (text) => {
  return { __html: text };
};

const ProductView = () => {
  const [product, setProduct] = useState({});

  const fetchProduct = async (id) => {
    const response = await commerce.products.retrieve(id);
    console.log({ response });
    const { name, price, media, quantity, description } = response;
    setProduct({
      name,
      quantity,
      description,
      src: media.source,
      price: price.formatted_with_symbol,
    });
  };

  const [newProducts, setNewProducts] = useState([]);

  const fetchNewProducts = async (id) => {
    axios.get("http://localhost:8080/products/" + id).then((response) => {
      setNewProducts(response.data);
      // response.data.map((product) => {
      //   console.log(product);
      // });
    });
  };

  useEffect(() => {
    const id = window.location.pathname.split("/");
    // fetchProduct(id[2]);
    fetchNewProducts(id[2]);
  }, []);

  return (
    <Container className="product-view">
      <Grid container>
        <Grid item xs={12} md={6} className="image-wrapper pb-5">
          <img src={newProducts["img_url"]} alt={newProducts["title"]} />
        </Grid>
        <Grid item xs={12} md={5} className="text">
          <Typography variant="h2">
            <b>{newProducts["title"]}</b>
          </Typography>
          <Typography
            variant="p"
            dangerouslySetInnerHTML={createMarkup(newProducts["description"])}
          />
          <div className="pt-5">
            <Typography variant="h3" color="secondary">
              Price: <b> {newProducts["price"]} </b>
            </Typography>
          </div>
          <br />
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Button
                size="large"
                className="custom-button"
                component={Link}
                to="/"
              >
                Continue Shopping
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductView;
