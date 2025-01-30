"use client";

import { useState, useMemo } from "react";
import Image from "../components/Image";
import SearchBar from "../components/SearchBar";
import TagFilter from "../components/TagFilter";
import { images, allTypes, allSubjects } from "../../data/images";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  const filteredImages = useMemo(() => {
    return images.filter((image) => {
      const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTypes =
        selectedTypes.length === 0 || selectedTypes.some((type) => image.types.includes(type));
      const matchesSubjects =
        selectedSubjects.length === 0 ||
        selectedSubjects.some((subject) => image.subjects.includes(subject));
      return matchesSearch && matchesTypes && matchesSubjects;
    });
  }, [searchTerm, selectedTypes, selectedSubjects]);

  return (
    <main className="container mx-auto p-4 w-[1200px]">
      <h1 className="text-3xl font-bold mt-10 mb-6 text-white">Programme Finder - beta 🧬</h1>
      <div className="mb-4">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
      </div>
      {/* <h3 className="font-bold mb-4 text-white">filter programmes by:</h3> */}
      <div className="mb-12 z-10">
        <TagFilter
          types={allTypes}
          subjects={allSubjects}
          selectedTypes={selectedTypes}
          selectedSubjects={selectedSubjects}
          onTypesChange={setSelectedTypes}
          onSubjectsChange={setSelectedSubjects}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image) => (
          <Image key={image.id} image={image} />
        ))}
      </div>
    </main>
  );
}
