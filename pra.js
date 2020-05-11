const input = document.querySelector(`.input`);
const btns = document.querySelector(`.btn`);
const lists = document.querySelector(`.lists`);
btns.addEventListener(`click`, addition);
lists.addEventListener(`click`, check);
function addition(event) {
  event.preventDefault();
  const ndiv = document.createElement(`div`);
  ndiv.classList.add(`mom`);
  const cdiv = document.createElement(`li`);
  cdiv.innerText = input.value;
  cdiv.classList.add(`dad`);
  ndiv.appendChild(cdiv);
  const cbtn = document.createElement(`button`);
  cbtn.innerHTML = `<i class="fas fa-user-check"></i>`;
  cbtn.classList.add(`comp`);
  ndiv.appendChild(cbtn);
  const tbtn = document.createElement(`button`);
  tbtn.innerHTML = `<i class="fas fa-trash"></i>`;
  tbtn.classList.add(`trash`);
  ndiv.appendChild(tbtn);
  lists.appendChild(ndiv);
  input.value = ``;
}
function check(e) {
  const doo = e.target;
  if (doo.classList[0] === `comp`) {
    const op = doo.parentElement;
    op.classList.toggle(`comp`);
  }
  if (doo.classList[0] === `trash`) {
    const op = doo.parentElement;
    op.classList.add(`mall`);
    op.addEventListener(`transitioned`, () => {
      op.remove();
    });
  }
}
