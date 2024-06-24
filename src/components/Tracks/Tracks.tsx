"use client";
import classNames from "classnames";
import { formatDate } from "../../lib/helper";
import { TrackType } from "../../lib/type";
import styles from "./Tracks.module.css";
import { setCurrentTrack } from "../../store/features/playListSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
type Props = {
  allTracks: TrackType[];
  track: TrackType;
};

const Tracks = ({ allTracks, track }: Props) => {
  const isPlaying = useAppSelector((state) => state.playlist.isPlaying);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setCurrentTrack({ currentTrack: track, currentPlaylist: allTracks }));
  };
  const { name, author, album, duration_in_seconds } = track;
  const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
  const isCurrentTrack = currentTrack?.id === track.id;
  return (
    <div onClick={handleClick} className={styles.contentPlaylist}>
      <div className={styles.playlistItem}>
        <div className={styles.playlistTrack}>
          <div className={styles.trackTitle}>
            <div className={styles.trackTitleImage}>
              <svg
                className={classNames(styles.trackTitleSvg, {
                  [styles.playingDotActive]: isCurrentTrack,
                  [styles.playingDot]: isCurrentTrack && isPlaying,
                })}
              >
                <use
                  xlinkHref={`/icon/sprite.svg#${
                    isCurrentTrack ? "icon-isplaying" : "icon-note"
                  }`}
                ></use>
              </svg>
            </div>
            <div>
              <a className={styles.trackTitleLink} href="http://">
                {name}
                <span className={styles.trackTitleSpan}></span>
              </a>
            </div>
          </div>
          <div className={styles.trackAuthor}>
            <a className={styles.trackAuthorLink} href="http://">
              {author}
            </a>
          </div>
          <div className={styles.trackAlbum}>
            <a className={styles.trackAlbumLink} href="http://">
              {album}
            </a>
          </div>
          <div>
            <svg className={styles.trackTimeSvg}>
              <use xlinkHref="/icon/sprite.svg#icon-like"></use>
            </svg>
          </div>
          <div>
            <span className={styles.trackTimeText}>
              {formatDate(duration_in_seconds)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
