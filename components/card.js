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
            <div class="badge none primary">${catalogNumber}</div>
            <div class="badge none secondary">${year}</div>
            
            <div class="max absolute bottom left padding">
              <nav>
                <button class="play-button circle" data-audio-artist="${text}" data-audio-title="${title}" data-audio-path="${audioPath}">
                  <i>play_arrow</i>
                </button>
                <button class="border round" data-ui="#dialog">Buy</button>
              </nav>
            </div>
          </div>
        </div>
      </article>
    `;

    this.appendChild(template.content);
  }
}

window.customElements.define("trnr-card", TrnrCard);
