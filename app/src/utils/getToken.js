export const getToken = () => {
  const token = localStorage.getItem("x-authorization-token");
  return token;
};
