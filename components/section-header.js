class TrnrSectionHeader extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const title = this.getAttribute("title") || "Section Title";
    const icon = this.getAttribute("icon") || "info";

    const template = document.createElement("template");
    template.innerHTML = `
        <div class="row bottom-align">
            <div class="max">
                <h2><i class="extra">${icon}</i>${title}</h2>
            </div>
            <div>
                <a href="#home">
                    <i class="extra primary-text">straight</i>
                </a>
            </div>
        </div>
        <hr />
      `;
    this.appendChild(template.content);
  }
}

window.customElements.define("trnr-section-header", TrnrSectionHeader);
