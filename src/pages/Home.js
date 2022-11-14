import GalleryView from '../component/GalleryView/GalleryView';


const Home = () => {
    const numberOfPhotosToRender = 4;
    return (
        <div>
            <h1>Home page</h1>
            
            {/* add baner */}
            {/* <Link to="about">Click to view our about page</Link>
            <Link to="contact">Click to view our contact page</Link> */}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum consequat pulvinar. Fusce ullamcorper sit amet enim ut ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce accumsan semper eros eu ullamcorper. Suspendisse molestie purus et mi dapibus luctus. Donec iaculis aliquet dignissim. Aliquam facilisis suscipit augue in auctor. Aliquam convallis, lorem ut tempus mattis, dolor tortor tempor lacus, rutrum posuere leo nunc vulputate nibh. Cras scelerisque vehicula tristique. Nullam sodales orci nec dictum suscipit. Mauris posuere eros sit amet elit molestie, quis faucibus metus fermentum. Etiam quis tellus id mi porttitor euismod id ut dui.</p>
            <p>Nullam sed enim vel nulla gravida dignissim eu vel nisl. Aenean risus massa, luctus in nulla imperdiet, mattis posuere dolor. Donec non maximus erat. Praesent ac venenatis felis. Phasellus consectetur ultrices est, nec dictum augue volutpat nec. In iaculis felis lectus, vel cursus lectus ultrices vel. Ut finibus lacus eu sollicitudin volutpat. Sed gravida rutrum urna, eu consectetur tortor tempus id. Mauris semper vulputate tellus, porta hendrerit tellus sagittis at. Cras porta dui a egestas maximus. Sed porta dapibus convallis.</p>
            <p>Morbi at justo vitae arcu pellentesque sodales vel quis turpis. Ut ornare id ex et molestie. Etiam porttitor nunc a nisi vulputate, vel molestie nulla tincidunt. Aliquam erat volutpat. Cras leo justo, rhoncus id velit sed, tincidunt molestie sapien. Ut mollis vehicula finibus. Mauris interdum blandit vestibulum. Etiam orci ipsum, ullamcorper id fringilla a, pulvinar sollicitudin turpis. Sed non ornare sem. Vestibulum metus nulla, facilisis eget sem dictum, posuere ornare elit. Donec vulputate nisi lorem, vitae lacinia urna convallis in. Nunc sed metus tempus, ultrices ante et, convallis massa.</p>

            <h3>Recent photos</h3>
            <GalleryView pageSize={numberOfPhotosToRender} />
        </div>
    );
}

export default Home;