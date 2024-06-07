import React, { useState, useRef, useCallback, useEffect } from "react";
import SpotifyPopup from "../SpotifyPopup/SpotifyPopup";
import "./MusicSearch.css";
import Preloader from "../Preloader/Preloader";

function MusicSearch(props) {
  const [popupOpen, setPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedAlbumUri, setSelectedAlbumUri] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (props.searchResults.length > 0) {
      setHasSearched(true);
    }
  }, [props.searchResults]);
  
  const handleAlbumClick = (uri) => {
    setSelectedAlbumUri(uri);
    setPopupOpen(true);
  };

  const handleClose = () => {
    setPopupOpen(false);
  };

  const convertUriToWebUrl = (uri) => {
    const webUrl = `https://open.spotify.com/${uri
      .replace("spotify:", "")
      .replace(/:/g, "/")}`;
    return webUrl;
  };

  const handleConfirm = () => {
    if (selectedAlbumUri) {
      const webUrl = convertUriToWebUrl(selectedAlbumUri);
      window.open(webUrl, "_blank");
    }
    setPopupOpen(false);
  };

  const handleSearch = useCallback(async () => {
    setIsLoading(true);
    try {
      const query = inputRef.current.value;
      await props.handleSearchResults(query);
      setHasSearched(true);
      inputRef.current.value = "";
    } catch (error) {
      console.error("Whoops! Looks like nothing matched your search:", error);
    } finally {
      setIsLoading(false);
    }
  }, [props]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <main className="musicSearch">
      <h2 className="musicSearch__title"> Spot your Top</h2>
      <form className="musicSearch__form" onSubmit={handleFormSubmit}>
        <input
          ref={inputRef}
          className="musicSearch__input"
          type="text"
          placeholder="Name of the artist or the album"
          maxLength={28}
        />
        <button className="music-search__button" type="submit">
          Search
        </button>
      </form>
      {isLoading ? (
        <Preloader />
      ) : (
        hasSearched && (
          <section className="musicSearch__grid">
            {props.searchResults.map(
              ({ data: { uri, coverArt, artists, name } }) => (
                <article className="musicSearch__gridItem" key={uri}>
                  <img
                    className="musicSearch__gridImage"
                    src={coverArt.sources[0].url}
                    alt={`Avatar of the Artist ${artists.items[0].profile.name}`}
                    onClick={() => handleAlbumClick(uri)}
                  />
                  <div className="musicSearch__gridDescription">
                    <p className="musicSearch__gridArtist">
                      {artists.items[0].profile.name}
                    </p>
                    <p className="musicSearch__gridAlbum">{name}</p>
                  </div>
                </article>
              )
            )}
          </section>
        )
      )}

      <SpotifyPopup
        isOpen={popupOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
      />
    </main>
  );
}

export default MusicSearch;