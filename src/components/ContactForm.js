import React, { useEffect, useState } from "react";


const ContactForm = (props) =>
{
                                    const initialFieldValues={
                                fullName:'',
                                mobile :'',
                                email:'',
                                address:''


    }


    var[values,setValues]=useState(initialFieldValues);
    useEffect(()=>{
        if(props.currentId=="")
        setValues({
            ...initialFieldValues
        })
        else
        setValues({
            ...props.contactObjects[props.currentId]
        })
    },[props.currentId, props.contactObjects])
    const handleInputChange = e =>{
        var{name,value} = e.target
        setValues({
            ...values,
           [name]:value
        })
    }
    
 const handleFormSubmit=e=>{
    e.preventDefault();
  props.addOrEdit(values)
 }




    return ( 
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="form-group  input-group" >
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Full Name" name="fullName" value={values.fullName} max="50" pattern="[A-Za-z]{3,}" tittle="Name should contain atleast three letter" required
                onChange={handleInputChange}/>
            </div>
            <div className="form-row">
            <div className="form-group  input-group col-md-6" >
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-mobilr-alt"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Mobile" name="mobile" value={values.mobile} pattern="[7-9]{1}[0-9]{9}" required
                 onChange={handleInputChange}/>
            </div>
            <div className="form-group  input-group col-md-6" >
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-envelope"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Email" name="email" value={values.email}  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" tittle="Please enter a valid email" 
                required
                 onChange={handleInputChange}/>
            </div>
           
            </div>
            <div className="form-group">
                <textarea className="form-control"placeholder="Address" name="address" value={values.address} onChange={handleInputChange} required/>
            </div>
            <div className="form-group">
                <input type="submit" value={props.currentId== '' ? 'Save':'Update'} className="btn btn-primary btn-block"/>

            </div>
        </form>
     );
}

export default ContactForm;