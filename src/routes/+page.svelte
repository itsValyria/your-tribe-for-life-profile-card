<script>
  export let data;
</script>

<main>
  <div card-stack>
    <input id="card-0" name="card-set" type="radio" checked />
    <div card>
      <div class="card-font upper">
        <p class="red">3</p>
        <img class="card-icon" src="/heart.png" alt="heart">
      </div>
      <div class="content">
        <h2>My deck of cards.</h2>
        <p>Wanna know more about me? Click the button below.</p>
        <label for="card-1">Next</label>
      </div>
      <div class="card-font lower reverse">
        <p class="red">3</p>
        <img class="card-icon" src="/heart.png" alt="heart">
      </div>
    </div>

    <input id="card-1" name="card-set" type="radio" />
    <div card>
      <div class="card-font upper">
        <p class="black">4</p>
        <img class="card-icon" src="/clover.png" alt="clover">
      </div>
      <div class="content">
        <img class="profile-img" src="/image.jpg" alt="Eef on a hill">
        <h2>Who am I?</h2>
        <p>I'm {data.person.name}, 21 years old, I live in Amsterdam and I love and hate coding at the same time. Ain't that great?</p>
        <label for="card-2">Next</label>
      </div>
      <div class="card-font lower reverse">
        <p class="black">4</p>
        <img class="card-icon" src="/clover.png" alt="clover">
      </div>
    </div>

    <input id="card-2" name="card-set" type="radio" />
    <div card>
      <div class="card-font upper">
        <p class="red">5</p>
        <img class="card-icon" src="/diamond.png" alt="diamond">
      </div>
      <div class="content">
        <img class="profile-img" src="/education.jpg" alt="Logo of the AUAS">
        <h2>My education.</h2>
        <p>I study Front-End Development and Design at the AUAS. If you don't know what it is, it's basically making websites like this one.</p>
        <label for="card-3">Next</label>
      </div>
      <div class="card-font lower reverse">
        <p class="red">5</p>
        <img class="card-icon" src="/diamond.png" alt="diamond">
      </div>
    </div>

    <input id="card-3" name="card-set" type="radio" />
    <div card>
      <div class="card-font upper">
        <p class="black">6</p>
        <img class="card-icon" src="/spades.png" alt="spades">
      </div>
      <div class="content">
        <img class="profile-img" src="/work.jpg" alt="Logo of the Netherlands Cancer Institute">
        <h2>My work.</h2>
        <p>Every other minute of my time I spend doing financial healthcare administration at the NKI. Oh btw, its a joke. I work 24 hours :&#41;</p>
        <label for="card-4">Next</label>
      </div>
      <div class="card-font lower reverse">
        <p class="black">6</p>
        <img class="card-icon" src="/spades.png" alt="spades">
      </div>
    </div>

    <input id="card-4" name="card-set" type="radio" />
    <div card>
      <div class="card-font upper">
        <p class="red">7</p>
        <img class="card-icon" src="/heart.png" alt="heart">
      </div>
      <div class="content">
        <img class="profile-img" src="/hobbies.jpg" alt="Gaming controller">
        <h2>My hobbies.</h2>
        <p>With my actual free time I like to take pictures and play videogames like Genshin Impact, Minecraft and Stardew Valley.</p>
        <label for="card-5">Next</label>
      </div>
      <div class="card-font lower reverse">
        <p class="red">7</p>
        <img class="card-icon" src="/heart.png" alt="heart">
      </div>
    </div>

    <input id="card-5" name="card-set" type="radio" />
    <div card>
      <div class="card-font upper">
        <p class="black">8</p>
        <img class="card-icon" src="/clover.png" alt="clover">
      </div>
      <div class="content">
        <img class="profile-img" src="/social.jpg" alt="Eef and friend on a beach">
        <h2>My social life.</h2>
        <p>I live with my parents, spend weekends with my boyfriend and I try to see my close friends on a regular basis. Yay!</p>
        <label for="card-6">Next</label>
      </div>
      <div class="card-font lower reverse">
        <p class="black">8</p>
        <img class="card-icon" src="/clover.png" alt="clover">
      </div>
    </div>

    <input id="card-6" name="card-set" type="radio" />
    <div card>
      <div class="card-font upper">
        <p class="red">9</p>
        <img class="card-icon" src="/diamond.png" alt="diamond">
      </div>
      <div class="content">
        <h2>Aww, it's over.</h2>
        <p>Did it go by too fast? Click the button below and start over.</p>
        <label for="card-0">Start Over</label>
      </div>
      <div class="card-font lower reverse">
        <p class="red">9</p>
        <img class="card-icon" src="/diamond.png" alt="diamond">
      </div>
    </div>
    
  </div>
</main>

<style>
  main {
    display: grid;
    justify-content: center;
    align-content: center;
    min-height: 90vh;
    position: relative;
  }

  [card-stack] {
    height: 50vh;
    width: 20rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    height: 28rem;
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

  [card] img.card-icon {
  height: 2rem;
  }

  [card] img.profile-img {
    height: 8rem;
    border-radius: 50%;
    transition: 1s;
  }

  [card] img.profile-img:hover {
    transform: rotate(360deg);
  }

  [card] h2 {
    margin: 1rem 0 0.5rem 0;
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
