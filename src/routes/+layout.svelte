<script>
  import '../global.css';
  // Hier komt gedeelde JavaScript logic voor elke pagina met deze lay-out
</script>

<svelte:head>
  <!-- Hier komt logic die je normaal in de head zou zetten -->
</svelte:head>

<header>
  <!-- Hier komt de header / navigatie -->
</header>

<main>
  <slot /> <!-- Hier wordt de pagina content geimplementeerd-->
</main>

<footer>
  <p>Made with &lt;3 by Eef</p>
  <a href="https://eefhaller.com/">eefhaller.com</a>
</footer>

<style>
  footer {
    color: var(--white--000);
    opacity: 0.5;
    padding: 1rem 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  footer a {
    color: unset;
    text-decoration: none;
  }

  footer a:hover {
    text-decoration: underline;
  }
</style>