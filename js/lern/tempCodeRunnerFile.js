
const mutiplayArai = (array, nam, callback) => {
  const resultArray = [];
  for (const caunt of array) {
    resultArray.push(nam * caunt);
  }
  callback(resultArray);
};
const showResulit = (result) => {
  console.log(result);
};
mutiplayArai([1, 2, 3, 4, 5], 3, showResulit);


