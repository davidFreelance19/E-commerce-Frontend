export const timeSince = (date) => {
    const baseDate = new Date(date);
    const currentTime = new Date();
    const seconds = Math.floor(( baseDate.getTime() - currentTime.getTime() ) / 1000);
  
    let years = 0;
    let months = 0;
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let remainingSeconds = seconds;
  
    if (remainingSeconds >= 31536000) {
      years = Math.floor(remainingSeconds / 31536000);
      remainingSeconds %= 31536000;
    }
    if (remainingSeconds >= 2592000) {
      months = Math.floor(remainingSeconds / 2592000);
      remainingSeconds %= 2592000;
    }
    if (remainingSeconds >= 86400) {
      days = Math.floor(remainingSeconds / 86400);
      remainingSeconds %= 86400;
    }
    if (remainingSeconds >= 3600) {
      hours = Math.floor(remainingSeconds / 3600);
      remainingSeconds %= 3600;
    }
    if (remainingSeconds >= 60) {
      minutes = Math.floor(remainingSeconds / 60);
      remainingSeconds %= 60;
    }
  
    return {
      years: years > 0 ? years  : 0,
      months: months > 0 ? months : 0,
      days: days < 10 ? '0' + days : days > 0 ? days : 0,
      hours: hours < 10 ? '0' + hours : hours > 0 ? hours : 0,
      minutes: minutes < 10 ? '0' + minutes : minutes > 0 ? minutes : 0,
      seconds: remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds ,
    };
  };
  
