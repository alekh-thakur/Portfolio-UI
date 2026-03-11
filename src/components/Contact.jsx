import axios from "axios";
import React, { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = ({ dark }) => {
  const [emailError, setEmailerror] = useState("");
  const [formdata, setFormData] = useState({
    name:"",
    email:"",
    message:""
  }) 
  const emailValidation = () =>{
    if(!formdata.email.includes("@")){
      setEmailerror("Invalid Email");
      return false;
    }
    setEmailerror("");
    return true;
  }

  const handleData = (e) =>{
    setFormData({
      ...formdata, [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const isEmailValid = emailValidation();
    if(isEmailValid){
      try{
        const res = await axios.post("http://localhost:8080/contact",formdata)
        alert("Submitted. Alekh will be in touch with you soon")
        setFormData({
          name:"",
          email:"",
          message:""
        })
      }catch(err){
        alert("Information failed to send, Please try again!")
      }
    }
  }
  return (
    <section id="contact" className="flex flex-col pb-20 w-full">
      <div data-aos = "fade-up" data-aos-duration = "1000" className="flex justify-center">
        <h1 className="text-4xl font-bold mt-10">
          Get in <span className="text-purple-700">Touch</span>
        </h1>
      </div>
      <div className="mt-7 mx-7 flex justify-center" data-aos = "fade-up" data-aos-duration = "1000">
        <p className="opacity-60">
          Have a question or want to work together? Drop me a message!
        </p>
      </div>
      <div className="flex justify-center">
        <div className={`mt-4 w-full md:w-120 ${dark ? "bg-[#4f4b4b9b]":"bg-[#dee8f7]"} p-7 mx-7  rounded-xl`} data-aos = "fade-up" data-aos-duration = "1000">
        <form action="" className="flex flex-col " onSubmit={handleSubmit}>
            
                <label className="mb-2" htmlFor="name" >Name</label>
                <input type="text" id="name" name="name" value={formdata.name} className={`${dark?"bg-[#000000ce]":"bg-white"} rounded-xl px-3 py-2 mb-4`} placeholder="Your name" onChange={handleData}/>
                <label className="mb-2" htmlFor="email">E-mail</label>
                <input type="email" value={formdata.email} className={`${dark?"bg-[#000000ce]":"bg-white"} rounded-xl px-3 py-2 mb-4`} name="email" id="email" placeholder="Your Email" onChange={handleData}/>
                <span className="font-xs ml-6 text-red-500">{emailError}</span>
                <label className="mb-2" htmlFor="message">Message</label>
                <textarea name="message" value={formdata.message}  className={`${dark?"bg-[#000000ce]":"bg-white"} rounded-xl px-3 py-2 mb-4`} id="message" placeholder="Your message..." onChange={handleData}></textarea>
                <button type="submit" className=" cursor-pointer flex items-center justify-center bg-purple-700 hover:bg-purple-800 px-3 py-2 rounded-xl text-white  ">< RiSendPlaneFill className="mr-2"  />Send Message</button>
        </form>
      </div>
      </div>
    </section>
  );
};

export default Contact;
