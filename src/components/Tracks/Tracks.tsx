import { TrackType } from "../../lib/type";
import styles from "./Tracks.module.css";

function Tracks({ tracks }: { tracks: TrackType }) {
  function formatDate(second: number) {
    const minutes = Math.floor(second / 60);
    const remainingSeconds = second & 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  }
  return (
    // <div className={styles.centerblockContent}>
    <div className={styles.contentPlaylist}>
      <div className={styles.playlistItem}>
        <div className={styles.playlistTrack}>
          <div className={styles.trackTitle}>
            <div className={styles.trackTitleImage}>
              <svg className={styles.trackTitleSvg}>
                <use xlinkHref="icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div>
              <a className={styles.trackTitleLink} href="http://">
                {tracks.name}
                <span className={styles.trackTitleSpan}></span>
              </a>
            </div>
          </div>
          <div className={styles.trackAuthor}>
            <a className={styles.trackAuthorLink} href="http://">
              {tracks.author}
            </a>
          </div>
          <div className={styles.trackAlbum}>
            <a className={styles.trackAlbumLink} href="http://">
              {tracks.album}
            </a>
          </div>
          <div>
            <svg className={styles.trackTimeSvg}>
              <use xlinkHref="icon/sprite.svg#icon-like"></use>
            </svg>
          </div>
          <div>
            <span className={styles.trackTimeText}>
              {formatDate(tracks.duration_in_seconds)}
            </span>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Tracks;
