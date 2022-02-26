import './style.css';
// import component from './modules/component.js';
const addList = document.querySelector('.addList');

const arrList = [
  {
    id: 1,
    tdl: 'Clean the yard',
    complete: false,
  },
  {
    id: 1,
    tdl: 'Do homework',
    complete: false,
  },
  {
    id: 1,
    tdl: 'Go for jogging',
    complete: false,
  },
];

for (let i = 0; i < arrList.length; i += 1) {
  addList.innerHTML = ` ${addList.innerHTML}
        <li class="listItem">
        <div class="tdl-items">
        <input type="checkbox" class="checkbox">
          <p id=${arrList[i].id} class="text">${arrList[i].tdl}</p>
          </div>
          <span id="delete"><i class="fa-solid fa-ellipsis-vertical"></i></span>           
      </li>
      
      `;
}

// window.onload = component();
