class Loading extends HTMLElement {
  constructor() {
    super();

    if(!this._root) {
			this._root = this.attachShadow({ mode: 'open' });
			this._rootStyle()
		}

		if(!this._container) {
			this._container = document.createElement('div');
		}

		if(!this.loaded) {
			this.loaded = this.getAttribute('loaded');
		}
  }
  
  static get observedAttributes() {
      return ['loaded'];
  }

	connectedCallback() {
		this._container.className = [
			'container'
		].join(' ');

		this._render();
	}

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'loaded') {
      this.loaded = newValue;
    }
    this._clear();
		this._render();
  }

  disconnectedCallback() {}

  _clear() {
    const loading = this._container.getElementsByClassName('loading')[0];
    this._container.removeChild(loading);
  }

  _render() {
		let loading = document.createElement('div');
    loading.className = 'loading';

    let loaded = document.createElement('div');
    loaded.innerHTML = `
      <div
        class="loaded"
        style="
          width: ${this.loaded || 0}%;
          height: 40px;
          background-color: #00ff00;
        "
      ></div>
    `;

    loading.appendChild(loaded);
    this._container.appendChild(loading);
    this._root.appendChild(this._container);
	}

  _rootStyle() {
    const style = document.createElement('style')
		style.innerHTML = `
      .loading {
        width: 100%;
        background-color: #959595;
      }
		`
		this._root.appendChild(style)
  }
}
window.customElements.define('rafaelbraz-loading', Loading);