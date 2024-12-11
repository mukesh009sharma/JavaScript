import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import router from "./routes/admin.route.js"; 
import productRouter from "./routes/product.route.js";
import categoryRouter from "./routes/category.route.js";
import db from "./db/dbConfig.js"; 
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.set("view engine", "ejs");

// Set up session middleware
app.use(
  session({
    secret: "ajumiksrdefrtyhju", // Replace with a strong secret
    resave: false,
    saveUninitialized: true,
  })
);


app.use("/admin", router);
app.use("/product", productRouter);
app.use("/category", categoryRouter);


db.sequelize.sync()
  .then(() => {
    console.log("Database synced successfully.");
  })
  .catch(err => {
    console.error("Error syncing database:", err);
  });

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
