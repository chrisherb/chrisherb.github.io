class TrnrCarousel extends HTMLElement {
  constructor() {
    super();
    this.currentIndex = 0;
    this.interval = null;
    this.delay = parseInt(this.getAttribute("interval"), 10) || 2500;
  }

  connectedCallback() {
    this._ensureBaseStyle();
    this._setup();
    this._startAutoScroll();
  }

  disconnectedCallback() {
    clearInterval(this.interval);
  }

  _ensureBaseStyle() {
    if (this._styleInjected) return;
    const style = document.createElement("style");
    style.textContent = `
      trnr-carousel {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        /* Default size with CSS variables, can be overridden by user */
        --carousel-width: 20rem;
        --carousel-height: 20rem;
        width: var(--carousel-width);
        height: var(--carousel-height);
        box-sizing: border-box;
        
        background: transparent;
      }
      trnr-carousel ul, trnr-carousel ol {
        position: relative;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      trnr-carousel ul > li,
      trnr-carousel ol > li {
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.4s cubic-bezier(.4,0,.2,1);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column; /* Stack children vertically */
      }
      trnr-carousel ul > li span,
      trnr-carousel ol > li span {
        position: absolute;
        bottom: -2.2rem;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% - 2rem);
        text-align: center;
        font-size: 1rem;
        color: #fff;
        text-shadow: 0 1px 4px #0008;
        pointer-events: none;
        background: none;
        padding: 0;
        margin: 0;
        z-index: 2;
        line-height: 1.3;
        word-break: break-word;
      }
      trnr-carousel ul > li.active,
      trnr-carousel ol > li.active {
        opacity: 1;
        pointer-events: auto;
        position: relative;
        z-index: 1;
      }
      trnr-carousel img {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        object-fit: contain;
        display: block;
        margin: auto;
        box-shadow: 0px 5px 25px rgba(255, 255, 255, 0.25);
        border-style: solid;
        border-width: 0.15rem;
        border-color: grey;
        background: transparent;
        border-radius: 0.5rem;
      }
    `;
    document.head.appendChild(style);
    this._styleInjected = true;
  }

  _setup() {
    this._list = this.querySelector("ul, ol");
    if (!this._list) return;
    this._items = Array.from(this._list.children);
    this._items.forEach((item) => item.classList.remove("active"));
    this._update();
  }

  _startAutoScroll() {
    if (this.interval) return;
    this.interval = setInterval(() => {
      if (!this._items) return;
      this.currentIndex = (this.currentIndex + 1) % this._items.length;
      this._update();
    }, this.delay);
  }

  _update() {
    if (!this._items) return;
    this._items.forEach((item, idx) => {
      if (idx === this.currentIndex) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
}

customElements.define("trnr-carousel", TrnrCarousel);
