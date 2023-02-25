// import axios from "axios";
// import React, { useEffect, useState } from "react";

// export const AdminPage = () => {
//   const [users, setUsers] = useState<any[]>([])

//   useEffect(() => {
//     loadUsers();
//   }, []);

//   const loadUsers = async () =>{
//     try{
//       const result = await axios.get("http://localhost:8080/user/get");
//       setUsers(result.data);
//     } catch (error) {
//       console.error(error);
//     }}
//   return (
//     <div className="container">
//       <div className="py-4">
//         <table className="table border shadow">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">First</th>
//               <th scope="col">Last</th>
//               <th scope="col">Email</th>
//               <th scope="col">Action</th>

//             </tr>
//           </thead>
//           <tbody>
//             {
//               users.map((user,index)=>(
//                 <tr>
//                   <th scope="row"key={index}>{index+1}</th>
//                   <td>{user.name}</td>
//                   <td>{user.surname}</td>
//                   <td>{user.email}</td>
//                 </tr>
//               ))
//             }
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };
// export default AdminPage;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Link } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { id } from "date-fns/locale";

const AdminPage=()=> {
  const [barbers, setBarbers] = useState<Barber[]>([]);
  const navigate = useNavigate();

  const { id } = useParams();
  interface Barber{
    id:number;
    name:string;
    surname:string;
    gender:string;
  }
  useEffect(() => {
    axios.get("http://localhost:8080/barber/get")
      .then(response => setBarbers(response.data))
      .catch(error => console.log(error));
  }, []);
  const handleDelete = (id: number) => {
    axios.delete(`http://localhost:8080/barber/delete/${id}`)
      .then(() => setBarbers(barbers.filter(barber => barber.id !== id)))
      .catch(error => console.log(error));
  };
  


  return (
    <TableContainer component={Paper} sx={{width:"75%",margin:"auto"}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Imię</TableCell>
            <TableCell>Nazwisko</TableCell>
            <TableCell>Płeć</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {barbers.map(barber => (
            <TableRow key={barber.id}>
              <TableCell>{barber.name}</TableCell>
              <TableCell>{barber.surname}</TableCell>
              <TableCell>{barber.gender}</TableCell>
              <TableCell>
                <IconButton aria-label="delete" onClick={() => handleDelete(barber.id)}>
                  <DeleteIcon />
                </IconButton>
                <IconButton aria-label="edit" onClick={() => navigate(`/EditPage/${barber.id}`)}>
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AdminPage;