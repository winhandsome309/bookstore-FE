import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const Review = ({ checkoutToken, order }) => (
  <>
    <Typography variant="h6" gutterBottom>Order summary</Typography>
    <List disablePadding>
      {order["lines"].map((product) => (
        <ListItem style={{ padding: '10px 0' }} key={product["product"]["title"]}>
          <ListItemText primary={product["product"]["title"]} secondary={`Quantity: ${product["quantity"]}`} />
          <Typography variant="body2">{product["price"]}</Typography>
        </ListItem>
      ))}
      <ListItem style={{ padding: '10px 0' }}>
        <ListItemText primary="Total" />
        <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
          {order["total_price"]}
        </Typography>
      </ListItem>
    </List>
  </>
);

export default Review;
