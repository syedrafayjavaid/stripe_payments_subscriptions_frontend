import React, { useState } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import Button from '@mui/material/Button';
import axios from 'axios';

const PaymentCheckout = () => {

    const [product, setProduct] = useState({
        name: "A single subscription",
        price: 100,
        productBy: "Syed Rafay Javaid Ali"
    })
    const makePayment = token => {
        const body = {
            token, product
        }
        // Making the Api call
        axios.post("http://localhost:3001/subscription", body)
            .then(response => {
                console.log("The respose from api is ", response)
            })
            .catch(err => {
                console.log("The error occured possible cause :", err);
            })

    }
    console.log("The key has,", process.env.REACT_APP_STRIPE_PUBLISTABLE_KEY);

    return (
        <div style={{ minHeight: "350px", backgroundColor: "#C0392B", width: "350px", margin: "50px auto", borderRadius: "10px" }}>
            <br></br>

            <h1 style={{ textAlign: "center" }}>
                Buy A subscription
            </h1>
            <h2 style={{ textAlign: "center" }}>
                Only 100$ / month
            </h2>
            <h2 style={{ textAlign: "center" }}>
                Premium Plan
            </h2>
            <h3 style={{ textAlign: "center" }}>
                Limited time offer
            </h3>

            <div style={{ marginLeft: "110px " }}>
                <StripeCheckout

                    stripeKey="pk_test_51MGcB9KTpObysRszdS2o6s0MCsHeYQx5G9m6DATccx0opJCXorzaUKDh8EKSmpi8nakMGJPIeg0gjVdGlll14WJQ00mx0Dlr2D"
                    token={makePayment}
                    name="Buy Subscription"

                >
                    <Button variant='contained'> Subscribe</Button>
                </StripeCheckout>
            </div>

        </div>

    )
}

export default PaymentCheckout