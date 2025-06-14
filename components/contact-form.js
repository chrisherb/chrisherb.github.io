class TrnrContactForm extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const template = document.createElement("template");
    template.innerHTML = `
        <form>
            <fieldset>
              <legend>Send me an Email!</legend>
              <div class="field border label">
                <input id="nameInput" type="text" required />
                <label>Name</label>
              </div>
              <div class="field border label textarea">
                <textarea id="messageTextArea" required></textarea>
                <label>Message</label>
              </div>
              <button id="sendBtn" class="responsive" type="submit">
                <i>send</i>
                <span>Send</span>
              </button>
            </fieldset>
          </form>
      `;
    this.appendChild(template.content);
  }

  connectedCallback() {
    const nameInput = this.querySelector("#nameInput");
    const messageTextArea = this.querySelector("#messageTextArea");

    const onSubmit = (event) => {
      event.preventDefault();

      const name = encodeURIComponent(nameInput.value);
      const message = encodeURIComponent(messageTextArea.value);
      const mailtoLink = `mailto:info@ternar.tech?subject=Message from ${name}&body=${message}`;
      // Open the mail client with the pre-filled subject and body without opening a new tab
      window.location.href = mailtoLink;
    };

    // add event listener to form submit
    this.querySelector("form").addEventListener("submit", onSubmit);
  }
}

window.customElements.define("trnr-contact-form", TrnrContactForm);
