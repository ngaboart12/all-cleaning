import React from "react";

interface ButtonProps {
  onClick?: () => void;
  text: string;
  disabled?: boolean;
  className?: string;
}

export default function Button({
  onClick,
  text,
  disabled = false,
  className = "",
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-10 py-3 rounded-[6px] border border-primary ${className} ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-primary hover:text-white transition"
      }`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
