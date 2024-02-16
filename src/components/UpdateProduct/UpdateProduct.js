import { FormLabel, Input, Textarea } from "@chakra-ui/react";
import { Container } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import "./style.css";

const UpdateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const para = window.location.pathname.split("/");

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const createProduct = async (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => formData.append(key, data[key]));
    axios
      .patch(
        "http://localhost:8080/products/" + para[para.length - 1],
        formData
      )
      .then((res) => {
        if (res.status === 200) {
          swal({
            text: "Updated successfully",
            icon: "success",
          });
        } else {
          swal({
            text: "Updated fail",
            icon: "error",
          });
        }
      });
  };

  const onSubmit = async (data) => {
    if (data.source[0] === undefined) {
      delete data.source;
      Object.keys(data).forEach((key) => {
        if (!data[key]) {
          delete data[key];
        }
      });
      createProduct(data);
    } else {
      const formData = new FormData();
      formData.append("source", data.source[0]);
      formData.append("type", "file");
      formData.append("action", "upload");
      formData.append("auth_token", "9846f34fbc5b52c7640c9e8c623aa3a5a29ccf7b");
      axios
        .post("https://nguyen-xuan-than.imgbb.com/json", formData)
        .then((response) => {
          delete data["source"];
          data["img_url"] = response.data.image.url;
          createProduct(data);
        });
    }
  };

  return (
    <>
      <Container className="update-product">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <FormLabel>Title: </FormLabel>
            <Input name="title" type="text" ref={register} width={"50vh"} />
          </div>
          <div>
            <FormLabel>Description: </FormLabel>
            <Textarea
              type="text"
              name="description"
              ref={register}
              minHeight={"20vh"}
              width={"50vh"}
            />
          </div>
          <div>
            <FormLabel>Price: </FormLabel>
            <Input
              type="number"
              name="price"
              ref={(register, { valueAsNumber: true })}
              min={0}
              width={"50vh"}
            />
          </div>
          <div>
            <FormLabel>Quantity: </FormLabel>
            <Input
              type="number"
              name="quantity"
              ref={(register, { valueAsNumber: true })}
              min={0}
              width={"50vh"}
            />
          </div>
          <Input type="file" name="source" ref={register} width={"50vh"} />
          <button className="btn">Update</button>
        </form>
      </Container>
    </>
  );
};

export default UpdateProduct;
