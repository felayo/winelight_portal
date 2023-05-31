const express = require('express');
const mongoose = require("mongoose");

const fs = require('fs');
// const path = require('path');

const UPLOADS_DIR = '../uploads';

// create the uploads directory if it doesn't exist
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR);
}

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
