<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Gabriel SYS COD - Matrix Portfolio</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
  body {
    margin: 0; 
    background-color: #000;
    color: #0f0;
    font-family: 'Share Tech Mono', monospace;
    overflow-x: hidden;
  }
  .matrix-bg {
    position: fixed;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    z-index: -1;
    background: black;
  }
  header {
    text-align: center;
    padding: 3rem 1rem 2rem;
  }
  header h1 {
    font-size: 3rem;
    margin: 0;
    text-shadow: 0 0 10px #0f0;
  }
  header h3 {
    font-weight: 400;
    font-size: 1.5rem;
    color: #0c0;
    margin: 0;
    text-shadow: 0 0 5px #0f0;
  }
  main {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 1rem 3rem;
  }
  section {
    margin-bottom: 3rem;
  }
  h2 {
    border-bottom: 1px solid #0f0;
    padding-bottom: 0.5rem;
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
  ul li {
    margin-bottom: 0.75rem;
  }
  a {
    color: #0f0;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  .badges img {
    margin-right: 0.5rem;
    vertical-align: middle;
  }
  .contact-icons img {
    width: 36px;
    margin-right: 1rem;
    vertical-align: middle;
    filter: drop-shadow(0 0 2px #0f0);
  }
  footer {
    text-align: center;
    color: #0a0;
    font-size: 0.8rem;
    padding: 2rem 1rem;
    border-top: 1px solid #0f0;
  }
</style>
</head>
<body>

<canvas class="matrix-bg"></canvas>

<header>
  <h1>GABRIEL-SYS-COD</h1>
  <h3>Front-End Developer & Code Alchemist</h3>
</header>

<main>

  <section>
    <h2>🚀 Proyectos Destacados</h2>
    <ul>
      <li><a href="https://github.com/GABRIEL-SYS-COD/I4G-Payment-Gateway" target="_blank" rel="noopener">I4G Payment Gateway</a> - React + TailwindCSS</li>
      <li><a href="https://github.com/GABRIEL-SYS-COD/movie-database" target="_blank" rel="noopener">Movie Database App</a> - React + TMDB API</li>
      <li><a href="https://github.com/GABRIEL-SYS-COD/portfolio-next" target="_blank" rel="noopener">Portfolio Next.js</a> - Next.js + Styled Components</li>
      <li><a href="https://github.com/GABRIEL-SYS-COD/react-login-page" target="_blank" rel="noopener">React Login Page</a> - React puro</li>
    </ul>
  </section>

  <section>
    <h2>💼 Experiencia</h2>
    <ul>
      <li>[2023 - Presente] Front-End Developer @ Empresa XYZ</li>
      <li>[2022] Pasantía @ Startup ABC</li>
    </ul>
  </section>

  <section>
    <h2>🔗 Contacto</h2>
    <div class="contact-icons">
      <a href="https://linkedin.com/in/gersongz/" target="_blank" rel="noopener"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/linkedin.svg" alt="LinkedIn" title="LinkedIn" /></a>
      <a href="https://leetcode.com/gabriel-sys-cod/" target="_blank" rel="noopener"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/leetcode.svg" alt="LeetCode" title="LeetCode" /></a>
      <a href="mailto:tuemail@dominio.com"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/gmail.svg" alt="Email" title="Email" /></a>
    </div>
  </section>

  <section>
    <h2>☕ Apoya mi trabajo</h2>
    <a href="https://www.buymeacoffee.com/gabrielsyscod" target="_blank" rel="noopener">
      <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="210" height="50" />
    </a>
    <a href="https://ko-fi.com/gabrielsyscod" target="_blank" rel="noopener">
      <img src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3" alt="Ko-fi" width="210" height="50" />
    </a>
  </section>

</main>

<footer>
  © 2025 Gabriel SYS COD — Keep hacking the matrix!
</footer>

<script>
  // Matrix effect canvas
  const canvas = document.querySelector('.matrix-bg');
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  const letters = '01'.split('');
  const fontSize = 16;
  const columns = Math.floor(width / fontSize);
  const drops = new Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';

    for(let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if(drops[i] * fontSize > height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(draw, 50);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });
</script>

</body>
</html>
