class TrnrCardVert extends HTMLElement {

  constructor() {
    super();
    this.render();
  }

  id;

  render() {
    this.id = this.getAttribute('id');
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
        body.no-scroll, #main-${this.id} {
          overflow: hidden;
        }
        #dialog-${this.id} {
          display: block;
          padding: 10px 0 0 0;
        }
        #main-${this.id} {
          margin-bottom: 64px;
        }
      </style>

      <article id="card-${this.id}" class="wave trnr-card-vert no-padding border">
        <img class="responsive" src="${imgSrc}" />
        <div class="padding">
          <h5>${title}</h5>
          <p>${text}</p>
        </div>
      </article>

      <dialog id="dialog-${this.id}" class="max">
        <button id="close-${this.id}" class="circle transparent">
          <i>arrow_back</i>
        </button>
        <main id="main-${this.id}" class="responsive">
          ${content?.outerHTML}
        </main>
      </dialog>
    `;
    this.appendChild(template.content);
  }

  connectedCallback() {
    // listen for popstate events to react to URL changes (back, forward, pushState, replaceState)
    window.addEventListener('popstate', this.onUrlChange.bind(this));

    // check for window parameters
    const urlParams = new URLSearchParams(window.location.search);
    const paramValue = urlParams.get('page');
    if (paramValue === this.id)
      this.openDialog();

    const openBtn = this.querySelector('#card-' + this.id);
    openBtn.addEventListener("click", () => {
      this.addQueryParam("page", this.id);
      this.openDialog();
    });

    const closeBtn = this.querySelector('#close-' + this.id);
    closeBtn.addEventListener("click", () => {
      this.closeDialog();
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

  openDialog() {
    const dialog = this.querySelector(`#dialog-${this.id}`);
    dialog.show();
    document.body.classList.add('no-scroll'); // disable scroll
  }

  closeDialog() {
    const dialog = this.querySelector(`#dialog-${this.id}`);
    dialog.close();
    document.body.classList.remove('no-scroll'); // re-enable scroll
  }

  onUrlChange() {
    const urlParams = new URLSearchParams(window.location.search);
    const paramValue = urlParams.get('page');

    if (paramValue === this.id) {
      this.openDialog();
    } else {
      this.closeDialog();
    }
  }
}

window.customElements.define('trnr-card-vert', TrnrCardVert);
