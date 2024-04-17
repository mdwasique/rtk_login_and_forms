import mongoose from "mongoose";

export const connectDb = () =>
  mongoose
    .connect("mongodb://localhost:27017", {
      dbName: "Ecommerce_24",
    })
    .then((c) =>
      console.log(`connected to the database to ${c.connection.host}`)
    )
    .catch((err) => console.error(err));
