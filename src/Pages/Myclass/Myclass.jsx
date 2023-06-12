import React from "react";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";


const Myclass = () => {
    const [classes,refetch] = useCart();
    console.log(classes);
    const handleDelete =(item) =>{
        console.log(item);
        const {name} = item;
        Swal.fire({
            title: 'Are you sure?',
            text: `You wanna delete this!${name} item`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`,{
                    method:"DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                })
    
    
            }
          })
      }
  return (
    <div>
      <h1 className="text-xl md:text-3xl font-bold pb-10">My Class</h1>
      <div className="overflow-x-auto">
        <table className="table md:w-full px-0 mx-0">
          {/* head */}
          <thead>
            <tr className="bg-slate-300">
              <th>Index</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Pay</th>
              <th>Delete Class</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                classes.map((sclass,index) =>  <tr>
                <th>{index + 1}</th>
                <td>
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={sclass.image}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </td>
                <td>
                  {sclass.name}
                </td>
                <td>{sclass.price}</td>
                <th>
                  <button className="btn btn-outline btn-error btn-sm">Pay</button>
                </th>
                <td>
                  <button onClick={()=>handleDelete(sclass)} className="btn btn-outline btn-error btn-sm"><FaTrash></FaTrash></button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myclass;
