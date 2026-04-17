// import "./App.css";
// import { useForm } from "react-hook-form";

// function App() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   function onsubmit(data) {
//     console.log(data);
//   }
//   return (
//     <div className="container">
//       <div className="form-container">
//         <form onSubmit={handleSubmit(onsubmit)}>
//           <h2>Personal Information</h2>
//           <input
//             type="text"
//             placeholder="Enter Name"
//             {...register("firstName", {
//               required: true,
//               maxLength: { value: 20, message: "Max Length atleast 20" },
//             })}
//           />
//           {errors.firstName && <p>{errors.firstName.message}</p>}
//           <input
//             type="text"
//             placeholder="Enter Address"
//             {...register("address", {
//               required: true,
//               maxLength: { value: 8, message: "Max Length atleast 20" },
//             })}
//           />
//           {errors.address && <p>{errors.address.message}</p>}
//           <button type="text">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }
// export default App;
// ==================================================================
// import React from "react";
// import { useForm } from "react-hook-form";
// const App = () => {
//   const { register, handleSubmit } = useForm();
//   function onformsubmit(data) {
//     console.log("Data from From Form Submit");
//     console.log(data);
//     console.log("Firstname : ",data.firstname)
//     console.log("lastname : ",data.lastname)
//     console.log("gender : ",data.gender)
//   }
//   return (
//     <form action="#" onSubmit={handleSubmit(onformsubmit)}>
//       <input placeholder="FirstName" type="text" {...register("firstname")} />
//       <br />
//       <br />

//       <input placeholder="Lastname" type="text" {...register("lastname")} />
//       <br />
//       <br />
//       <select {...register("gender")}>
//         <option >Select Gender</option>
//         <option value="female">female</option>
//         <option value="male">male</option>
//         <option value="other">other</option>
//       </select>
//       <br />
//       <br />
//       <input type="submit" />
//     </form>
//   );
// };
// export default App;
// ==================================================================
import React from 'react';
import { useForm } from 'react-hook-form';
const App = () => {
  const { register, handleSubmit } = useForm();

  function onformsubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onformsubmit)}>
      <input {...register("firstname",{required:true,maxLength:10})} type="text" placeholder='FirstName'/>
      <br /><br />
      <input {...register("lastname", { required: true,maxLength:5 })} type="text" placeholder='LastName' />
      <br /><br />
      <input {...register("address", { required: true,pattern:/^[A-Za-z]+$/i })} type="text" placeholder='Address' />
      <br /><br />
      <input {...register("number", { required: true,min:18,max:50 })} type="number" placeholder='number' />
      <br /><br />
      <input type="submit" />
    </form>
  )
}
export default App;
