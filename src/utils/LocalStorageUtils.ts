export const getItemFromLocalStorage = (key: string) => {
  let data;
  if (localStorage.getItem(key)) {
    data = JSON.parse(localStorage.getItem(key) || "{}");
  }
  return data !== undefined && data !== null && data !== "undefined"
    ? data
    : undefined;
};

export const setItemToLocalStorage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const removeItemFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
