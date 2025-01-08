const express = require("express");
const app = express();
const multer = require('multer');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require("./routes/auth");
// const postRoute = require("./routes/posts");
// const categoryRoute = require("./routes/categories");
const userRoute = require("./routes/users");
const port = process.env.PORT || 5000;

dotenv.config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB Connection Error:', error));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
