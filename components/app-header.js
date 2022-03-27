// template with styles
const template = document.createElement('template');
template.innerHTML = `
  <style>
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 40px;
      padding: 0 10px;
      background-color: #2C2C2E;
    }

    .logo {
      color: white;
      font-weight: 600;
      font-size: 20px;
    }

    #logout-button {
      padding: 5px 10px;
      border-radius: 4px;
      border: 1px solid transparent;
      font-weight: 700;
      cursor: pointer;
    }
  </style>


  <div class="container">
    <div class="logo"></div>
    <div class="controls">
      <button id="logout-button">Logout</button>
    </div>
  </div>
`;


class AppHeader extends HTMLElement {
  constructor() {
    super();

    // template injecting
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // data binding
    this._title = this.getAttribute('title');
    this.shadowRoot.querySelector('.logo').innerText = this.title;
  }

  // list of possible data bindings
  static observedAttributes = ["title"];

  // Hooks
  // 1.added to DOM
  connectedCallback() {
    this.shadowRoot.querySelector('#logout-button').addEventListener(
      'click', () => this.consoleText()
    )
  }

  // 2.on attribute changed
  attributeChangedCallback(name, oldValue, newValue) {

  }

  // 3.removed from DOM
  disconnectedCallback() {
    this.shadowRoot.querySelector('#logout-button').removeEventListener();
  }

  // Get/Set
  get title() {
    return this._title;
  }
  set title(value) {
    this.setAttribute("title", value);
  }

  // Methods
  consoleText() {
    console.log(123)
  }
}

window.customElements.define('app-header', AppHeader);
