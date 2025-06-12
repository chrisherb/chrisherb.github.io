class TrnrCard extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const title = this.getAttribute("title");
    const text = this.getAttribute("text");
    const catalogNumber = this.getAttribute("catalog-number");
    const imgSrc = this.getAttribute("img-src");
    const year = this.getAttribute("year");
    const audioPath = this.getAttribute("audio-path");
    const links = this.getAttribute("data-links");

    const template = document.createElement("template");
    template.innerHTML = ` 
      <article class="no-padding border">
        <div class="grid no-space">
          <div class="s6">
            <img loading="lazy" class="responsive" src="${imgSrc}" />
          </div>
          <div class="s6 padding">
            <strong>${text}</strong>
            <h3 class="small">${title}</h3>
            ${catalogNumber} | ${year}
            <div class="max absolute bottom left padding">
              <nav>
                <button class="play-button circle" data-audio-artist="${text}" data-audio-title="${title}" data-audio-path="${audioPath}">
                  <i>play_arrow</i>
                </button>
                ${this.getMenu(links)}
              </nav>
            </div>
          </div>
        </div>
      </article>
    `;

    this.appendChild(template.content);
  }

  getMenu(links) {
    if (!links) return "";

    const template = `
      <button class="border">
        <i>stream</i>
        <span>Stream / Buy</span>
        <i>arrow_drop_down</i>
        <menu>
          ${this.getLinks(links)}
        </menu>
      </button>
    `;

    return template;
  }

  getLinks(linksStr) {
    const links = linksStr.split(";").map((linkStr) => {
      const [title, href] = linkStr.split("|");
      return { title, href };
    });

    return links
      .map(
        (l) =>
          `<li>
          <a href="${l.href.trim()}" target="_blank">
            <i>open_in_new</i>
            ${l.title.trim()}
          </a>
        </li>`
      )
      .join("");
  }
}

window.customElements.define("trnr-card", TrnrCard);
