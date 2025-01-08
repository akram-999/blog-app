const express = require("express");
const app = express();
const multer = require('multer');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require("./routes/auth");
// const postRoute = require("./routes/posts");
// const categoryRoute = require("./routes/categories");
const port = process.env.PORT || 5000;

dotenv.config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to Mongoose'))
.catch((error) => console.error('Error:', error));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use("/api/auth", authRoute);
