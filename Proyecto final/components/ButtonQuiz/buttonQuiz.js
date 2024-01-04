let index = 0;

export const getPreviousIndex = () => {
  console.log("index en el previus", index);
  if (index > 0) {
    index--;
  }
  
    return index;
};

export const getNextIndex = (totalQuestions) => {
  if (index < totalQuestions - 1) {
    index++;
  }
  return index;
};