<script>
    export let data;
</script>

<main>
  <h1>Person List</h1>
  <ul>
    {#each data.persons as person}
      <li>
        <strong>{person.name} {person.prefix} {person.surname}</strong>
      </li>
    {/each}
  </ul>
</main>

<style>

</style>