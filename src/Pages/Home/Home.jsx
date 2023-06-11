import React from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="h-[100vh]">
        <Helmet>
            <title>Home</title>
        </Helmet>
      <h1>This is home pages</h1>
    </div>
  );
};

export default Home;
