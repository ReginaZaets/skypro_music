// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import styles from "./BarInputVolume.module.css";
// import classNames from "classnames";

// const BarInputVolume = () => {
//   const audioRef = useRef<HTMLAudioElement | null>(null);

//   const [volume, setVolume] = useState(0.5);
//   useEffect(() => {
//     if (audioRef.current) {
//       audioRef.current.volume = volume;
//     }
//   }, [volume]);
//   return (
//     <div className={styles.barVolumeBlock}>
//       <div className={styles.volumeContent}>
//         <div className={styles.volumeImage}>
//           <svg className={styles.volumeSvg}>
//             <use xlinkHref="icon/sprite.svg#icon-volume"></use>
//           </svg>
//         </div>
//         <div className={classNames(styles.volumeProgress, styles._btn)}>
//           <audio
//             ref={audioRef}
//             src="https://skypro-music-api.skyeng.tech/media/music_files/Winniethemoog_-_Action_Sport_Breakbeat.mp3"
//           ></audio>
//           <input
//             className={classNames(styles.volumeProgressLine, styles._btn)}
//             type="range"
//             min="0"
//             max="1"
//             step="0.01"
//             value={volume}
//             onChange={(e) => setVolume(Number(e.target.value))}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BarInputVolume;
