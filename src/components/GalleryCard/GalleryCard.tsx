import "./GalleryCard.css";
type GalleryCardProps = {
    image: string;
    title: string;
};

function GalleryCard({image, title}: GalleryCardProps){
    return(
        <div className ="gallery-card">
            <img src={image} alt={title}/>
            <h3>{title}</h3>
        </div>
    );
}

export default GalleryCard;