import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#1e1e2f] p-5 flex flex-col gap-6">
      <h2 className="text-xl font-bold text-center">Menu</h2>
      <nav className="flex flex-col gap-4">
        <Link
          to="/dashboard/create-user"
          className="hover:bg-[#2a2a40] p-2 rounded"
        >
          Create User
        </Link>
        <Link
          to="/dashboard/send-stegno"
          className="hover:bg-[#2a2a40] p-2 rounded"
        >
          Send Stegno Message
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
