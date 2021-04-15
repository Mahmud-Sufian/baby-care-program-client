import axios from 'axios';
import React from 'react'; 
import { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
 

const AddPrograms = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { register, handleSubmit, errors } = useForm(); 
    const [success, setSuccess] = useState(false);
    const [imageURL, setIMageURL] = useState(null);
  


    const onSubmit = data => { 
        const programData = {
          name:loggedInUser.name,
          email:loggedInUser.email,
          program:data.program, 
          price: data.price,
          imageURL: imageURL, 
          date:new Date()
        };
        
        const url = `https://secure-refuge-75906.herokuapp.com/addAProgram`;
        
        fetch(url, {
          method: 'POST', 
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(programData)
        })
        .then(res => res.json())
        .then(data => {
          if(data){
            setSuccess(true);
          }
        })
      };


    const handleImageUpload = event => {
        // console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '20ee534ec022d950affa1ad4da921bd9');
        imageData.append('image', event.target.files[0]);
       
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
        .then(function (response) {
          setIMageURL(response.data.data.display_url);
          // console.log(99, response)
        })
        .catch(function (error) {
          console.log(error);
        });
    
      }


    return (
        <section>
            <div className="row">
                <div className="col-md-2">
                     <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h1 className="text-center middle">Add Your Program</h1>  
                <form onSubmit={handleSubmit(onSubmit)} className="myForm"> 
                <input name="program" className="form-control" defaultValue="" placeholder="Program Name" ref={register} required/>
                <br/> 
                <input name="price" className="form-control" defaultValue="" placeholder="Price" ref={register} required/>
                <br/>
                <input name="exampleRequired" className="form-control" type="file" onChange={handleImageUpload} required/>
                <br/>
                <input type="submit" className="form-control" />
                {
                  success && <p style={{textAlign:'center', color:'green', marginTop:'3px'}}>Upload Successfully</p>
                }
              </form>
            </div>
            </div>
        </section>
    );
};

export default AddPrograms;