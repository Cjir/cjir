// import Vue from 'vue';

// new Vue({ 
//     el: '#app',
//     data: {
//         message: 'Hello world'
//     }
// });


const app = Vue.createApp({})

app.component('hero-section', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.

  template: `
    <section class="bg-sand column-2-4  h-100 w-100" id="hero">
      <div class="d-flex flex-row p-3 a-items-start gap-2 column-2-4">
        <h1 class="header">Commenez à Améliorer Votre Vie</h1>
        <p> Lorsque vous commencez à soulever votre vie, notre équipe vous soutiendra et vous accompagnera tout au long de votre voyage. En tant que glands, nous voulons favoriser votre croissance. </p>
      </div>
      <div class="d-flex flex-col p-3 gap-2 column-2-4 row-2-4">
        <h2>
          Bringing Mobility back to You
        </h2>
        <div class="d-flex flex-row gap-1">
            <div class="hero-card d-flex flex-col">
              <img class="object-fit flex-1" src="../assets/hero-card-img.png">
              <div class="gap-1 d-flex flex-col flex-1 p-2 j-content-between">
                    <h3>
                    Adaptable Stairlifts
                  </h3>
                  <div class="d-flex flex-col gap-1">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p> 
                    <a class="hero-link" href="">read more</a>
                  </div>

              </div>
            </div>
            <div class="hero-card d-flex flex-col">
              <img class="object-fit flex-1" src="../assets/hero-card-img.png">
              <div class="gap-1 d-flex flex-col flex-1 p-2 j-content-between">
                    <h3>
                    Adaptable Stairlifts
                  </h3>

                  <div class="d-flex flex-col gap-1">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p> 
                    <a class="hero-link" href="">read more</a>
                  </div>
              </div>
            </div>          
          <div class="hero-card d-flex flex-col">
            <img class="object-fit flex-1" src="../assets/hero-card-img.png">
            <div class="gap-1 d-flex flex-col flex-1 p-2 j-content-between">
                  <h3>
                  Adaptable Stairlifts
                </h3>

                <div class="d-flex flex-col gap-1">
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p> 
                  <a class="hero-link" href="">read more</a>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div id="hero-img" class="column-1-2 row-1-3">
      </div>
    </section>`
})

app.mount('#main')

// new Vue({
//   el: '#main',
//   template: "<hero-section/>"
// })