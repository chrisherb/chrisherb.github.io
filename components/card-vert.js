class TrnrCardVert extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const href = this.getAttribute("href");
    const imgSrc = this.getAttribute("img-src");
    const title = this.getAttribute("title");
    const text = this.getAttribute("text");
    const size = this.getAttribute("size") || "medium";
    const imgSize = size;
    const cardSize = size;

    const template = document.createElement("template");
    template.innerHTML = `
      <a href="${href}">
        <article class="wave ${cardSize} no-padding border">
          <img
            class="${imgSize} responsive"
            src="${imgSrc}"
          />
          <div class="padding">
            <h5>${title}</h5>
            <p>${text}</p>
          </div>
        </article>
      </a>
    `;
    this.appendChild(template.content);
  }
}

window.customElements.define("trnr-card-vert", TrnrCardVert);
