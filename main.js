import './styles.css'
import linkedInLogo from "/linkedin.svg"
import githubLogo from "/gihub-mark-white.svg"

document.querySelector('#contactMe').innerHTML = `
  <div>
    <a href="https://www.linkedin.com/in/ryan-martin-8909ab126/" target="_blank">
      <img src="${linkedInLogo}" class="logo linkedIn" alt="LinkedIn logo" />
    </a>
    <a href="https://www.linkedin.com/in/ryan-martin-8909ab126/" target="_blank">
      <img src="${githubLogo}" class="logo gitHub" alt="GitHub logo" />
    </a>
    
  </div>
  `