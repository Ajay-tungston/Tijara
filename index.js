require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cookieParser=require("cookie-parser")
const connectDb = require("./config/connectDb");
const cors=require("cors")
const corsOptions = require("./config/corsOptions");
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use("/welcome", (req, res) => {
  return res.send("Hello from express");
});

app.use("/admin/auth", require("./routes/admin/authRoutes"));
app.use("/buyer", require("./routes/buyer/buyerRoutes"));

const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

connectDb()
    .then(()=>{
      app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
      })
    }).catch((error)=>{
      console.log("failed to connect to Mongoose",error.message);
      process.exit(1)
    })