const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51IlBTzSJ4FpQdQxNx2B97LjWsW5pYy6E5yJyv19WWJVDdCokJAkcRQKngQAuiG5GMhV0LVuYVdFDs9nxECubIXR100l2NC9B4Z"
);


// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true })); //for security
app.use(express.json()); //send and pass data in json format

// - API routes
app.get("/", (request, response) => response.status(200).send("This is amazon clone"));

app.get("/amazon", (request, response) => response.status(200).send("Wow! Loved this clone"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 100, //total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-4277b/us-central1/api
