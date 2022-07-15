import { useState } from 'react';
import { forgotpasswordFields } from "../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";

const fields=forgotpasswordFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function ForgotPassword(){
  const [forgotPasswordState,setForgotPasswordState]=useState(fieldsState);

  const handleChange=(e)=>setForgotPasswordState({...forgotPasswordState,[e.target.id]:e.target.value});

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(forgotPasswordState)
    //forgotPass=()
  }

  //handle Forgot Password API Integration here
//   const forgotPass=()=>{

//   }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
        {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={forgotPasswordState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
          <FormAction handleSubmit={handleSubmit} text="Forgot Password" />
        </div>

         

      </form>
    )
}