import { useState } from "react";
import GalleryCard from "../components/GalleryCard/GalleryCard";
import { galleryImages } from "../data/gallery";
import "../components/GalleryCard/GalleryCard.css"

function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [zoom, setZoom] = useState(1);

    // Get each unique category from galleryImages
    const categories = Array.from(
        new Set(galleryImages.map((image) => image.category))
    );

    function openImage(image: string) {
        setSelectedImage(image);
        setZoom(1);
    }

    function closeImage() {
        setSelectedImage(null);
        setZoom(1);
    }

    function zoomIn() {
        setZoom((currentZoom) =>
            Math.min(currentZoom + 0.25, 3)
        );
    }

    function zoomOut() {
        setZoom((currentZoom) =>
            Math.max(currentZoom - 0.25, 1)
        );
    }

    return (
        <>
            <main className="gallery-page">

                {/* Gallery Header */}
                <section className="gallery-header">
                    <h1>Our Work</h1>
                    <p>
                        Explore some of our completed construction
                        and remodeling projects.
                    </p>
                </section>

                {/* Categories */}
                {categories.map((category) => {
                    const categoryImages = galleryImages.filter(
                        (image) => image.category === category
                    );

                    return (
                        <section
                            className="gallery-category"
                            key={category}
                        >
                            <h2>{category}</h2>

                            <div className="gallery">
                                {categoryImages.map((image) => (
                                    <GalleryCard
                                        key={image.id}
                                        image={image.image}
                                        title={image.title}
                                        onClick={() =>
                                            openImage(image.image)
                                        }
                                    />
                                ))}
                            </div>
                        </section>
                    );
                })}
            </main>

            {/* Lightbox */}
            {selectedImage && (
                <div
                    className="lightbox"
                    onClick={closeImage}
                >
                    <button
                        className="lightbox-close"
                        onClick={closeImage}
                        aria-label="Close image"
                    >
                        ×
                    </button>

                    <div
                        className="lightbox-content"
                        onClick={(e) =>
                            e.stopPropagation()
                        }
                    >
                        <img
                            src={selectedImage}
                            alt="Selected project"
                            style={{
                                transform: `scale(${zoom})`,
                            }}
                        />

                        <div className="zoom-controls">
                            <button onClick={zoomOut}>
                                −
                            </button>

                            <span>
                                {Math.round(zoom * 100)}%
                            </span>

                            <button onClick={zoomIn}>
                                +
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Gallery;