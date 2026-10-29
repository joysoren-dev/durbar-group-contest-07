function formatCountdown(totalSeconds) {
  // 1. Prothome total second theke puro ghonta (hours) ber kore nilam (1 hr = 3600 sec)
  const hours = Math.floor(totalSeconds / 3600);

  // 2. Ghonta bad diye baki second theke minute ber korlam (1 min = 60 sec)
  const minutes = Math.floor((totalSeconds % 3600) / 60);

  // 3. Minute bad diye baki thaka second ber korlam
  const seconds = totalSeconds % 60;

  // 4. Protita number ke 2 digit string e convert korlam jate single digit hole age '0' boshe
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  // 5. HH:MM:SS format e join kore return korlam
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
