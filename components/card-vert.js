class TrnrCardVert extends HTMLElement {

  constructor() {
    super();
    this.render();
  }

  id = Date.now();

  render() {
    const title = this.getAttribute('title');
    const text = this.getAttribute('text');
    const imgSrc = this.getAttribute('img-src');

    // remove content and save it for later
    const content = this.querySelector('.card-content');
    if (content)
      this.removeChild(content);

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        #card-${this.id} {
          cursor: pointer;
        }
      </style>
      <article id="card-${this.id}" class="trnr-card-vert no-padding border">
        <img class="responsive" src="${imgSrc}" />
        <div class="padding">
          <h5>${title}</h5>
          <p>${text}</p>
        </div>
      </article>    
      <dialog id="dialog-${this.id}" class="max">
        <div class="row">
          <button id="close-${this.id}" class="circle transparent">
            <i>arrow_back</i>
          </button>
          <h3>${title}</h3>
        </div>
        ${content?.innerHTML}
        <nav class="right-align">
          <button class="border">Cancel</button>
          <button>Confirm</button>
        </nav>
      </dialog>
    `;
    this.appendChild(template.content);
  }

  connectedCallback() {
    const dialog = this.querySelector(`#dialog-${this.id}`);
    const id = this.getAttribute("id");

    const onUrlChange = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const paramValue = urlParams.get('page');

      if (paramValue === id) {
        dialog.show();
      } else {
        dialog.close();
      }
    }

    // Listen for popstate events to react to URL changes (back, forward, pushState, replaceState)
    window.addEventListener('popstate', onUrlChange.bind(this));

    // check for window parameters
    const urlParams = new URLSearchParams(window.location.search);
    const paramValue = urlParams.get('page');
    if (paramValue === id)
      dialog.show();

    const openBtn = this.querySelector('#card-' + this.id);
    openBtn.addEventListener("click", () => {
      this.addQueryParam("page", id);
      dialog.show();
    });

    const closeBtn = this.querySelector('#close-' + this.id);
    closeBtn.addEventListener("click", () => {
      dialog.close();
      this.removeQueryParam('page');
    });
  }

  removeQueryParam(param) {
    const url = new URL(window.location.href);
    url.searchParams.delete(param); // Delete the parameter from the URL
    window.history.pushState({}, '', url);
  }

  addQueryParam(param, value) {
    const url = new URL(window.location.href); // Get current URL
    url.searchParams.set(param, value); // Add or update the parameter
    window.history.pushState({}, '', url);
  }
}

window.customElements.define('trnr-card-vert', TrnrCardVert);
