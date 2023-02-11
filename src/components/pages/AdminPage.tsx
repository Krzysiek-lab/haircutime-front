import axios from "axios";
import React, { useEffect, useState } from "react";

export const HomePage = () => {
  const [users, setUsers] = useState<any[]>([])

  // useEffect(() => {
  //   loadUsers();
  // }, []);

  // const loadUsers = async () => {
  //   try{
  //     const result = await axios.get("http://localhost:8080/user/all");
  //     setUsers(result.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
    
    
  

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>

            </tr>
          </thead>
          {/* <tbody>
            {
              // users.map((user,index)=>(
              //   <tr>
              //     <th scope="row"key={index}>{index+1}</th>
              //     <td>{user.name}</td>
              //     <td>{user.surname}</td>
              //     <td>{user.email}</td>
              //   </tr>
              ))
            }
          </tbody> */}
        </table>
      </div>
    </div>
  );
};
export default HomePage;