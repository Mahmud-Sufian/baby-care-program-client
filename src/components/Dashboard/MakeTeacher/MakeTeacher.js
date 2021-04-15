import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const MakeTeacher = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { register, handleSubmit, errors } = useForm(); 
    const [success, setSuccess] = useState(false);
    const [imageURL, setIMageURL] = useState(null);
  


    const onSubmit = data => { 
        const teacherData = {
            teacher: data.name,
            email: data.email,  
            imageURL: imageURL, 
            date:new Date()
        };
        
        const url = `https://secure-refuge-75906.herokuapp.com/addATeacher`;
        
        fetch(url, {
          method: 'POST', 
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(teacherData)
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
                <h1 className="text-center middle">Make Teacher</h1>  
                <form onSubmit={handleSubmit(onSubmit)} className="myForm"> 
                <input name="name" className="form-control" defaultValue="" placeholder="Teacher Name" ref={register} required/>
                <br/> 
                <input name="email" className="form-control" defaultValue="" placeholder="Email" ref={register} required/>
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

export default MakeTeacher;