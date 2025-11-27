import { gallery } from "@/data/gallery";
import Image from "next/image";

const GalleryImages = () => {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="w-full max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {gallery.map(({ image, alt }, index) => (
            <div
              key={index}
              className="relative w-full overflow-hidden"
            >
              <Image
                src={image}
                alt={alt}
                className="h-auto w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryImages;
