import React, { useState } from "react";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleCreateUser = (e) => {
    e.preventDefault();
    console.log("User Created:", formData);
    // Here you can call your backend API
  };

  return (
    <section className="p-8 bg-[#1e1e2f] rounded-xl shadow-xl text-white max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Create User</h2>
      <form className="flex flex-col gap-4" onSubmit={handleCreateUser}>
        <input
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          className="input input-bordered bg-[#2a2a40] border-none text-white placeholder-slate-400"
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          className="input input-bordered bg-[#2a2a40] border-none text-white placeholder-slate-400"
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          className="input input-bordered bg-[#2a2a40] border-none text-white placeholder-slate-400"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          className="input input-bordered bg-[#2a2a40] border-none text-white placeholder-slate-400"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button
          type="submit"
          className="btn bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-none"
        >
          Create User
        </button>
      </form>
    </section>
  );
};

export default CreateUser;
