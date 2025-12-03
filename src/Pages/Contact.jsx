import React, { Suspense, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Fox from "../models/Fox";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  const {alert,showAlert,hideAlert} = useAlert();
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  };
  const handleFocus = () => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');
  const handleSubmit = (e)=>{
    e.preventDefault();
    setIsLoading(true)
    setCurrentAnimation('hit');
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name:formData.name,
        to_name:"Jasiel",
        from_email:formData.email,
        to_email:"jasiel.dsilva404@gmail.com",
        message:formData.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(()=>{
      setIsLoading(false);
      showAlert({
        show:true,
        type:'success',
        text:'Message sent successfully!'
      })
      setTimeout(()=>{
        hideAlert();
        setCurrentAnimation('idle');
        setFormData({
          name: "",
          email: "",
          message: "",
        })
      },[3000])
    }).catch((error)=>{
      setIsLoading(false);
      setCurrentAnimation('idle');
      console.log(error);
      showAlert({
        show:true,
        type:'danger',
        text:'I didnt receive your message. Please try again.'
      })
    })
  };
  return (
    <section className="relative flex lg:flex-row flex-col max-container h-screen">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 flex flex-col min-w-[50%]">
        <h1 className="head-text">Get in Touch</h1>
        <form className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit}>
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Jasiel"
              value={formData.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
          </label>

          <label className="text-black-500 font-semibold">
            Email
            <input
              type="text"
              name="email"
              className="input"
              placeholder="jasiel@gmail.com"
              value={formData.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
          </label>

          <label className="text-black-500 font-semibold">
            message
            <textarea
              required
              name="message"
              className="textarea"
              placeholder="Let me Know how I can help you!"
              value={formData.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            className="btn"
            type="submit"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas 
        camera={{
          position:[0,0,5],
          fov:75,
          near:0.1,
          far:1000
        }}>
          <directionalLight intensity={2.5} position={[0,0,1]} />
          <ambientLight intensity={0.1} />
          <Suspense fallback={<Loader />}>
          <Fox position={[0.5,0.35,0]}
          rotation={[12.6,-0.6,0]}
            scale={[0.5,0.5,0.5]}
            currentAnimation={currentAnimation}
          />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
