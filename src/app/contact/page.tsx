"use client";
import { motion } from "motion/react"
import { useState } from "react";

export default function Page() {

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    console.log(formData.get("type"), formData.get("name"), formData.get("email"), formData.get("subject"), formData.get("message"));
    if (formData.get("type") === null || formData.get("name") === "" || formData.get("email") === "" || formData.get("subject") === "" || formData.get("message") === "") {
      alert("Please fill out all fields.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyHYwCuawCcXkxp-cMO_c123tK5NpJxGJDN-8_UMKf3G9qjeZbPcMyXoFqh71DJf2ry/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (result.result === "success") {
        alert("Message sent. Thank you!")
        form.reset();
        setLoading(false);
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      alert(`Request failed: ${error}`);
    }
  };

  return (
    <div>
      <img src="loading.gif" className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10" style={{ display: loading ? "block" : "none" }}></img>
      <p className="fixed bottom-0 text-xs">Max Seung 2025.</p>
      <div className="flex flex-col gap-5 p-20 box-border tracking-wide">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl mb-10 underline-offset-5 underline "
        >
          Contact
        </motion.h1>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} method="post" name="contact-form" className="flex flex-col shadow-lg p-5 w-[750px] gap-5 rounded-2xl mb-10">
            <div>
              <label htmlFor="type">Inquiry Type: </label>
              <select name="type" id='type' className="bg-white w-1/2 shadow-lg" defaultValue={""}>
                <option value="" disabled hidden></option>
                <option value="Band">Band</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Website/Technical">Website/Technical</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="Name">Name</label>
              <input type="text" name="name" className="bg-white shadow-lg" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Email">Email</label>
              <input type="email" name="email" className="bg-white shadow-lg" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Subject">Subject</label>
              <input type="text" name="subject" className="bg-white shadow-lg" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Message">Message</label>
              <textarea name="message" className="bg-white"></textarea>
            </div>
            <motion.button whileTap={{ scale: 0.9 }} type="submit" className="cursor-pointer bg-white w-fit p-2 rounded-full shadow-lg">Submit</motion.button>
          </form>
        </motion.div>

        <motion.p className="mb-10" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>Or email: <span className="font-bold">support@mseung.dev</span></motion.p>
        <motion.div className="gap-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          <a
            href="https://www.instagram.com/cal.state_underg/"
            target="_blank"
          ><img src="instagram.png" alt="" className="w-10 h-10" /></a>
        </motion.div>
      </div>
    </div>
  );
}