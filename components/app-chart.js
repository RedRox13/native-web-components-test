const template = document.createElement('template');
template.innerHTML = `
  <style></style>

  <div class="container">
    <div id="chart-template"></div>
  </div>
`;


class AppChart extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.values = [-1.21, -1.02, 0.61, 0.99, -1.53]
  }

  connectedCallback() {
    const chartTemplateRef = this.shadowRoot.querySelector('#chart-template');
    this.chartTemplate = d3.select(chartTemplateRef);

    this.chartTemplate.style('background-color', 'red').style('height', '60px');
  }

  attributeChangedCallback(name, oldValue, newValue) {}

  disconnectedCallback() {}

  // get chartTemplate() {
  //   return this.getAttribute("chartTemplate");
  // }
  // set chartTemplate(value) {
  //   this.setAttribute("chartTemplate", value);
  // }

}

window.customElements.define('app-chart', AppChart);
