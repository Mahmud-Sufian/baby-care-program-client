import React from "react";
import "./OrderTable.css";
import DeleteIcon from '@material-ui/icons/Delete';

const OrderTable = ({ order }) => { 

  const handleDelete = (id) => { 
     fetch(`https://secure-refuge-75906.herokuapp.com/delete/${id}`,{
       method:'DELETE'
     })
     .then(res => res.json())
     .then(data => {
       if(data){ 
        alert('Order Deleted Successfully')
       }
     })
  }

  return (
    <div>
      <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Program</th>
        <th>Pay with</th>
        <th>Delete</th>
      </tr>
      {order.map((ord) => (
        <tr>
          <td>{ord.userProgram.name}</td>
          <td>{ord.userProgram.email}</td>
          <td>{ord.userProgram.program}</td>
          <td>Credit card</td>
          <td onClick={() =>handleDelete(ord._id)} className="text-danger"><DeleteIcon /></td>
        </tr>
      ))} 
    </table>
    
    </div>
  );
};

export default OrderTable;
