import { formatDate } from "../../lib/helper";
import { TrackType } from "../../lib/type";
import styles from "./Tracks.module.css";
type Props = {
  tracks: TrackType;
  onClick: () => void;
};

const Tracks = ({ tracks, onClick }: Props) => {
  return (
    <div onClick={onClick} className={styles.contentPlaylist}>
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
  );
};

export default Tracks;
