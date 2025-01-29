class TrnrHeader extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const template = document.createElement('template');
    template.innerHTML = `
      <header class="fixed responsive max surface-container">
        <nav class="scroll">
          <button class="square transparent" onclick="location.href='#';">
            <img class="responsive" src="/logo.svg" style="opacity: 0.7" />
          </button>
          <nav class="center-align max no-space">
            <button class="border left-round" onclick="location.href='#software';">
              <span>Software</span>
            </button>
            <button class="border no-round" onclick="location.href='#music';">
              <span>Music</span>
            </button>
            <button class="border no-round" onclick="location.href='#about';">
              <span>About</span>
            </button>
            <button class="border right-round" onclick="location.href='#contact';">
              <span>Contact</span>
            </button>
          </nav>
        </nav>
      </header>
    `;

    this.appendChild(template.content);
  }

  getBtnClass(id) {
    const selected = this.getAttribute('selected') || 0;
    return `${selected == id ? 'fill' : ''}`;
  }
}

window.customElements.define('trnr-header', TrnrHeader);
