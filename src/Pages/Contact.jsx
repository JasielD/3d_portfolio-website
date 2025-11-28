import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  };
  const handleFocus = (e) => {
  };
  const handleBlur = () => {};
  const handleSubmit = (e)=>{
    e.preventDefault();
    setIsLoading(true)
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
      // TO show sucess message
      setFormData({
        name: "",
        email: "",
        message: "",
      })
    }).catch((error)=>{
      setIsLoading(false);
      console.log(error);
      // show error message
    })
  };
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
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
    </section>
  );
};

export default Contact;
