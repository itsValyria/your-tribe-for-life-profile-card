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
  <!-- Hier komt de footer -->
</footer>

<style>
  /* Hier komt gedeelde styles voor elke pagina met deze lay-out */
</style>