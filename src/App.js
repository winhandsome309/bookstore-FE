import "@fortawesome/fontawesome-free/css/all.min.css";
import { CssBaseline } from "@material-ui/core";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import loadingImg from "./assets/loader.gif";
import Cart from "./components/Cart/Cart";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import Banking from "./components/banking/Banking";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ProductView from "./components/ProductView/ProductView";
import Products from "./components/Products/Products";
import Register from "./components/Register/Register";
import SignIn from "./components/SignIn/SignIn";
import UpdateProduct from "./components/UpdateProduct/UpdateProduct";
import Checkout from "./components/CheckoutForm/Checkout/Checkout";
import "./style.css";
import About from "./components/About/About";
import Term from "./components/Term/Term";
const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [featureProducts, setFeatureProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [cookie, setCookie] = useCookies(["Authorization"]);
  const [user, setUser] = useState(null);
  const [totalItem, setTotalItem] = useState(0);
  const [orderlines, setOrderlines] = useState([]);

  const [newProducts, setNewProducts] = useState([]);

  const fetchCart = async () => {
    axios
      .get(process.env.REACT_APP_BACKEND_HOSTING + "/orders/" + user["id"])
      .then((res) => {
        setCart(res.data);
      });
  };

  const handleAddToCart = async (productId, quantity, price) => {
    const formData = new FormData();
    formData.append("product_id", productId);
    formData.append("quantity", quantity);
    formData.append("price", price);
    axios
      .post(process.env.REACT_APP_BACKEND_HOSTING + "/orders", formData, {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        setTotalItem(totalItem + 1);
        // fetchOrderLines();
      });
  };

  const fetchNewProducts = async () => {
    axios
      .get(process.env.REACT_APP_BACKEND_HOSTING + "/products", {
        withCredentials: true,
      })
      .then((res) => {
        setNewProducts(res.data["products"]);
        if (res.data["user"] != null) {
          setUser(res.data["user"]);
          fetchOrderLines();
        }
      });
  };

  const fetchOrderLines = async () => {
    axios
      .get(process.env.REACT_APP_BACKEND_HOSTING + "/orders", {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        setOrder(res.data["order"]);
        setTotalItem(res.data["order"]["total_item"]);
      });
  };

  useEffect(() => {
    fetchNewProducts();
    // fetchOrderLines();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <div>
      <div>
        {newProducts.length == 0 ? (
          <>
            <div class="flex flex-col h-screen justify-between">
              <Router>
                <div style={{ display: "flex" }}>
                  <Switch>
                    <Route exact path="/">
                      <CssBaseline />
                      <Navbar
                        totalItems={totalItem}
                        handleDrawerToggle={handleDrawerToggle}
                        user={user}
                      />
                      <Products
                        products={newProducts}
                        featureProducts={featureProducts}
                        onAddToCart={handleAddToCart}
                        handleUpdateCartQty
                      />
                    </Route>
                    <Route path="/product-view/:id" exact>
                      <CssBaseline />
                      <Navbar
                        totalItems={totalItem}
                        handleDrawerToggle={handleDrawerToggle}
                      />
                      <ProductView />
                    </Route>
                    <Route path="/create-product" exact>
                      <CreateProduct />
                    </Route>
                    <Route path="/update-product/:id" exact>
                      <UpdateProduct />
                    </Route>
                    <Route path="/auth/register" exact>
                      <CssBaseline />
                      <Navbar
                        totalItems={totalItem}
                        handleDrawerToggle={handleDrawerToggle}
                        hide={true}
                      />
                      <Register />
                    </Route>
                    <Route path="/auth/signin" exact>
                      <CssBaseline />
                      <Navbar
                        totalItems={totalItem}
                        handleDrawerToggle={handleDrawerToggle}
                        hide={true}
                      />
                      <SignIn />
                    </Route>
                    <Route path="/cart" exact>
                      <CssBaseline />
                      <Navbar
                        totalItems={totalItem}
                        setTotalItem={setTotalItem}
                        handleDrawerToggle={handleDrawerToggle}
                        hide={true}
                      />
                      <Cart
                        order={order}
                        totalItem={totalItem}
                        setTotalItem={setTotalItem}
                        onUpdateCartQty={() => {}}
                        onRemoveFromCart={() => {}}
                        onEmptyCart={() => {}}
                      />
                    </Route>
                    <Route path="/checkout" exact>
                      <Checkout
                        order={order}
                        user={user}
                        error={errorMessage}
                      />
                    </Route>
                    <Route path="/info/:id" exact>
                      <Navbar
                        totalItems={totalItem}
                        handleDrawerToggle={handleDrawerToggle}
                        hide={true}
                      />
                      <Banking user={user} />
                    </Route>
                    <Route path="/about" exact>
                      <CssBaseline />
                      <Navbar
                        totalItems={totalItem}
                        setTotalItem={setTotalItem}
                        handleDrawerToggle={handleDrawerToggle}
                        hide={true}
                      />
                      <About />
                    </Route>
                    <Route path="/term" exact>
                      <CssBaseline />
                      <Navbar
                        totalItems={totalItem}
                        setTotalItem={setTotalItem}
                        handleDrawerToggle={handleDrawerToggle}
                        hide={true}
                      />
                      <Term />
                    </Route>
                  </Switch>
                </div>
              </Router>
              <Footer />
            </div>
          </>
        ) : (
          <div className="loader">
            <img src={loadingImg} alt="Loading" />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
