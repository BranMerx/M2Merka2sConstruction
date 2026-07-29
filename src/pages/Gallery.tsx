import GalleryCard from "../components/GalleryCard/GalleryCard";
import { galleryImages } from "../data/gallery";

function Gallery(){
    return(
        <section className="gallery">
            {galleryImages.map((image) => (
                <GalleryCard
                    key={image.id}
                    image={image.image}
                    title={image.title}
                />
            ))}
        </section>
    );
}

export default Gallery;