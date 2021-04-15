import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import './OurAllProgramList.css';

const OurAllProgramList = ({programs}) => {
   
    const handleDelete = (id) => { 
        fetch(`https://secure-refuge-75906.herokuapp.com/programDelete/${id}`,{
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
        <th>Program</th>
        <th>price</th>
        <th>Delete</th>
      </tr>
      {programs.map((program) => (
        <tr> 
          <td>{program.program}</td>
          <td>{program.price}</td> 
          <td onClick={() =>handleDelete(program._id)} className="text-danger"><DeleteIcon /></td>
        </tr>
      ))} 
    </table>
    
    </div>
    );
};

export default OurAllProgramList;