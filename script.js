/*
| 
|  FUNÇÃO RELACIONADAS AO ITEM
|
*/
const array_itens = document.querySelectorAll(".item");
array_itens.forEach((item) => {
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragend", dragEnd);
});

/**
 * Quando começa a mover o item
 */
function dragStart(event) {
  event.currentTarget.classList.add("dragging");
}
/**
 * Quando para de mover o item
 */
function dragEnd(event) {
  event.currentTarget.classList.remove("dragging");
}

/*
| 
|  FUNÇÕES RELACIONADAS A AREA
|
*/
const array_areas = document.querySelectorAll(".area");
array_areas.forEach((item) => {
  item.addEventListener("dragover", gragOver);
  item.addEventListener("dragleave", gragLeave);
  item.addEventListener("drop", drop);
});

/**
 * Quando item esta em cima de uma area de possivel drop
 */
function gragOver(event) {
  const area = event.currentTarget;
  if (area.querySelector(".item")) return;
  event.preventDefault();
  area.classList.add("hover");
}

/**
 * Quando item sai de cima de uma area de possivel drop
 */
function gragLeave(event) {
  event.currentTarget.classList.remove("hover");
}

/**
 * Quando item é solto em cima de area sendo liberado pela `gragOver`
 */
function drop(event) {
  const area = event.currentTarget;
  area.classList.remove("hover");
  if (area.querySelector(".item")) return;
  let dragItem = document.querySelector(".item.dragging");
  area.appendChild(dragItem);
  setItensAreas();
}

/**
 * Contabilizando itens nos locais
 */
const areas = document.querySelector(".areas");
const objeto_esperado = {
  a: null,
  b: null,
  c: null,
};
function setItensAreas() {
  array_areas.forEach((area) => {
    const item = area.querySelector(".item");
    const letraArea = area.dataset.name;
    if (item) {
      objeto_esperado[letraArea] = item.innerText;
    } else {
      objeto_esperado[letraArea] = null;
    }
  });
  verificaEsperado();
}
function verificaEsperado() {
  if (
    objeto_esperado.a === "1" &&
    objeto_esperado.b === "2" &&
    objeto_esperado.c === "3"
  ) {
    areas.classList.add("correct");
    return;
  }
  areas.classList.remove("correct");
}

/*
| 
|  FUNÇÃO RELACIONADAS A AREA NEUTRA
|
*/
const neutralArea = document.querySelector(".neutralArea");
neutralArea.addEventListener("dragover", gragOverNeutral);
neutralArea.addEventListener("dragleave", gragLeaveNeutral);
neutralArea.addEventListener("drop", dropNeutral);
/**
 * Mesmas funções das outras areas, mas essa sendo a area com possivel drop
 * idependente da quantidade de item que ja tiver.
 */
function gragOverNeutral(event) {
  const area = event.currentTarget;
  event.preventDefault();
  area.classList.add("hover");
}
function gragLeaveNeutral(event) {
  const area = event.currentTarget;
  area.classList.remove("hover");
}
function dropNeutral(event) {
  const area = event.currentTarget;
  area.classList.remove("hover");
  let dragItem = document.querySelector(".item.dragging");
  area.appendChild(dragItem);
  setItensAreas();
}
