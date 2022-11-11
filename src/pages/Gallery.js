import React from 'react'
import ImageCard from '../layout/ImageCard';
import classes from './Gallery.module.css'

const DUMMY_IMAGES = [
    {
        id: '1',
        imageUrl: 'https://images.unsplash.com/photo-1668167222504-1777aae3a844?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        description: "'Caption' with single quotes"
    },
    {
        id: '2',
        imageUrl: 'https://images.unsplash.com/photo-1668101454677-defe7b8b085e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        description: "Both 'single' and \"double\" quotes"
    },
    {
        id: '3',
        imageUrl: 'https://images.unsplash.com/photo-1668148200932-be7f9dac92e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        description: "Both 'single' and \"double\" quotes"
    },
    {
        id: '4',
        imageUrl: 'https://images.unsplash.com/photo-1668165101688-b9f4bfee6f0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        description: "Both 'single' and \"double\" quotes"
    },
    {
        id: '5',
        imageUrl: 'https://images.unsplash.com/photo-1668101205453-97cd2ba2bb26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        description: "Both 'single' and \"double\" quotes"
    },
    {
        id: '6',
        imageUrl: 'https://images.unsplash.com/photo-1667921607905-bc7239bc8008?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        description: "Both 'single' and \"double\" quotes"
    },
    {
        id: '7',
        imageUrl: 'https://images.unsplash.com/photo-1659535861581-ba057b067494?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        description: "Both 'single' and \"double\" quotes"
    },
    {
        id: '8',
        imageUrl: 'https://images.unsplash.com/photo-1668123508904-a49a9aa6ecb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
        description: "Both 'single' and \"double\" quotes"
    },
    {
        id: '9',
        imageUrl: 'https://images.unsplash.com/photo-1668108644868-a7865d4258c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        description: "Both 'single' and \"double\" quotes"
    },
    {
        id: '10',
        imageUrl: 'https://images.unsplash.com/photo-1664575601786-b00156752b61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        description: "Both 'single' and \"double\" quotes"
    },
    {
        id: '11',
        imageUrl: 'https://images.unsplash.com/photo-1668101902203-2467dd8d3abd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        description: "Both 'single' and \"double\" quotes"
    },
    {
        id: '12',
        imageUrl: 'https://images.unsplash.com/photo-1668099281724-d984fd68d256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        description: "Both 'single' and \"double\" quotes"
    },
]
function Gallery() {
    const imageList = DUMMY_IMAGES.map(image => <ImageCard key={image.id} id={image.id} description={image.description} image={image.imageUrl} />);
    console.log(imageList);
    return (
        <div className={classes.picCard}>
            {imageList}
        </div>
    )
}

export default Gallery