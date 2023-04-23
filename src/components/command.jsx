"use client"
import Button from "@mui/material/Button";

export default function Command({ name = "Verbose", selected = false,onClick }) {
  return selected ? (
    <button
      variant="contained"
      className="flex bg-green-600 items-center justify-center focus:bg-green-700 px-12 py-3 leading-none ring-2 ring-green-300 hover:bg-green-700 text-white font-bold"
      onClick={onClick}
    >
      {name}
    </button>
  ) : (
    <button
      variant="contained"
      className="flex bg-base-300 items-center justify-center px-12 py-3 leading-none"
      onClick={onClick}
    >
      {name}
    </button>
  );
}