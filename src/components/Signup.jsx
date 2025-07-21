import axios from "axios";
import React, { useState } from "react";

const Signup = () => {
const [formData, setFormData] = useState({
    adminKey: "",
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handelSignup= async ()=>{
    try { const res= await axios.post("" , {FormData
    });
  }
    catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-4">
      <div className="bg-[#1e1e2f] p-10 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Admin Sign Up</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Admin Key"
            value={formData.adminKey}
            className="input input-bordered w-full bg-[#2a2a40] border-none text-white placeholder-slate-400"
            onChange={(e) => setFormData({ ...formData, adminKey: e.target.value })}
          />
          <input
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            className="input input-bordered w-full bg-[#2a2a40] border-none text-white placeholder-slate-400"
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            className="input input-bordered w-full bg-[#2a2a40] border-none text-white placeholder-slate-400"
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email ID"
            value={formData.email}
            className="input input-bordered w-full bg-[#2a2a40] border-none text-white placeholder-slate-400"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            className="input input-bordered w-full bg-[#2a2a40] border-none text-white placeholder-slate-400"
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <button className="btn bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-none" onClick={handelSignup}>
            Sign Up
          </button >
          <p className="text-sm text-center text-slate-300">
            Already have an account?{" "}
            <a href="/login" className="text-cyan-400 underline">
              Log in
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Signup;
