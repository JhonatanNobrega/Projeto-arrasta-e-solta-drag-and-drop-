# Projeto arrasta e solta (drag and drop)

Esse projeto foi desenvolvido no curso B7WEB.

## Como funciona
Em nossa tela temos 3 elementos que pode ser movidos, e ao soltar na area de drop o mesmo é transferido para o novo local. 
Quando aceitar as sequencia fica verde o bloco indicando que esse foi um acerto!

### Condiguração do item
Para mostrarmos que o item pode ser movivel temos que usar o atributo `draggable`

    <div class="item" draggable="true">1</div>

Alem disso seria bom que o cursor tive-se algo que indica-se o movimento de pegar arrastar e soltar.

    .item {
	    cursor: grab;
	}

### Eventos no item

    item.addEventListener("dragstart", dragStart);
    item.addEventListener("dragend", dragEnd);

`dragstart` : Quando começa o movimento do item;
`dragend` : Quando para de mover o item;

### Eventos na área (local do drop)

    area.addEventListener("dragover", gragOver);
    area.addEventListener("dragleave", gragLeave);
    area.addEventListener("drop", drop);

`dragover` : Quando passo por cima de área de drop; Por padrão esse evento nega que a área seja dropavel, isso serve para fazermos uma validação antes de permitir o drop.
`dragleave` : Quando sai da área de drop;
`drop` : Quando item é liberado pelo `dragover` para ser dropado.

> Para permitir o drop no evento `dragover` basta dar `evento.preventDefault()`

### Mover um item
Para mover qualquer item da tela basta selecionarmos e então dar um  `area.appendChild(dragItem)` desse modo o item sai do local atual e passa para o novo local.

👌O mesmo item não pode ocupar 2 lugares ao mesmo tempo!