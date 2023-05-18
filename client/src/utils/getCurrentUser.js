const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("curentUser"));
}

export default getCurrentUser;