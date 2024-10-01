// TODO: Add a comment explaining role of the index.js file and import statements
// the role of the index.js file is to import the functions from the other files 
// and then add event listeners to the buttons that call the functions when clicked. 
import { boxClick } from './box';
import { headerClick } from './header';

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);
