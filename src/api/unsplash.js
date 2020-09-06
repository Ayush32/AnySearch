/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID lxeutHZ5RXSUGdR_ESxpufyeBxKNz0t2rUFg5OGJOJg",
  },
});
