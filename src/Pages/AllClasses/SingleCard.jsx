import React from "react";

const SingleCard = ({course,refetch}) => {
  const { image, name, enrollment,instructor,available_seats,price,total_seats } = course;
  refetch();
  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img className="h-[250px] w-full" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Instructor Name: {instructor}</p>
          <p>Enrollment Student: {enrollment}</p>
          <p>Price: ${price}</p>
          <p>Available Seats: {available_seats}</p>
          <button className="btn btn-outline btn-primary">Select</button>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
