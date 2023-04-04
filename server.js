const mongoose = require("mongoose");

const app = require("./app");
//Wt9utGe40IaFOtER

const DB_HOST =
  "mongodb+srv://Mariia:Wt9utGe40IaFOtER@cluster0.l3t55no.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((error) => console.log(error.message));

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000");
// });
