const template = document.createElement('template');
template.innerHTML = `
  <style></style>
  <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">

  <div class="container">
    <div id="editor">
      <p>Hello World!</p>
      <p>Some initial <strong>bold</strong> text</p>
      <p><br></p>
    </div>
  </div>
`;


class AppEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.toolbarOptions = [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
    
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
    
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
    
      ['clean']                                         // remove formatting button
    ];
  }

  connectedCallback() {
    const container = this.shadowRoot.querySelector('#editor');
    this.editor = new Quill(container, {
      theme: 'snow',
      modules: {
        toolbar: this.toolbarOptions
      }
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {}

  disconnectedCallback() {}

  get editor() {
    return this.getAttribute("editor");
  }
  set editor(value) {
    this.setAttribute("editor", value);
  }
}

window.customElements.define('app-editor', AppEditor);
