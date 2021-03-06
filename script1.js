document.querySelector("#submit").addEventListener("click", createTable);
document.querySelector("#submit").addEventListener("click", fillTable);

function createTable(){
	let delTable = document.querySelector("table");
	if(delTable !== null){
		document.body.removeChild(delTable);
	}

	let rows = document.querySelector("#rows").value;
	let columns = document.querySelector("#columns").value;
	if(rows == 0 || columns == 0){
		return;
	}
	let table = document.createElement("table");
	table.addEventListener("click", onClick);
	for(let i = 0; i < rows; i++){
		let row = document.createElement("tr");
		row.className = "row";

		for(let j = 0; j < columns; j++){
			let cell = document.createElement("td");
			cell.className = "cell";
			row.appendChild(cell);
		}
		table.appendChild(row);
	}
	document.body.appendChild(table);
}

function fillTable(){
	let cells = document.querySelectorAll("td");
	let rows = document.querySelector("#rows").value;
	let columns = document.querySelector("#columns").value;
	for(let i = 0; i < rows; i++){
		for(let j = 0; j < columns; j++){
			let textNode = document.createTextNode(j + " " + (i * columns + j));
			cells[i * columns + j].appendChild(textNode);
		}
	}
}

function onClick(e){
	if(e.target && e.target.tagName ==  "TD"){
		if(e.target.style.backgroundColor !== "green"){
			e.target.style.backgroundColor = "green";
		}
		else {
			e.target.style.backgroundColor = "white";
		}
	}
}