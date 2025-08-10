// import { use, useState } from "react";
// import { Link } from "react-router";
// import Swal from "sweetalert2";
// import AuthContext from "../FirebaseAuthentication/AuthContext";

// const UserAvatar = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const { handleSignOut, user, setUser } = use(AuthContext);
//   const handleLogOut = () => {
//     handleSignOut().then((result) => {
//       setUser(result);
//       localStorage.removeItem("accessToken")
//       Swal.fire({
//         position: "buttom",
//         icon: "success",
//         title: "You are successfully login",
//         showConfirmButton: false,
//         timer: 1500,
//       }).catch((error) => {
//         Swal.fire(error.message);
//       });
//     });
//   };
//   return (
//     <div className="relative inline-block text-left group">
//       {/* Avatar + Hover Tooltip */}
//       <div
//         className="avatar avatar-online cursor-pointer "
//         onClick={() => setShowDropdown((prev) => !prev)}
//       >
//         <div className="w-10 rounded-full">
//           <img
//             src={user.photoURL}
//             alt=""
//             className="border-2 border-green-400"
//           />
//           {/* Hover Username Tooltip */}
//           <div className="absolute w-[250px] top-full -left-12 right-50 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity bg-red-700 text-white text-sm px-3 py-1 rounded-md z-10 whitespace-nowrap">
//             {user.displayName}
//           </div>
//         </div>
//       </div>

//       {/* Dropdown Menu */}
//       {showDropdown && (
//         <div className="absolute right-0 mt-2 w-40  shadow-lg border rounded z-20">
//           <ul className="py-2">
//             <li>
//               <Link
//                 to="/myarticles"
//                 className="px-4 py-2 hover:bg-blue-300 cursor-pointer"
//               >
//                 My Artics
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/postarticle"
//                 className="px-4 py-2 hover:bg-blue-300 cursor-pointer"
//               >
//                 Post Article
//               </Link>
//             </li>
//             <li>
//               <Link
//                 onClick={handleLogOut}
//                 className="px-4 py-2 hover:bg-blue-300 cursor-pointer"
//               >
//                 Logout
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserAvatar;
