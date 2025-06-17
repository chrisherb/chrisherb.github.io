class TrnrCookieBanner extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const template = document.createElement("template");
    template.innerHTML = /*html*/ `
        <style>
            .snackbar {
                opacity: 1;
                visibility: visible;
                cursor: unset;
            }
        </style>
        <div id="kekse" class="snackbar">
            <div class="max">
            This site uses embedded Gumroad content, which may set 
            cookies for payments and analytics.<br/>We do not set cookies 
            ourselves. See Gumroad's <a href="https://gumroad.com/privacy" class="inverse-link">
            Privacy Policy</a> for details.</div>
            <a id="banner-ok" class="inverse-link">OK</a>
        </div>
      `;
    this.appendChild(template.content);
  }

  connectedCallback() {
    const banner = this.querySelector("#kekse");
    const okButton = this.querySelector("#banner-ok");

    const onBannerClick = () => {
      banner.classList.remove("snackbar");
      banner.style.opacity = "0";
      banner.style.visibility = "hidden";
      localStorage.setItem("cookieBannerDismissed", "true");
    };

    if (localStorage.getItem("cookieBannerDismissed") !== "true") {
      okButton.addEventListener("click", onBannerClick);
    } else {
      banner.style.display = "none";
    }
  }
}

window.customElements.define("trnr-keks-banner", TrnrCookieBanner);
