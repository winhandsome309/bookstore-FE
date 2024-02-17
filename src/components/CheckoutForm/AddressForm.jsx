import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { commerce } from '../../lib/commerce';
import FormInput from './CustomTextField';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from "axios";

const AddressForm = ({ test }) => {
  const [shippingProvinces, setShippingProvinces] = useState([]);
  const [shippingDistricts, setShippingDistricts] = useState([]);
  const [shippingWards, setShippingWards] = useState([]);

  const [shippingProvinceSearch, setShippingProvinceSearch] = useState([]);
  const [shippingDistrictSearch, setShippingDistrictSearch] = useState([]);
  const [shippingWardSearch, setShippingWardSearch] = useState([]);
  var provinceSearch = []
  var districtSearch = []
  var wardSearch = []


  const [shippingProvince, setShippingProvince] = useState();
  const [shippingDistrict, setShippingDistrict] = useState();
  const [shippingWard, setShippingWard] = useState();

  const methods = useForm();

  const fetchShippingProvinces = async () => {
    axios
      .get("https://go-bookstore-opbz.onrender.com/location/provinces")
      .then((res) => {
        setShippingProvinces(res.data);
        res.data.forEach((item) => {
          provinceSearch.push({
            "label": item["name"],
            "code": item["code"],
          })
        })
        setShippingProvinceSearch(provinceSearch)
      });
  }

  const fetchShippingDistricts = async (provinceCode) => {
    axios
      .get(`https://go-bookstore-opbz.onrender.com/location/districts?provinceId=${provinceCode}`)
      .then((res) => {
        setShippingDistricts(res.data);
        res.data.forEach((item) => {
          districtSearch.push({
            "label": item["name"],
            "code": item["code"],
          })
        })
        setShippingDistrictSearch(districtSearch)
      });
  }

  const fetchShippingWards = async (districtCode) => {
    axios
      .get(`https://go-bookstore-opbz.onrender.com/location/wards?districtId=${districtCode}`)
      .then((res) => {
        setShippingWards(res.data);
        res.data.forEach((item) => {
          wardSearch.push({
            "label": item["name"],
            "code": item["code"],
          })
        })
        setShippingWardSearch(wardSearch)
      });
  }

  useEffect(() => {
    fetchShippingProvinces();
  }, []);

  useEffect(() => {
    setShippingDistrict(false);
    setShippingWard(false);
  }, [shippingProvince])

  useEffect(() => {
    setShippingWard(null);
    if (shippingProvince) fetchShippingDistricts(shippingProvince);
  }, [shippingProvince]);

  useEffect(() => {
    if (shippingDistrict) fetchShippingWards(shippingDistrict);
  }, [shippingDistrict]);

  return (
    <>
      <Typography variant="h6" gutterBottom>Shipping address</Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => test({ ...data, shippingProvince, shippingDistrict, shippingWard }))}>
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First name" />
            <FormInput required name="lastName" label="Last name" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="phone" label="Phone" />
            <Grid item xs={12} sm={12}>
              <FormInput required name="address" label="Address" size={12} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                value={shippingProvince}
                disablePortal
                selectOnFocus
                id="select-on-focus"
                options={shippingProvinceSearch}
                renderInput={(params) => <TextField {...params} label="Province *" variant='standard' />}
                onChange={(e, newValue) => {
                  if (newValue == null) {
                    setShippingProvince(null);
                  }
                  else {
                    setShippingProvince(newValue["code"]);
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                disabled={!shippingProvince}
                selectOnFocus
                id="select-on-focus"
                options={shippingDistrictSearch}
                renderInput={(params) => <TextField {...params} label="District *" variant='standard' />}
                onChange={(e, newValue) => {
                  if (newValue == null) {
                    setShippingDistrict(null);
                  }
                  else {
                    setShippingDistrict(newValue["code"]);
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <InputLabel>Ward *</InputLabel>
              <Select required value={shippingWard} fullWidth onChange={(e) => setShippingWard(e.target.value)} disabled={shippingDistrict === false}>
                {shippingWards.map((item) => (
                  <MenuItem key={item["code"]} value={item["code"]}>
                    {item["name"]}
                  </MenuItem>
                ))}
              </Select> */}
              <Autocomplete
                disabled={!shippingDistrict}
                selectOnFocus
                id="select-on-focus"
                options={shippingWardSearch}
                renderInput={(params) => <TextField {...params} label="Ward *" variant='standard' />}
                onChange={(e, newValue) => {
                  if (newValue == null) {
                    setShippingWard(null);
                  }
                  else {
                    setShippingWard(newValue["code"]);
                  }
                }}
              />
            </Grid>
          </Grid>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} variant="outlined" to="/cart">Back to Cart</Button>
            <Button type="submit" variant="contained" color="primary">Next</Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
