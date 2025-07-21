import React from "react";

const Login = () => {
  console.log("Login page loaded");

  return (
   <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-4">
  <div className="bg-[#1e1e2f] p-10 rounded-xl shadow-xl w-full max-w-md">
    <h2 className="text-3xl font-bold mb-6 text-center">Log In</h2>
    <form className="flex flex-col gap-4">
      <input
        type="email"
        placeholder="Email"
        className="input input-bordered w-full bg-[#2a2a40] border-none text-white placeholder-slate-400"
      />
      <input
        type="password"
        placeholder="Password"
        className="input input-bordered w-full bg-[#2a2a40] border-none text-white placeholder-slate-400"
      />
      <button className="btn bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-none">
        Log In
      </button>
      <p className="text-sm text-center text-slate-300">
        Don't have an account?{" "}
        <a href="/signup" className="text-cyan-400 underline">
          Sign up
        </a>
      </p>
    </form>
  </div>
</section>

  );
};

export default Login;
