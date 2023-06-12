import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SocialSignIn = () => {
    const {googleSignIn} = useContext(AuthContext);

    const handleGoogle = () => {
      googleSignIn()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch(error =>{
        console.log(error);
      })
    }
  return (
    <div>
      <div className="divider w-11/12 mx-auto">OR</div>
      <div className="text-center mb-5">
        <button
          onClick={handleGoogle}
          className="btn btn-outline btn-circle text-lg"
        >
          G
        </button>
      </div>
    </div>
  );
};

export default SocialSignIn;
