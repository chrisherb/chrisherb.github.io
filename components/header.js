class TrnrHeader extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const template = document.createElement("template");
    template.innerHTML = /* html */ `
      <header class="fixed responsive max surface-container">
        <nav class="scroll">
          <a data-scroll href="#home">
            <img
              class="responsive"
              src="static/logo.svg"
              style="opacity: 0.9; width: 40px; height: 40px"
            />
          </a>
          <nav class="group connected center-align max">
            <button
              class="border left-round"
              id="software-button">
              <span>Software</span>
            </button>
            <button id="music-button" class="border no-round">
              <span>Music</span>
            </button>
            <button id="about-button" class="border no-round">
              <span>About</span>
            </button>
            <button
              id="contact-button"
              class="border right-round">
              <span>Contact</span>
            </button>
          </nav>
          <a href="https://gumroad.com/checkout">
            <i>shopping_cart</i>
          </a>
        </nav>
      </header>
    `;

    const getOffset = () => {
      return 72;
    };

    this.appendChild(template.content);

    var scroll = new SmoothScroll("a[href*='#']", { offset: getOffset });
    var softwareAnchor = document.querySelector("#software");
    var musicAnchor = document.querySelector("#music");
    var aboutAnchor = document.querySelector("#about");
    var contactAnchor = document.querySelector("#contact");

    document.getElementById("software-button").addEventListener("click", () => {
      scroll.animateScroll(softwareAnchor);
    });

    document.getElementById("music-button").addEventListener("click", () => {
      scroll.animateScroll(musicAnchor);
    });

    document.getElementById("about-button").addEventListener("click", () => {
      scroll.animateScroll(aboutAnchor);
    });

    document.getElementById("contact-button").addEventListener("click", () => {
      scroll.animateScroll(contactAnchor);
    });
  }
}

window.customElements.define("trnr-header", TrnrHeader);
