import type { ChangeEvent } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search learning programmes..."
      value={value}
      onChange={handleChange}
      className="w-full p-2 border border-[#333] rounded-md bg-[#444]"
    />
  );
}
