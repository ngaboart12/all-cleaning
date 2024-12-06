interface SelectinputProps<T> {
  label: string;
  name: string;
  options: T[];
  value: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onSelect?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Selectinput<T extends { id?: number; name: string }>({
  label,
  name,
  options,
  value,
  className,
  onChange,
  onSelect,
}: SelectinputProps<T>) {
  return (
    <div className="flex flex-col gap-[4px] mb-2">
      <span className="text-[14px] text-black">{label}</span>
      <div className="w-full h-[50px] rounded-[12px] bg-[#F9F9F9]">
        <select
          name={name}
          className={`w-full bg-transparent h-full px-4 text-[14px] font-[400] rounded-[12px] outline-none focus:outline-[#1990AF]/40 focus:outline-[1.8px] ${className}`}
          value={value}
          onChange={onChange}
          onSelect={onSelect}
        >
          {options?.map((option) => (
            <option key={option?.name} value={option?.name}>
              {option?.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
