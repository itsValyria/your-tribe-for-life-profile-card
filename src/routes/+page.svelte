<script>
  import "../global.css";
  // export let data;
</script>

<main>
  <div card-stack>
    <input id="card-0" name="card-set" type="radio" checked />
    <div card>
      <div class="card-font upper">
        <p class="red">3</p>
        <img src="/heart.png" alt="heart">
      </div>
      <div class="content">
        <h2>Dit is een cool project</h2>
        <p>Boopboop</p>
        <label for="card-1">Learn More</label>
      </div>
      <div class="card-font lower reverse">
        <p class="red">3</p>
        <img src="/heart.png" alt="heart">
      </div>
    </div>

    <input id="card-1" name="card-set" type="radio" />
    <div card>
      <div class="card-font upper">
        <p class="black">4</p>
        <img src="/clover.png" alt="clover">
      </div>
      <div class="content">
        <h2>Dit is een cool project</h2>
        <p>Boopboop</p>
        <label for="card-2">Go to 2</label>
      </div>
      <div class="card-font lower reverse">
        <p class="black">4</p>
        <img src="/clover.png" alt="clover">
      </div>
    </div>

    <input id="card-2" name="card-set" type="radio" />
    <div card>
      <div class="card-font upper">
        <p class="red">5</p>
        <img src="/diamond.png" alt="diamond">
      </div>
      <div class="content">
        <h2>Dit is een cool project</h2>
        <p>Boopboop</p>
        <label for="card-3">Go to 3</label>
      </div>
      <div class="card-font lower reverse">
        <p class="red">5</p>
        <img src="/diamond.png" alt="diamond">
      </div>
    </div>

    <input id="card-3" name="card-set" type="radio" />
    <div card>
      <div class="card-font upper">
        <p class="black">6</p>
        <img src="/spades.png" alt="spades">
      </div>
      <div class="content">
        <h2>Dit is een cool project</h2>
        <p>Boopboop</p>
        <label for="card-4">Go to 4</label>
      </div>
      <div class="card-font lower reverse">
        <p class="black">6</p>
        <img src="/spades.png" alt="spades">
      </div>
    </div>

    <input id="card-4" name="card-set" type="radio" />
    <div card>
      <div class="card-font upper">
        <p class="red">7</p>
        <img src="/heart.png" alt="heart">
      </div>
      <div class="content">
        <h2>Dit is een cool project</h2>
        <p>Boopboop</p>
        <label for="card-5">Go to 5</label>
      </div>
      <div class="card-font lower reverse">
        <p class="red">7</p>
        <img src="/heart.png" alt="heart">
      </div>
    </div>

    <input id="card-5" name="card-set" type="radio" />
    <div card>
      <div class="card-font upper">
        <p class="black">8</p>
        <img src="/clover.png" alt="clover">
      </div>
      <div class="content">
        <h2>Dit is een cool project</h2>
        <p>Boopboop</p>
        <label for="card-6">Go to 6</label>
      </div>
      <div class="card-font lower reverse">
        <p class="black">8</p>
        <img src="/clover.png" alt="clover">
      </div>
    </div>

    <input id="card-6" name="card-set" type="radio" />
    <div card>
      <div class="card-font upper">
        <p class="red">9</p>
        <img src="/diamond.png" alt="diamond">
      </div>
      <div class="content">
        <h2>Dit is een cool project</h2>
        <p>Boopboop</p>
        <label for="card-0">Start Over</label>
      </div>
      <div class="card-font lower reverse">
        <p class="red">9</p>
        <img src="/diamond.png" alt="diamond">
      </div>
    </div>
    
  </div>
</main>

<style>
  main {
    display: grid;
    justify-content: center;
    align-content: center;
    min-height: 98vh;
  }

  [card-stack] {
    height: 50vh;
    width: 20rem;
    position: relative;
    margin: 0 auto;
  }

  [name="card-set"] {
    display: none;
  }

  [name="card-set"]:checked + [card] {
    display: flex;
    opacity: 1;
    filter: blur(0);
    transform: translateY(0) scale(1);
    transition:
      transform 1s,
      opacity 1s,
      filter 0.25s;
    transition-delay: 0.3s;
    z-index: 0;
  }

  [name="card-set"]:checked + [card] ~ [card] {
    z-index: -1;
    display: flex;
    opacity: 0.9;
    filter: blur(1px);
    transform: translateY(1.2rem) scale(0.95);
    transition:
      transform 1.5s,
      opacity 1.5s,
      filter 0.5s;
    transition-delay: 0.4s;
  }

  [name="card-set"]:checked + [card] ~ [card] ~ [card] {
    z-index: -2;
    display: flex;
    opacity: 0.7;
    filter: blur(2px);
    transform: translateY(2.4rem) scale(0.9);
    transition:
      transform 2s,
      opacity 2s,
      filter 1.5s;
    transition-delay: 0.5s;
  }

  [name="card-set"]:checked + [card] ~ [card] ~ [card] ~ [card] {
    z-index: -3;
    display: flex;
    opacity: 0.5;
    filter: blur(3px);
    transform: translateY(3.6rem) scale(0.85);
    transition:
      transform 2.5s,
      opacity 2.5s,
      filter 2s;
    transition-delay: 0.7s;
  }

  [name="card-set"]:checked + [card] ~ [card] ~ [card] ~ [card] ~ [card] {
    z-index: -4;
    display: flex;
    opacity: 0;
    filter: blur(4px);
    transform: translateY(5rem) scale(0.8);
    transition:
      transform 3s,
      opacity 3s,
      filter 2.5s;
    transition-delay: 0.8s;
  }

  [card] {
    display: flex;
    will-change: filter, opacity, transform;
    position: absolute;
    top: 0;
    width: 100%;
    background-color: var(--white--000);
    opacity: 0;
    transform: translateY(0) translateX(calc(-100% - 1rem)) scale(1);
    transition:
      transform 0.5s,
      opacity 0.2s 0.3s,
      filter 0.1s;
    transition-timing-function: ease-in;
    box-shadow: 0 0.2rem 0 rgba(0, 0, 0, 0.2);
    border-radius: 16px;
    justify-content: center;
    align-items: center;
    z-index: 1;
    min-height: 50vh;
  }

  [card]::before {
    content: "";
    display: block;
    padding-bottom: 130%;
  }

  [card] .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 2rem;
    text-align: center;
  }

  [card] label {
    color: var(--white--000);
    display: inline-block;
    padding: 1rem 2rem;
    margin: 1rem;
    background-color: var(--rose--300);
    border-radius: 200px;
    user-select: none;
  }

  [card] label:hover {
    background-color: var(--rose--400);
  }

  [card] label:active {
    background-color: var(--rose--300);
  }

  [card] img {
    height: 2rem;
  }

  .card-font {
    font-family: 'CardC';
    font-size: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .card-font p {
    margin: 0;
  }

  .upper {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }

  .lower {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }

  .reverse {
    transform: rotate(180deg);
  }

  .red {
    color: var(--rose--200);
  }

  .black {
    color: var(--black--000);
  }
</style>
