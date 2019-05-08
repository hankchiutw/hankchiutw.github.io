import { LitElement, html, css } from 'lit-element'

class ProfileCard extends LitElement {
  static get properties() {
    return {
      imgURL: String
    }
  }

  static get styles() {
    return css`
    :host {
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
      display: block;
    }

    .profile {
      background-color: white;
      padding: 57px 50px 15px 50px;
      display: flex;
    }

    .profile__portrait {
      flex: 5;
      padding: 0 15px;
    }

    .profile__portrait img{
      width: 100%;
    }

    .profile__content {
      flex: 7;
      padding: 0 15px;
    }

    .profile-social {
      background-color: #27a79a;
      padding: 15px 0;
    }
    `
  }
  render() {
    return html`
    <div class='profile'>
      <div class='profile__portrait'><img src='${this.imgURL}' /></div>
      <div class='profile__content'>
      </div>
    </div>
    <div class='profile-social'>profile social</div>
    `
  }
}
customElements.define('profile-card', ProfileCard)
