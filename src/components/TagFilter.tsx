import { useState, useCallback } from "react";
import { useClickOutside } from "../hooks/useClickOutside";

interface TagFilterProps {
  types: string[];
  subjects: string[];
  selectedTypes: string[];
  selectedSubjects: string[];
  onTypesChange: (types: string[]) => void;
  onSubjectsChange: (subjects: string[]) => void;
}

export default function TagFilter({
  types,
  subjects,
  selectedTypes,
  selectedSubjects,
  onTypesChange,
  onSubjectsChange,
}: TagFilterProps) {
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isSubjectOpen, setIsSubjectOpen] = useState(false);

  const closeTypeDropdown = useCallback(() => setIsTypeOpen(false), []);
  const closeSubjectDropdown = useCallback(() => setIsSubjectOpen(false), []);

  const typeRef = useClickOutside(closeTypeDropdown);
  const subjectRef = useClickOutside(closeSubjectDropdown);

  const handleTypeToggle = (type: string) => {
    const updatedTypes = selectedTypes.includes(type)
      ? selectedTypes.filter((t) => t !== type)
      : [...selectedTypes, type];
    onTypesChange(updatedTypes);
  };

  const handleSubjectToggle = (subject: string) => {
    const updatedSubjects = selectedSubjects.includes(subject)
      ? selectedSubjects.filter((s) => s !== subject)
      : [...selectedSubjects, subject];
    onSubjectsChange(updatedSubjects);
  };

  return (
    <div className="flex gap-4">
      <div ref={typeRef} className="relative">
        <button
          onClick={() => setIsTypeOpen(!isTypeOpen)}
          className="p-2 border border-yellow-300 rounded-md bg-[#FFCD00] text-sm "
        >
          Filter by grade: ({selectedTypes.length})
        </button>
        {isTypeOpen && (
          <div className="absolute z-50 mt-1 w-56 bg-white border border-gray-300 rounded-md shadow-lg">
            {types.map((type) => (
              <label key={type} className="flex items-center p-2 hover:bg-gray-100">
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type)}
                  onChange={() => handleTypeToggle(type)}
                  className="mr-2"
                />
                {type}
              </label>
            ))}
          </div>
        )}
      </div>
      <div ref={subjectRef} className="relative">
        <button
          onClick={() => setIsSubjectOpen(!isSubjectOpen)}
          className="p-2 border border-yellow-300 rounded-md bg-[#FFCD00] text-sm "
        >
          Filter by skill: ({selectedSubjects.length})
        </button>
        {isSubjectOpen && (
          <div className="absolute z-50 mt-1 w-[250px] bg-white border border-gray-300 rounded-md shadow-lg">
            {subjects.map((subject) => (
              <label key={subject} className="flex items-center p-2 hover:bg-gray-100">
                <input
                  type="checkbox"
                  checked={selectedSubjects.includes(subject)}
                  onChange={() => handleSubjectToggle(subject)}
                  className="mr-2"
                />
                {subject}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
