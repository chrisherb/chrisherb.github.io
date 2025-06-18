class TrnrCardVert extends HTMLElement {
  constructor() {
    super();
    this.uniqueClass = generateUniqueClass("trnr-card-vert");
    this.render();
  }

  render() {
    const href = this.getAttribute("href");
    const imgSrc = this.getAttribute("img-src");
    const title = this.getAttribute("title");
    const text = this.getAttribute("text");
    const size = this.getAttribute("size") || "medium";
    const osStr = this.getAttribute("os") || "apple,windows,linux";
    const osIcons = osStr.split(",").map((os) => os.trim());

    const imgSize = size;
    const cardSize = size;
    const iconSize = size == "large" ? "medium" : "small";

    const osIconsHtml = osIcons
      .map((os) => {
        return ` <i class="${iconSize}"><img alt="${os} icon" src="/static/icons/${os}.svg" /></i>`;
      })
      .join("");

    const iconMarginTop = size == "large" ? "0.5rem" : "0.1rem";
    const iconMarginRight = size == "large" ? "0.8rem" : "0.6rem";

    const template = document.createElement("template");
    template.innerHTML = /* html */ `
      <style>
        .${this.uniqueClass} {
          .img-wrapper {
            position: relative;
            display: block;
          }
          .icon-container {
            position: absolute;
            top: ${iconMarginTop};
            right: ${iconMarginRight};
            opacity: 0.75;
            z-index: 2;
            pointer-events: none;
          }
          .icon-container i.medium {
            --_size: 1.25rem;
          }
          .icon-container i.small {
            --_size: 1rem;
          }
        }
      </style>
      <a href="${href}">
        <article class="${this.uniqueClass} wave ${cardSize} no-padding border">
          <div class="img-wrapper">
            <div class="icon-container">
              ${osIconsHtml}
            </div>
            <img
              class="${imgSize} responsive"
              src="${imgSrc}"
            />
          </div>
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

function generateUniqueClass(prefix = "comp") {
  return `${prefix}_${Math.random().toString(36).substr(2, 6)}`;
}
