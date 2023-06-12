import React from "react";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useUser from "../../../Hooks/useUser";

const AllUser = () => {
  const [users, refetch] = useUser();
  console.log(users);
  const updateRole = (suser) => {
    console.log(suser);
    fetch(`http://localhost:5000/users/admin/${suser._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire("Updated!", "Your user role is updated.", "success");
        }
      });
  };
  const makeInstructor = (suser) =>{
    fetch(`http://localhost:5000/users/teacher/${suser._id}`, {
        method: "PATCH",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            refetch();
            Swal.fire("Updated!", "Your user is now instructor.", "success");
          }
        });
  }
  return (
    <div>
      <h1 className="text-xl md:text-3xl font-bold pb-10">All Users</h1>
      <div className="overflow-x-auto">
        <table className="table md:w-full px-0 mx-0">
          {/* head */}
          <thead>
            <tr className="bg-slate-300">
              <th>Index</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Make Admin</th>
              <th>Make Instructor</th>
              <th>Delete Class</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((suser, index) => (
              <tr key={suser._id}>
                <th>{index + 1}</th>
                <td>{suser.name}</td>
                <td>{suser.email}</td>
                <td>
                  {suser.role === "admin" ? (
                    <>Admin</>
                  ) : (
                    <>
                      <button
                        className="btn btn-outline btn-error btn-xs"
                        onClick={() => updateRole(suser)}
                      >
                        Make Admin
                      </button>
                    </>
                  )}
                </td>
                <td>
                  {suser.role === true ? (
                    <>Instructor</>
                  ) : (
                    <>
                      <button
                        className="btn btn-outline btn-error btn-xs"
                        onClick={() => makeInstructor(suser)}
                      >
                        Make Instructor
                      </button>
                    </>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(suser)}
                    className="btn btn-outline btn-error btn-sm"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
