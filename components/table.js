class TrnrTable extends HTMLTableElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const tableRows = this.querySelectorAll("tr");

    tableRows.forEach(this.enhanceCells);
  }

  enhanceCells(row) {
    row.classList.add("wave");
    const tableCells = row.querySelectorAll("td");

    tableCells.forEach((cell, cellIndex) => {
      switch (cellIndex) {
        case 0:
          var innerText = cell.innerText;
          var wrapper = "<strong>" + innerText + "</strong>";
          cell.innerHTML = wrapper;
          break;
        case 1:
          var innerText = cell.innerText;
          var wrapper = "<em>" + innerText + "</em>";
          cell.innerHTML = wrapper;
          break;
        case 2:
          cell.classList.add("min");
          cell.querySelectorAll("button").forEach((button, btnIndex) => {
            button.classList.add("chip", "circle");
            const btnText = button.innerText;

            switch (btnIndex) {
              case 0:
                button.innerHTML = `<i>window</i><div class="tooltip left">${btnText}</div>`;
                break;
              case 1:
                button.innerHTML = `<i>nutrition</i><div class="tooltip left">${btnText}</div>`;
                break;
            }
          });
          break;
      }
    });
  }
}

window.customElements.define("trnr-table", TrnrTable, { extends: "table" });
