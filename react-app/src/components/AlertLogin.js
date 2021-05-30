// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { AiFillCloseCircle } from "react-icons/ai";

// function AlertLogin() {
//   const message = useSelector((state) => state.signin.message);
//   const code = useSelector((state) => state.signin.code);
//   const error = useSelector((state) => state.signin.error);
//   const loading = useSelector((state) => state.signin.loading);
//   const logged = useSelector((state) => state.signin.logged);
//   console.log("flag");

//   const [hidden, setHidden] = useState(true);

//   useEffect(() => {
//     if (!loading && message !== "" && code !== 0) {
//       setHidden(false);
//     } else {
//       setHidden(true);
//     }
//   }, [code, loading, message]);

//   let testCodeSucces = [200, 201, 202].includes(code);

//   return (
//     <div className="w-full fixed bottom-5">
//       <div
//         className={`border ${
//           testCodeSucces
//             ? "bg-green-100 border-green-400 text-green-700"
//             : "bg-red-100 border-red-400 text-red-700"
//         } border px-4 py-3 rounded relative flex gap-2 ${
//           hidden ? "hidden" : ""
//         }`}
//         role="alert"
//       >
//         <strong className="font-bold">
//           {testCodeSucces ? "Success" : "Error"}
//         </strong>
//         <span className="block sm:inline">
//           {testCodeSucces ? message : error}
//         </span>
//         <span
//           className="absolute top-0 bottom-0 right-0 px-4 py-3 text-2xl"
//           onClick={() => setHidden(true)}
//         >
//           <AiFillCloseCircle />
//         </span>
//       </div>
//     </div>
//   );
// }

// export default AlertLogin;
