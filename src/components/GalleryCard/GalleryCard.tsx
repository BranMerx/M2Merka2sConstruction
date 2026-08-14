import "./GalleryCard.css";
type GalleryCardProps = {
    image: string;
    title: string;
    onClick: () => void;
};

function GalleryCard({image, title, onClick}: GalleryCardProps){
    return(
        <div className ="gallery-card">
            <button
                className="gallery-image-button"
                onClick = {onClick}
                aria-label = {`View ${title}`}
            >
                <img src={image} alt={title}/>
            </button>

            <h3>{title}</h3>
        </div>
    );
}

export default GalleryCard;