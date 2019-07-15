export function getFavFromStorage() {
  try {
    const data = JSON.parse(localStorage.getItem("items"));
    return data || [];
  } catch (error) {
    return [];
  }
}

export function setFavFromStorage(newFav) {
  localStorage.setItem("items", JSON.stringify(newFav));
}
