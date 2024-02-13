/**
 * Calculates the months and days remaining between two dates.
 * @param {string} startDate - The start date in 'YYYY-MM-DDTHH:mm:ss.SSSZ' format.
 * @param {string} endDate - The end date in 'YYYY-MM-DDTHH:mm:ss.SSSZ' format.
 * @returns {string} - A message indicating the remaining time.
 */
export const calculateTimeToMovie = ({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}) => {
  // Parse the dates
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Get the difference in milliseconds
  const differenceInMillis: number = Number(end) - Number(start);

  // Calculate the remaining days and months
  const remainingDays = Math.ceil(differenceInMillis / (1000 * 60 * 60 * 24));
  const remainingMonths = Math.floor(remainingDays / 30);

  if (remainingMonths > 1) {
    return `Te quedan ${remainingMonths} meses y ${remainingDays % 30} días para ver la película.`;
  } else if (remainingMonths === 1) {
    return `Te queda 1 mes y ${remainingDays % 30} día para ver la película.`;
  } else if (remainingDays > 0) {
    return `Te quedan ${remainingDays} días para ver la película.`;
  } else if (remainingDays === 0) {
    return 'Hoy es el último día para ver la película.';
  } else {
    return 'La película ya no está disponible.';
  }
};
