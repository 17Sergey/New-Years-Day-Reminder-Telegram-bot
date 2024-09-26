export function getDaysTillNewYearsDay() {
  let currentDate = new Date();

  const nextYear = currentDate.getFullYear() + 1;
  let newYearsDay = new Date(`01/01/${nextYear}`);

  let diffInTime = newYearsDay.getTime() - currentDate.getTime();
  let diffInDays = 1 + Math.round(diffInTime / (1000 * 3600 * 24));

  function getDaysWord(days) {
    if (typeof days !== "number" || days < 0) {
      return "Некорректное количество дней";
    }

    const lastDigit = days % 10;
    const lastTwoDigits = days % 100;

    if (lastDigit === 1 && lastTwoDigits !== 11) {
      return "день";
    } else if (
      lastDigit >= 2 &&
      lastDigit <= 4 &&
      (lastTwoDigits < 12 || lastTwoDigits > 14)
    ) {
      return "дня";
    } else {
      return "дней";
    }
  }

  return `${diffInDays} ${getDaysWord(diffInDays)}`;
}
