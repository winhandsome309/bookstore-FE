import { FormLabel, Input, Textarea } from "@chakra-ui/react";
import { Container } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import "./style.css";

const createProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createProduct = async (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => formData.append(key, data[key]));
    axios.post("http://localhost:8080/products", formData).then((res) => {
      if (res.status === 200) {
        swal({
          text: "Created successfully",
          icon: "success",
        });
      } else {
        swal({
          text: "Created fail",
          icon: "error",
        });
      }
    });
  };

  const onSubmit = async (data) => {
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
  };

  return (
    <Container className="create-product">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <div>
          <FormLabel>Id:</FormLabel>
          <Input name="id" type="text" ref={register} width={"50vh"} />
        </div> */}
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
            ref={register}
            min={0}
            width={"50vh"}
          />
        </div>
        <div>
          <FormLabel>Quantity: </FormLabel>
          <Input
            type="number"
            name="quantity"
            ref={register}
            min={0}
            width={"50vh"}
          />
        </div>
        <div>
          <FormLabel>Language: </FormLabel>
          <select name="language" ref={register} width={"50vh"}>
            <option value=""></option>
            <option value="0">Vietnamese</option>
            <option value="1">American</option>
          </select>
        </div>
        <Input type="file" name="source" ref={register} width={"50vh"} />
        <button className="btn">Create</button>
      </form>
    </Container>
  );
};

export default createProduct;
