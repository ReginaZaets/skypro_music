"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./Bar.module.css";
import classNames from "classnames";
import { TrackType } from "../../lib/type";
import PlayerProgress from "@components/PlayerProgress/PlayerProgress";
import { TimeBarCurrent, TimeBarDuration } from "../../lib/helper";

type PlaylistTrack = {
  track: TrackType;
};

const Bar = ({ track }: PlaylistTrack) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [volume, setVolume] = useState(0.5);

  // Состояние для зацикливания трека
  const [loop, setLoop] = useState<boolean>(false);
  const toggleLoop = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = loop;
      setLoop((prev) => !prev);
    }
  };
  // Текущее состояние воспроизведения трека
  const [currentTime, setCurrentTime] = useState(0);

  const duration = audioRef.current?.duration || 0;

  // Состояние для управления воспроизведением
  const [isPlaying, setIsPlaying] = useState(false);

  // Функция для воспроизведения и паузы
  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio?.pause();
    } else {
      audio?.play();
    }
    setIsPlaying((prev) => !prev);
  };

  const play = () => {
    audioRef.current?.play();
    setIsPlaying(true);
  };

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
  }, [track]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleTreck = () => {
    alert("Функция в разработке");
  };

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
          onChange={(e) => {
            if (audioRef.current) {
              audioRef.current.currentTime = Number(e.target.value);
            }
          }}
        />
        <div className={styles.barPlayerBlock}>
          <div className={styles.barPlayer}>
            <div className={styles.playerControls}>
              <div className={styles.playerBtnPrev}>
                <svg className={styles.playerBtnPrevSvg}>
                  <use
                    onClick={handleTreck}
                    xlinkHref="icon/sprite.svg#icon-prev"
                  ></use>
                </svg>
              </div>
              <div
                onClick={togglePlay}
                className={classNames(styles.playerBtnPlay, styles._btn)}
              >
                <svg className={styles.playerBtnPlaySvg}>
                  <use
                    xlinkHref={`icon/sprite.svg#${
                      isPlaying ? "icon-pause" : "icon-play"
                    }`}
                  ></use>
                </svg>
              </div>
              <div className={styles.playerBtnNext}>
                <svg className={styles.playerBtnNextSvg}>
                  <use
                    onClick={handleTreck}
                    xlinkHref="icon/sprite.svg#icon-next"
                  ></use>
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
                  <use
                    xlinkHref={`icon/sprite.svg#${
                      loop ? "icon-repeat-active" : "icon-repeat"
                    }`}
                  ></use>
                </svg>
              </div>
              <div
                onClick={handleTreck}
                className={classNames(styles.playerBtnShuffle, styles.btnIcon)}
              >
                <svg className={styles.playerBtnShuffleSvg}>
                  <use xlinkHref="icon/sprite.svg#icon-shuffle"></use>
                </svg>
              </div>
            </div>

            <div className={styles.playerTrackPlay}>
              <div className={styles.trackPlayContain}>
                <div className={styles.trackPlayImage}>
                  <svg className={styles.trackPlaySvg}>
                    <use xlinkHref="icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className={styles.trackPlayAuthor}>
                  <a className={styles.trackPlayAuthorLink} href="http://">
                    {track.author}
                  </a>
                </div>
                <div className={styles.trackPlayAlbum}>
                  <a className={styles.trackPlayAlbumLink} href="http://">
                    {track.name}
                  </a>
                </div>
              </div>

              <div className={styles.trackPlayLikeDis}>
                <div
                  className={classNames(styles.trackPlayLike, styles.btnIcon)}
                >
                  <svg className={styles.trackPlayLikeSvg}>
                    <use
                      onClick={handleTreck}
                      xlinkHref="icon/sprite.svg#icon-like"
                    ></use>
                  </svg>
                </div>
                <div
                  className={classNames(
                    styles.trackPlayDislike,
                    styles.btnIcon
                  )}
                >
                  <svg className={styles.trackPlayDislikeSvg}>
                    <use
                      onClick={handleTreck}
                      xlinkHref="icon/sprite.svg#icon-dislike"
                    ></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.barVolumeBlock}>
            <div className={styles.volumeContent}>
              <div className={styles.volumeImage}>
                <svg className={styles.volumeSvg}>
                  <use xlinkHref="icon/sprite.svg#icon-volume"></use>
                </svg>
              </div>
              <div className={classNames(styles.volumeProgress, styles._btn)}>
                <audio
                  ref={audioRef}
                  src={track.track_file}
                  onTimeUpdate={(e) =>
                    setCurrentTime(e.currentTarget.currentTime)
                  }
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
