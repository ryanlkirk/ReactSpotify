import AlbumCard from "./AlbumCard";

const AlbumsContent = ({ sectionName, numOfAlbums }) => {
  const renderAlbumCards = () => {
    const albumCards = [];

    if (numOfAlbums) {
      // If numOfAlbums is provided, create the specified number of AlbumCards
      for (let i = 0; i < numOfAlbums; i++) {
        albumCards.push(<AlbumCard key={i} />);
      }
    } else {
      // If numOfAlbums is not provided, create a single AlbumCard
      albumCards.push(<AlbumCard key={0} />);
    }

    return albumCards;
  };

  return (
    <>
      <h1 className="albumSectionHeader">{sectionName}</h1>
      <section className="focusSection">{renderAlbumCards()}</section>
    </>
  );
};

export default AlbumsContent;
