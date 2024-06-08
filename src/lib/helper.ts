export const TimeBarCurrent = (currentTime: number) => {
  const currentMinutes = Math.floor(currentTime / 60);
  const currentSeconds = Math.floor(currentTime % 60);

  return `${currentMinutes}: ${
    currentSeconds < 10 ? "0" + currentSeconds : currentSeconds
  }`;
};

export const TimeBarDuration = (duration: number) => {
  const durationMinutes = Math.floor(duration / 60);
  const durationSeconds = Math.floor(duration % 60);

  return `${durationMinutes}: ${
    durationSeconds < 10 ? "0" + durationSeconds : durationSeconds
  }`;
};

export const formatDate = (second: number) => {
  const minutes = Math.floor(second / 60);
  const remainingSeconds = second % 60;
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
};
