class TrnrCardVert extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const title = this.getAttribute('title');
    const text = this.getAttribute('text');
    const imgSrc = this.getAttribute('img-src');
    const id = Date.now();

    const template = document.createElement('template');
    template.innerHTML = `
      <article class="no-padding border">
        <img class="responsive" src="${imgSrc}" />
        <div class="padding">
          <h5>${title}</h5>
          <p>${text}</p>
          <nav>
            <button data-ui="#${id}">Buy</button>
          </nav>
        </div>
      </article>    
      <dialog id="${id}" class="max">
        <div class="row">
          <button class="circle transparent" data-ui="#dialog">
            <i>arrow_back</i>
          </button>
          <h3>${title}</h3>
        </div>
        <div>Some text here</div>
        <nav class="right-align">
          <button class="border">Cancel</button>
          <button>Confirm</button>
        </nav>
      </dialog>
    `;

    this.appendChild(template.content);
  }

  onDialogOpenClick() {
    document.querySelector('#dialog').show();
  }
}

window.customElements.define('trnr-card-vert', TrnrCardVert);
