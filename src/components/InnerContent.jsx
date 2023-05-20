import AlbumsContent from "./AlbumsContent";

const InnerContent = () => {
    return (
        <section className="innerContent">
            <AlbumsContent sectionName="Focus" numOfAlbums={8} />
            <AlbumsContent sectionName="Spotify Playlists" numOfAlbums={8} />
            <AlbumsContent sectionName="Spotify Playlists" numOfAlbums={8} />
        </section>

    )
}

export default InnerContent;