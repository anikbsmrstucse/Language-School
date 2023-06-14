import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useUser from "../../../Hooks/useUser";

const AllUser = () => {
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
  const [users, refetch] = useUser();
  const updateRole = (suser) => {
    console.log(suser);
    fetch(`https://language-school-assignment-12-server-anikbsmrstucse.vercel.app/users/admin/${suser._id}`, {
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
  const makeInstructor = (suser) => {
    axiosSecure.patch(`/users/teacher/${suser._id}`)
      .then((data) => {
        if (data.data.modifiedCount > 0) {
          refetch();
          Swal.fire("Updated!", "Your user is now instructor.", "success");
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>All User</title>
      </Helmet>
      <div className="flex">
        <h1 className="text-xl md:text-3xl font-bold pb-10 flex-grow">
          All Classes
        </h1>
        <h1 className="text-xl md:text-3xl font-bold pb-10">
          Welcome {user.displayName}
        </h1>
      </div>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
