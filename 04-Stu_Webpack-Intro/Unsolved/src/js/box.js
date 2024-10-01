// TODO: Add a comment explaining the role of `export` in this function `boxClick()`
// the role of export in this function is to make it available to other files that import it using the import statement.
export const boxClick = () => {
  const box = document.getElementById('box');
  if (box.style.backgroundColor === 'blue') {
    box.style.backgroundColor = 'yellow';
  } else {
    box.style.backgroundColor = 'blue';
  }
};
