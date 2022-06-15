const localStorage = [];
export const getData = (search) => {
  localStorage.push(search);
  //   console.log(localStorage);
};

export const sendData = () => {
  console.log(localStorage);
};
