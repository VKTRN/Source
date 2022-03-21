import {Router} from "express"
import Stripe from "stripe"
import dotenv       from "dotenv"

dotenv.config()

const stripe = Stripe(process.env.STRIPE_SECRET)
const router = Router()

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        console.log(stripeErr)
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

export default router