export const nameObjectToString = (name?: { first_name?: string; last_name?: string }) => {
  if (!name || !name.first_name) {
    return "Không xác định";
  }
  return name.first_name + " " + name.last_name;
};
