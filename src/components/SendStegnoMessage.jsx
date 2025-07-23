import React, { useState } from "react";

const SendStegnoMessage = () => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log("Message:", message);
    console.log("File:", file);
    // Call backend API to send steganography message here
  };

  return (
    <section className="p-8 bg-[#1e1e2f] rounded-xl shadow-xl text-white max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Send Stegno Message</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSendMessage}>
        <textarea
          placeholder="Enter your secret message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="textarea textarea-bordered bg-[#2a2a40] border-none text-white placeholder-slate-400"
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="file-input file-input-bordered bg-[#2a2a40] border-none text-white"
        />
        <button
          type="submit"
          className="btn bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-none"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default SendStegnoMessage;
