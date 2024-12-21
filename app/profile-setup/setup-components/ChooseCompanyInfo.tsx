import React, { useState } from "react";

type AccessType = "freelancer" | "company";

interface ChooseCompanyInfoProps {
  onSelectType?: (type: { registerAs: AccessType }) => void;
}

const ChooseCompanyInfo: React.FC<ChooseCompanyInfoProps> = ({ onSelectType }) => {
  const [selectedType, setSelectedType] = useState<AccessType | null>(null);

  const handleSelectType = (type: AccessType) => {
    setSelectedType(type);
    onSelectType?.({ registerAs: type });
  };

  const optionStyles =
    "p-6 border cursor-pointer hover:scale-105 transition-transform duration-300 w-full text-center rounded-[6px] bg-gray-50";

  return (
    <div className="flex flex-col gap-5 w-full lg:w-1/2 mx-auto">
      <h1 className="text-2xl font-bold text-primary text-center">
        Choose Your Type
      </h1>
      <div className="flex flex-col md:flex-row gap-5 items-center w-full">
        {(["freelancer", "company"] as AccessType[]).map((type) => (
          <div
            key={type}
            role="button"
            aria-selected={selectedType === type}
            onClick={() => handleSelectType(type)}
            className={`${optionStyles} ${
              selectedType === type ? "border-primary text-primary" : "border-gray-300"
            }`}
          >
            {type.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseCompanyInfo;
