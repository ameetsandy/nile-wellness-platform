
/**
 * Calculate international patient count based on number of beds
 * Rounds to nearest 500, minimum of 500
 */
export const calculateInternationalPatients = (beds: number): number => {
  const calculated = beds * 10;
  const rounded = Math.max(500, Math.round(calculated / 500) * 500);
  return rounded;
};

/**
 * Calculate number of operation theaters based on bed count
 * Minimum 5, Maximum 20
 */
export const calculateOperationTheaters = (beds: number): number => {
  const theaters = Math.floor(beds / 10);
  return Math.min(20, Math.max(5, theaters));
};

/**
 * Calculate ICU beds (4x operation theaters, rounded to nearest 5)
 */
export const calculateICUBeds = (operationTheaters: number): number => {
  const icuBeds = operationTheaters * 4;
  return Math.round(icuBeds / 5) * 5;
};

/**
 * Generate a random patient satisfaction percentage between 95.1% and 99.8%
 */
export const generatePatientSatisfaction = (): number => {
  return Number((Math.random() * (99.8 - 95.1) + 95.1).toFixed(1));
};

/**
 * Generate a random success rate between 98.1% and 100%
 */
export const generateSuccessRate = (): number => {
  return Number((Math.random() * (100 - 98.1) + 98.1).toFixed(1));
};

