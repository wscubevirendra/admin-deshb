import { FaSun, FaBell, FaTh } from "react-icons/fa";

export default function Header() {
  return (
    <header className="sticky w-full top-0 z-10 flex items-center justify-between gap-4 border-b bg-white px-6 py-3">
      <input
        type="text"
        placeholder="Search…"
        className="w-1/2 rounded-md border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <div className="flex items-center gap-4">
        <FaSun className="h-5 w-5 text-gray-600 cursor-pointer" />
        <FaBell className="h-5 w-5 text-gray-600 cursor-pointer" />
        <FaTh className="h-5 w-5 text-gray-600 cursor-pointer" />
        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="h-8 w-8 rounded-full object-cover"
        />
      </div>
    </header>
  );
}
