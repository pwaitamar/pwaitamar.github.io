class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; Itamar Victor Sanchez Ramirez`;
  }
}
customElements.define("mi-footer", MiFooter);
