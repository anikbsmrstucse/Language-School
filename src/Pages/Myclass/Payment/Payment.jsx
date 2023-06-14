import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import CheckOut from "./CheckOut";

const Payment = () => {

    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Key);
    const location = useLocation();
    const {price,name,image,courseId,id} = location.state;
    const newprice = parseFloat(price.toFixed(2));
    const course = {
      name,
      image,
      courseId,
      id
    }
    console.log('id',id);
    console.log('new price',newprice,);
  return (
    <div>
      <Helmet>
        <title>Payment</title>
      </Helmet>
      <h1 className="text-xl md:text-3xl font-bold pb-10">Make Payment</h1>

    <Elements stripe={stripePromise}>
        <CheckOut price={newprice} course={course}></CheckOut>
    </Elements>

    </div>
  );
};

export default Payment;
