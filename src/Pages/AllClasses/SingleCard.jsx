import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const SingleCard = ({course,refetch}) => {
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  const { image, name, enrollment,instructor,available_seats,price,total_seats,_id } = course;
  refetch();
  const handleCourse = (course) =>{
    // add item cart to data base
    if(user && user.email){
      const selectedCourse = {
        courseId : _id,
        name,
        image,
        price,
        email:user.email
      }
      console.log(selectedCourse);
      fetch(`http://localhost:5000/carts`,{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(selectedCourse)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.insertedId){
          refetch();
            Swal.fire({
              icon: "success",
              title: "Select Class sucessfully",
              showConfirmButton: false,
              timer: 1500,
            });
        }
      });
    }
    else{
      Swal.fire({
        title: 'Course Select to Cart',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login First'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login')
        }
      })
    }
  }
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
          <button onClick={()=>handleCourse(course)} className="btn btn-outline btn-primary">Select</button>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
