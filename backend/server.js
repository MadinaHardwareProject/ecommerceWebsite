import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import stripePackage from 'stripe';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

const stripe = stripePackage(process.env.STRIPE_SECRET_KEY);

app.get('/', (req, res) => res.send('API Running...'));

app.post('/api/payment', async (req, res) => {
  const { amount, token } = req.body;
  try {
    const charge = await stripe.charges.create({
      amount,
      currency: 'inr',
      source: token.id,
    });
    res.json(charge);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/api/checkout", async (req, res) => {
  const { cartItems } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: cartItems.map((item) => ({
        price_data: {
          currency: "inr",
          product_data: { name: item.name },
          unit_amount: item.price * 100,
        },
        quantity: item.qty,
      })),
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).send(error);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
