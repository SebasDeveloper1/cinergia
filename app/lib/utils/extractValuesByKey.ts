/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Extracts values from an array of objects based on a specified key.
 *
 * @param {Object} params - The parameters for the extraction.
 * @param {Array} params.array - The array of objects from which to extract values.
 * @param {string} params.key - The key used to extract values from each object in the array.
 * @returns {Array<string | number>} - An array of strings or numbers containing the extracted values.
 *
 * @example
 * const myArray = [
 *   { id: 6704, logo_path: "/fOG2oY4m1YuYTQh4bMqqZkmgOAI.png", name: "Illumination", origin_country: "US" },
 *   // other objects...
 * ];
 * const resultValues = extractValuesByKey({ array: myArray, key: "name" });
 * console.log(resultValues); // Output: ["Illumination", ...]
 */

const extractValuesByKey = ({
  array,
  key,
}: {
  array: Array<any>;
  key: string;
}) => {
  // Map each object in the array and extract the value corresponding to the provided key
  const valuesArray = array.map((item) => item[key]);

  // Return the values as an array of strings or numbers
  return valuesArray.join(', ');
};

export default extractValuesByKey;
