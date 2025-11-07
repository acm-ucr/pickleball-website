import { gallery } from '@/data/gallery';
import Image from 'next/image';


const GalleryImages = () => {
    return (
    <div className="flex items-center justify-center py-10">
      <div className="max-w-6xl w-full px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden w-full"
            >
              <Image
                src={src.image}
                alt={src.alt}
                className="object-cover w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>

)};

export default GalleryImages;