class TrnrCard extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const title = this.getAttribute('title');
    const text = this.getAttribute('text');
    const imgSrc = this.getAttribute('img-src');
    const year = this.getAttribute('year');
    const audioPath = this.getAttribute('audio-path');

    const template = document.createElement('template');
    template.innerHTML = ` 
      <article class="no-padding border">
        <div class="grid no-space">
          <div class="s6">
            <img loading="lazy" class="responsive" src="${imgSrc}" />
          </div>
          <div class="s6">
            <div class="padding">
              <h6>${title}</h6>
              <p>${text}, ${year}</p>
              
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

window.customElements.define('trnr-card', TrnrCard);
