import React from 'react';
import './SingleAppliedProgram.css';

const SingleAppliedProgram = ({applied}) => {
    return (
      <> 
        {
          <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Program</th>
            <th>Pay with</th>
          </tr>
          {
            applied.length === 0 && <h4 className="text-center text-primary ms-5 ps-5 mt-5"> You are No Apply yet </h4>
          }
          {applied.map((apply) => (
            <tr>
              <td>{apply.userProgram.name}</td>
              <td>{apply.userProgram.email}</td>
              <td>{apply.userProgram.program}</td>
              <td>Credit card</td>
            </tr>
          ))}
        </table>
        }
      </>
        
    );
};

export default SingleAppliedProgram;