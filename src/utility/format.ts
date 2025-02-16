export const FormatNumber = (val: string) => {
  let numericValue = val.replace(/[^0-9]/g, "");
  if (numericValue === "") {
    return "";
  }
  return parseInt(numericValue, 10).toLocaleString();
};
