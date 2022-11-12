import ImageCard from "../ImageCard/ImageCard";
import dummmyData from '../../assets/data/gallery.json'
import classes from './Gallery.module.css'

const GalleryView = (props) => {


    return (
        <div className={classes.picCard}>
            {dummmyData
                .slice(0, props.pageSize || dummmyData.length)
                .map(image => <ImageCard key={image.id} id={image.id} description={image.description} image={image.imageUrl} />)}
        </div>
    )
}

export default GalleryView;