import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router"; // ✅ fixed import
import Swal from "sweetalert2";
import Modal from "../../ShearComponents/Modal";

const ShowMyArticles = ({ myArticles }) => {
  const [showModal, setShowmodal] = useState(false);
  const closeModal = () => setShowmodal(false);
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://know-net-server.vercel.app/articles/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your article has been deleted.",
              data,
              icon: "success",
            });
            window.location.reload();
          }, 700);
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {myArticles?.map((data, index) => (
            <tr key={data._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={data.author_photo}
                        alt={`${data.author_name}'s avatar`}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{data.author_name}</div>
                    <div className="text-sm opacity-50">{data.category}</div>
                  </div>
                </div>
              </td>
              <td>{data.title}</td>
              <td className="flex items-center gap-4">
                <button
                  className="btn btn-ghost btn-lg"
                  onClick={() => handleDelete(data._id)}
                >
                  <MdDelete className="w-5 h-5 text-red-500" />
                </button>
                <button onClick={() => setShowmodal(true)} state={data} className="btn btn-ghost btn-lg">
                  <FaEdit
                    
                    className="w-5 h-5 text-blue-500"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default ShowMyArticles;
