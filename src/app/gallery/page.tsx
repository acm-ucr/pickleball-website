import Header from "@/components/header";
import GalleryImages from "@/components/gallery/gallery";

const Gallery = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center pt-7">
      <Header title="Gallery" />
      <GalleryImages />
    </div>
  );
};

export default Gallery;
