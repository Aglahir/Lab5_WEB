let resultsList = document.querySelector('.results>ul');
let form1 = document.querySelector('#form1');

form1.addEventListener('submit', (event) => {
  event.preventDefault();
  let itemText = event.target.elements.itemName.value;
  let new_li = `
      <li>
        <p class="normal">${itemText}</p>
        <button class="btn-check">
          check
        </button>
        <button class="btn-delete">
          delete
        </button>
      </li>
    `;
  resultsList.innerHTML += new_li;
});

resultsList.addEventListener('click', (event) => {
  console.log(event.target);
  console.log(event.target.classList);
  if(event.target.classList.contains("btn-check"))
  {
    if(event.target.parentElement.firstElementChild.classList.contains("normal"))
    {
      event.target.parentElement.firstElementChild.classList.remove("normal");
      event.target.parentElement.firstElementChild.classList.add("altered");
    }
    else
    {
      event.target.parentElement.firstElementChild.classList.remove("altered");
      event.target.parentElement.firstElementChild.classList.add("normal");
    }
  }
  else if(event.target.classList.contains("btn-delete"))
  {
    event.target.parentElement.remove();
  }
});