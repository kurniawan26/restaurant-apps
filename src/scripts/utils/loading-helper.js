const displayLoading = (parameter) => {
  parameter.classList.add('display');

  setTimeout(() => {
    parameter.classList.remove('display');
  }, 1000);
};

export default displayLoading;
