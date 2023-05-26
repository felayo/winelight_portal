const express = require('express');
const mongoose = require("mongoose");

const app = require("./app");

/* Loading the environment variables from the .env file. */
require("dotenv").config();

const port = process.env.PORT || 3001;

mongoose
  .connect(
    process.env.MONGO_URL,

    // dev only, to be removed
    () => {
      console.log(
        "Database connection successful \n "
      );
    }
  )
  .then(app.listen(port), console.log(`server running on port ${port}`))
  .catch((err) => console.log(err))
