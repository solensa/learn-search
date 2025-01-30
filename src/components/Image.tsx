import type { Image as ImageType } from "../../data/images";

export default function Image({ image }: { image: ImageType }) {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl">
      {/* Tags at the top */}
      <div className="absolute top-2 left-2 right-2 z-10 flex flex-wrap gap-1">
        {image.types.map((type) => (
          <span key={type} className="text-xs bg-[#FFCD00] text-black rounded-full px-2 py-1">
            {type}
          </span>
        ))}
        {image.subjects.map((subject) => (
          <span key={subject} className="text-xs bg-[#00A3A8] text-white rounded-full px-2 py-1">
            {subject}
          </span>
        ))}
      </div>

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image.src || "/placeholder.svg"}
          alt={image.title}
          className="w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* Text content */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1C1919]/100 to-transparent text-white p-4 text-center pt-[70%]">
        <p className="text-sm font-medium mb-1 uppercase">{image.preTitle}</p>
        <h3 className="text-3xl font-extrabold mb-1 uppercase">{image.title}</h3>
        <hr className="border-t-[3px] border-white-600 mb-2 mx-auto w-1/4 rounded" />
        <p className="text-sm">{image.description}</p>
      </div>
    </div>
  );
}
