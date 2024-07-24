"use client";

import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./Bar.module.css";
import classNames from "classnames";
import PlayerProgress from "@components/PlayerProgress/PlayerProgress";
import { TimeBarCurrent, TimeBarDuration } from "../../lib/helper";
import {
  nextTrack,
  prevTrack,
  setIsPlaying,
  setIsShuffled,
  setLoop,
} from "../../store/features/playListSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { useLikeTrack } from "../../hooks/useLikes";
import { useInitializeLikedTracks } from "../../hooks/likes";

const Bar = () => {
  useInitializeLikedTracks()
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [volume, setVolume] = useState(0.5);

  const toggleLoop = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = !loop;
      dispatch(setLoop(!loop));
    }
  };
  // Текущее состояние воспроизведения трека
  const [currentTime, setCurrentTime] = useState(0);

  const duration = audioRef.current?.duration || 0;

  const isShaffled = useAppSelector((state) => state.playlist.isShaffled);
  const loop = useAppSelector((state) => state.playlist.loop);

  const isPlaying = useAppSelector((state) => state.playlist.isPlaying);
  const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
  
  const { isLiked, handleLike } = useLikeTrack(currentTrack);

  const dispatch = useAppDispatch();

  // Функция для воспроизведения и паузы
  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio?.pause();
      dispatch(setIsPlaying(false));
    } else {
      audio?.play();
      dispatch(setIsPlaying(true));
    }
  };

  const play = useCallback(() => {
    audioRef.current?.play();
    dispatch(setIsPlaying(true));
  }, [dispatch]);

  useEffect(() => {
    const audio = audioRef.current;
    const setTime = () => {
      if (audio) setCurrentTime(audio.currentTime);
    };

    audio?.addEventListener("timeupdate", setTime);
    play();

    return () => {
      audio?.removeEventListener("timeupdate", setTime);
    };
  }, [currentTrack, play]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  });

  const handleTreck = () => {
    alert("Функция в разработке");
  };

  const handleShuffled = () => {
    if (isShaffled) {
      dispatch(setIsShuffled(false));
    } else {
      dispatch(setIsShuffled(true));
    }
  };

  const handleNext = () => {
    dispatch(nextTrack());
  };

  const handlePrev = () => {
    dispatch(prevTrack());
  };

  const handlePlayerProgress = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (audioRef.current) {
        audioRef.current.currentTime = Number(e.target.value);
      }
    },
    []
  );

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.addEventListener("ended", handleNext);
    }
    return () => {
      audio?.removeEventListener("ended", handleNext);
    };
  });
  if (!currentTrack) {
    return null;
  }
  
  return (
    <div className={styles.bar}>
      <div className={styles.barContent}>
        <div className={styles.currentTime}>
          <span>{TimeBarCurrent(currentTime)}</span>/
          <span>{TimeBarDuration(duration)}</span>
        </div>
        <PlayerProgress
          max={duration}
          value={currentTime}
          step={0.01}
          onChange={handlePlayerProgress}
        />
        <div className={styles.barPlayerBlock}>
          <div className={styles.barPlayer}>
            <div className={styles.playerControls}>
              <div onClick={handlePrev} className={styles.playerBtnPrev}>
                <svg className={styles.playerBtnPrevSvg}>
                  <use xlinkHref="/icon/sprite.svg#icon-prev"></use>
                </svg>
              </div>
              <div
                data-testid="toggleplay"
                onClick={togglePlay}
                className={classNames(styles.playerBtnPlay, styles._btn)}
              >
                <svg className={styles.playerBtnPlaySvg}>
                  <use
                    xlinkHref={`/icon/sprite.svg#${
                      isPlaying ? "icon-pause" : "icon-play"
                    }`}
                  ></use>
                </svg>
              </div>
              <div
                data-testid="nextTrack"
                onClick={handleNext}
                className={styles.playerBtnNext}
              >
                <svg className={styles.playerBtnNextSvg}>
                  <use xlinkHref="/icon/sprite.svg#icon-next"></use>
                </svg>
              </div>
              <div
                onClick={toggleLoop}
                className={classNames(
                  styles.playerBtnRepeat,
                  styles.btnIcon,
                  loop ? styles.active : null
                )}
              >
                <svg className={styles.playerBtnRepeatSvg}>
                  <use xlinkHref="/icon/sprite.svg#icon-repeat"></use>
                </svg>
              </div>
              <div
                onClick={handleShuffled}
                className={classNames(
                  styles.playerBtnShuffle,
                  styles.btnIcon,
                  isShaffled ? styles.active : null
                )}
              >
                <svg className={styles.playerBtnShuffleSvg}>
                  <use xlinkHref="/icon/sprite.svg#icon-shuffle"></use>
                </svg>
              </div>
            </div>

            <div className={styles.playerTrackPlay}>
              <div className={styles.trackPlayContain}>
                <div className={styles.trackPlayImage}>
                  <svg className={styles.trackPlaySvg}>
                    <use xlinkHref="/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className={styles.trackPlayAuthor}>
                  <a className={styles.trackPlayAuthorLink} href="http://">
                    {currentTrack.name}
                  </a>
                </div>
                <div className={styles.trackPlayAlbum}>
                  <a className={styles.trackPlayAlbumLink} href="http://">
                    {currentTrack.author}
                  </a>
                </div>
              </div>

              <div className={styles.trackPlayLikeDis}>
                {isLiked ? (
                  <div
                    onClick={handleLike}
                    className={classNames(
                      styles.trackPlayDislike,
                      styles.btnIcon
                    )}
                  >
                    <svg
                      className={classNames(styles.trackPlayDislikeSvg, {
                        [styles.activeLike]: isLiked,
                      })}
                    >
                      <use xlinkHref="/icon/sprite.svg#icon-dislike"></use>
                    </svg>
                  </div>
                ) : (
                  <div
                    onClick={handleLike}
                    className={classNames(styles.trackPlayLike, styles.btnIcon)}
                  >
                    <svg
                      className={classNames(styles.trackPlayLikeSvg, {
                        [styles.activeLike]: isLiked,
                      })}
                    >
                      <use xlinkHref="/icon/sprite.svg#icon-like"></use>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={styles.barVolumeBlock}>
            <div className={styles.volumeContent}>
              <div className={styles.volumeImage}>
                <svg className={styles.volumeSvg}>
                  <use xlinkHref="/icon/sprite.svg#icon-volume"></use>
                </svg>
              </div>
              <div className={classNames(styles.volumeProgress, styles._btn)}>
                <audio
                  ref={audioRef}
                  src={currentTrack.track_file}
                  onTimeUpdate={(e) =>
                    setCurrentTime(e.currentTarget.currentTime)
                  }
                  data-testid="audio-element"
                ></audio>
                <input
                  className={classNames(styles.volumeProgressLine, styles._btn)}
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bar;
