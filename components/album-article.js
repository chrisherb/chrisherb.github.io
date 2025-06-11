class TrnrAlbumArticle extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const title = this.querySelector("h3");
    const paragraphs = this.querySelectorAll("p");
    const artist = paragraphs[0];
    const year = paragraphs[1];
    const audioSrc = this.querySelector("audio").getAttribute("src");
    const link = this.querySelector("a");

    const contentWrapper = `
      <div class="s6">
        <div class="padding">
          ${title.outerHTML}
          ${artist.outerHTML}
          ${year.outerHTML}
          <nav>
            <button class="play-button circle" data-audio-artist="${artist.innerText}" data-audio-title="${title.innerText}" data-audio-path="${audioSrc}">
              <i>play_arrow</i>
            </button>
            <button class="border round">${link.innerText}</button>
          </nav>
        </div>
      </div>`;

    const image = this.querySelector("img");
    image.setAttribute("loading", "lazy");
    const imageWrapper = `<div class="s6">${image.outerHTML}</div>`;

    const template = document.createElement("template");
    template.innerHTML = `
      <div class="grid no-space">
        ${imageWrapper}
        ${contentWrapper}
      </div>`;

    this.replaceChildren(template.content);
  }
}

window.customElements.define("trnr-album-article", TrnrAlbumArticle, {
  extends: "article",
});
