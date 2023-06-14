import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useClasses from "../../../Hooks/useClasses";

const CheckOut = ({ price, course }) => {
  const navigate = useNavigate();
  const [,refetch] = useClasses();
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [tranID, setTranId] = useState("");
  const { name, image, courseId,id} = course;
  
  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("card errror", error);
      setCardError(error.message);
    } else {
      setCardError(" ");
      console.log("card pay method", paymentMethod);
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.name || "anynymous",
            email: user?.email || "no email",
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError);
    }
    const currentData = new Date();
    console.log(currentData);
    console.log(paymentIntent);
    if (paymentIntent.status === "succeeded") {
      setProcessing(false);
      setTranId(paymentIntent.id);
      //save payment in database
      const saveclass = {
        paymentId: paymentIntent.id,
        email: user?.email,
        name: name,
        price: price,
        image: image,
        id: courseId,
      }
      
      axiosSecure.post("/payment", saveclass).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
            axiosSecure.patch(`/classes/enrollment/${courseId}`,)
              .then((res) => {
              console.log(res.data);
              if(res.data.modifiedCount > 0){
                axiosSecure.delete(`/carts/${id}`)
                .then(res => {
                  console.log(res.data);
                  if(res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire("Payment", "Your Payment complete successfully.", "success");
                    navigate('/');
                  }
                })
              }
            });
        }
      });
    }
  };

  return (
    <>
      <form className="w-3/6 mx-auto" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-outline btn-primary btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-error mt-3">{cardError}</p>}
      {tranID && (
        <p className="text-success">
          Payment complete with this transaction id :{tranID}
        </p>
      )}
    </>
  );
};

export default CheckOut;
