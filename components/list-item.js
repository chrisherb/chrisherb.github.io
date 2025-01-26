class TrnrListItem extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const title = this.getAttribute('title');
    const text = this.getAttribute('text');
    const link = this.getAttribute('link');

    const template = document.createElement('template');
    template.innerHTML = ` 
      <nav class="row padding" href="${link}">
        <div class="grid no-space max">
          <div class="s5">
            <h6 class="small">${title}</h6>
          </div>
          <div class="s6">
            ${text}
          </div>
          <div class="s1">
            <button class="chip circle">
              <i>download</i>
            </button>
          </div>
        </div>
      </nav>
    `;

    this.appendChild(template.content);
  }
}

window.customElements.define('trnr-list-item', TrnrListItem);
