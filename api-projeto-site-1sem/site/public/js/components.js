class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <header>
      <nav>

          <div class="logo"></div>

          <ul>
              <li><a class="now" href="index.html">Home</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#contact">Contato</a></li>
              <li><a href="signUp.html">Cadastre-se</a></li>
          </ul>
          <button onclick="changeScreenSingIn()" class="button1">Entrar</button>
      </nav>
  </header>
          `
    }
}
class Header2 extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <header>
      <nav>

          <div class="logo"></div>

          <ul>
          <li><a href="signIn.html">Login</a></li>
              <li><a class="now" href="index.html">Home</a></li>
          </ul>
          <button onclick="changeScreenSingIn()" class="button1">Entrar</button>
      </nav>
  </header>
          `
    }
}



function changeScreenSingIn() {
    window.location.href = "signin.html"
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<footer>
        <div>
            <img src="../assets/Logo.svg" alt="logo">
        </div>
        <div class="footerSubject1">
            <h2>Serviços</h2>
            <ul>
                <li>Trasferência</li>
                <li>Emprestimos</li>
                <li>Assistência </li>
                <li style="list-style: none; font-weight: bold; color: black;">Copyright © Bank Run 2022</li>
            </ul>

        </div>
        <div class="footerSubject2">
            <h2>Social</h2>
            <ul>
                <li>Contato</li>
                <li>Instagram</li>
                <li>Linkedin</li>
            </ul>

        </div>
        <div class="footerSubject3">
            <h2>Ajuda</h2>
            <ul>
                <li>Suporte</li>
                <li>Contato</li>
            </ul>
        </div>
        <div class="footerSubject4">
            <h2>Jurídico</h2>
            <ul>
                <li>Termos e condições</li>
                <li>Política de privacidade</li>
                <li>Ambiente Confortável</li>
            </ul>
        </div>
        </div>
    </footer> `
    }
}

customElements.define('main-header', Header);
customElements.define('main-header2', Header2);
customElements.define('main-footer', Footer);


function login() {
    window.location.href ="../html/signIn.html"
}
function dashboard() {
    window.location.href ="../html/dashboard.html"
}