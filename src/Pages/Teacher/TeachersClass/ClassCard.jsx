import { FaCheck, FaClock, FaPen, FaTimesCircle, FaUserTie } from "react-icons/fa";

const ClassCard = ({ sclass }) => {
  const {
    image,
    name,
    enrollment,
    instructor,
    available_seats,
    price,
    total_seats,
    status,
    _id,
    email,
    feedback,
  } = sclass;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img className="h-[250px] w-full" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
            <div className="space-y-3">
              <p className="font-bold flex items-center mb-2">
                <FaUserTie className="w-[20px] h-[20px] text-green-500"></FaUserTie>{" "}
                <span className="ml-2 -mb-1">{instructor}</span>
              </p>
              <div className="flex gap-2 items-center">
                <span>
                  {status === "pending" ? (
                    <FaClock className="w-[20px] h-[20px] text-yellow-500"></FaClock>
                  ) : (
                    ""
                  )}
                </span>
                <span className="-ml-2">
                  {status === "approved" ? (
                    <FaCheck className="w-[20px] h-[20px] text-green-500"></FaCheck>
                  ) : (
                    ""
                  )}
                </span>
                <span className="">
                  {status === "denied" ? (
                    <FaTimesCircle className="w-[20px] h-[20px] text-red-500 -ml-2"></FaTimesCircle>
                  ) : (
                    ""
                  )}
                </span>{" "}
                <p className="capitalize">{status}</p>
                
              </div>
              <p>{feedback ? {feedback} : 'No FeedBack Yet'}</p>
            </div>
            <div className="text-right pb-5 space-y-3">
              <p>{email ? email : "No mail"}</p>
              <p>Available Seat: {available_seats}</p>
              <p>Total Enrollment: {enrollment}</p>
            </div>
          </div>
          <div className="text-center mb-2 text-white ">
            <span className="bg-primary px-5 py-2 rounded-lg">
              Price: ${price}
            </span>
          </div>
          <div className="text-center mt-2">
            <button className="btn btn-outline btn-wide"> <FaPen></FaPen> Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
