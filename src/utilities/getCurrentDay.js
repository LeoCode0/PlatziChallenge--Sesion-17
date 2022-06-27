export const getCurrentDay = (day, add = 0) => {
  const index = (day + add) % 6;
  return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index];
};
