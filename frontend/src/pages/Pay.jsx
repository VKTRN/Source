import StripeCheckout from "react-stripe-checkout"
import { useState, useEffect} from "react"
import { useHistory } from "react-router-dom";
import axios from "axios"

const KEY = "pk_test_51KaJQrIqnmXkbmU2wqUJlYYSXUVdldnClFCIzmkzBaptku7vwk0H2eAHVuuuJ5rO1gkkt0z3aZfRARa0IxCPSnXT001jev89U0"

const Pay = () => {

  const [stripeToken, setStripeToken] = useState(null)
  const history = useHistory()

  const onToken = (token) => {
    console.log(token);
    setStripeToken(token)
  }

  useEffect(() => {
    const makeRequest = async () => {
      try{
        const res = await axios.post("http://localhost:5000/api/checkout/payment",
        {
          tokenId: stripeToken.id,
          amount:2000
        })
        history.push("/success")
      }
      catch(err){
        console.log(err)
      }
    }

    stripeToken && makeRequest()
  }, [stripeToken, history])

  return (
    <>
      <div>Pay</div>
      <StripeCheckout 
        name="e-shop"
        billingAddress
        shippingAddress
        description="Your total is $20"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <button>Buy</button>
      </StripeCheckout>
    </>

  )
}

export default Pay