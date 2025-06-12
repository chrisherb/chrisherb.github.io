class TrnrHeader extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const template = document.createElement("template");
    template.innerHTML = `
      <header class="fixed responsive max surface-container">
        <nav class="scroll">
          <a href="#">
            <img
              class="responsive"
              src="/logo.svg"
              style="opacity: 0.9; width: 40px; height: 40px"
            />
          </a>
          <nav class="group connected center-align max">
            <button
              class="border left-round"
              onclick="location.href='#software';"
            >
              <span>Software</span>
            </button>
            <button class="border no-round" onclick="location.href='#music';">
              <span>Music</span>
            </button>
            <button class="border no-round" onclick="location.href='#about';">
              <span>About</span>
            </button>
            <button
              class="border right-round"
              onclick="location.href='#contact';"
            >
              <span>Contact</span>
            </button>
          </nav>
        </nav>
      </header>
    `;

    this.appendChild(template.content);
  }
}

window.customElements.define("trnr-header", TrnrHeader);
