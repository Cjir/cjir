var Home = { 

  template: `
    <section class="bg-white column-2-4  h-100 w-100" id="hero">
      <div class="d-flex flex-col px-3 pt-1 a-items-start gap-1 column-2-4">
        <h1 class="header">Frontend Developer</h1>
        <div>
          <h2 class="subheader"> Develop and Create Digital Experiences </h2>

        </div>
      </div>
      <div class="d-flex flex-col p-3 gapmd j-content-end a-items-end column-2-4 row-2-4">
        <p class="f-light sans">React / React.Native / Vue</p>
        <p class="f-light sans">HTML / CSS</p>
        <p class="f-light sans">Bootstap / Grid / Flexbox</p>
        <p class="f-light sans">JavaScript / Jquery</p>
        <p class="f-light sans">Photographer / UI/ UX Enthusiast</p>
        <h3 class="pb-1">
          Learn More About Me
        </h3>
        <div class="d-flex flex-row gap-1 w-100">
            <div class="hero-card d-flex flex-col flex-1 bg-off-white">
              <div class="gap-1 d-flex flex-col flex-1 p-1 j-content-between">
                  <h4>
                    What I do
                  </h4>
                  <div class="d-flex flex-col border-bottom gap-1">
                    <router-link class="hero-link" to="about">read more</router-link>
                  </div>
              </div>
            </div>
            <div class="hero-card d-flex flex-col flex-1 bg-off-white">
              <div class="gap-1 d-flex flex-col flex-1 p-1 j-content-between">
                  <h4>
                    Recent Work
                  </h4>

                  <div class="d-flex flex-col border-bottom gap-1">
                    <a class="hero-link" to="work">read more</a>
                  </div>
              </div>
            </div>          
          <div class="hero-card d-flex flex-col flex-1 bg-off-white">
            <div class="gap-1 d-flex flex-col flex-1 p-1 j-content-between">
                <h4>
                  Reach Out
                </h4>

                <div class="d-flex flex-col border-bottom gap-1">
                  <a class="hero-link" to="contact">read more</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>`
};