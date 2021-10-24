var About = {
	template: `
    <section v-hscroll class="bg-sky column-2-4  h-100 w-100" id="about-page">
		<section class="p-3" id="about-first">
			<div class="d-flex flex-col j-content-between column-1-3 row-1-3">
				<h1 class="header">Trouvez La Solution à vos Escaliers</h1>
			
				<div class="d-flex flex-col a-items-start gap-1"> 
					<span class="d-flex flex-row a-items-center p-1 about-btn">Straight Stairlift</span>
					<span class="d-flex flex-row a-items-center p-1 about-btn">Curved Stairlift</span>
				</div>
			</div>
			<div class="d-flex flex-row gap-2 column-1-3 border-top pt-1 row-3-4">
				<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
			<div class="d-flex flex-col j-content-end column-2-4 row-1-3">
				<div class="d-flex flex-col w-100 h-80 about-media">
					
				</div>
			</div>
		</section>
		<section class="bg-peach p-3" id="about-second">
			<div class="d-flex flex-col column-1-5">
				<h2 class="about-header text-right">Straight Stairlift</h2>
			</div>
			<div class="d-flex flex-col column-1-3 row-2-4">
					<div class="img-selector">

					</div>
					<div class="stairlift-info">
					</div>
			</div>
			<div class="column-3-5 row-2-4 stairlift-img">
			</div>
		</section>
		<section class="bg-sand p-3" id="about-third">
		<div class="d-flex flex-col column-1-5">
			<h2 class="about-header text-right">Curved Stairlift</h2>
		</div>
		<div class="d-flex flex-col column-1-3 row-2-4">
				<div class="img-selector">

				</div>
				<div class="stairlift-info">
				</div>
		</div>
		<div class="column-3-5 row-2-4 stairlift-img">
		</div>
	</section>
    </section>`,
	//   created () {
	// 	this.handleScroll()
	//   },
	//   destroyed () {
	// 	this.handleScroll()
	//   },
	//   methods: {
	// 	handleScroll(e) {
	// 	  // Any code to be executed when the window is scrolled
	// 	  e = window.event || e;

	// 	  let element = e.target;
	// 	  while (!element.getAttribute("v-hscroll-main"))
	// 		  element = element.parentNode;
	  
	// 	  let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
	// 	  element.scrollLeft -= (delta * 40);
	  
	// 	  if ((delta > 0 && element.scrollLeft > 0) || 
	// 			  (delta < 0 && element.offsetWidth + element.scrollLeft < element.scrollWidth))
	// 	  {
	// 		  e.preventDefault();
	// 	  }
	// 	}
	//   }
};

function scrollHorizontally(e) 
{
	e = window.event || e;

	let element = e.target;
	while (!element.getAttribute("v-hscroll-main"))
		element = element.parentNode;

	let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
	element.scrollLeft -= (delta * 40);

	if ((delta > 0 && element.scrollLeft > 0) || 
			(delta < 0 && element.offsetWidth + element.scrollLeft < element.scrollWidth))
	{
		e.preventDefault();
	}
};

const HScroll = {
	
	bind(el)
	{
		el.setAttribute("v-hscroll-main", "1");
		el.addEventListener('wheel', scrollHorizontally, false);
	},

	unbind(el)
	{
		el.removeEventListener('wheel', scrollHorizontally, false);
	}
};

Vue.directive('hscroll', HScroll);

// function About(){
// 	render() {

// 		return
//     <section class="bg-sand column-2-4  h-100 w-100" id="about">
// 		<div>
// 			<h1 class="header">Trouvez La Solution à vos Escaliers</h1>
// 		</div>
// 		<div class="d-flex flex-col a-items-start gap-1"> 
// 			<span class="d-flex flex-row a-items-center p-1 about-btn">Straight Stairlift</span>
// 			<span class="d-flex flex-row a-items-center p-1 about-btn">Curved Stairlift</span>
// 		</div>
// 		<div>
// 		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
// 		</div>
// 		<div>
// 		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
// 		</div>
//     </section>
// 	}
// };


// const About = Vue.createApp({
// 	template: `
// 	<section class="bg-sand column-2-4  h-100 w-100" id="about">
// 		<div>
// 			<h1 class="header">Trouvez La Solution à vos Escaliers</h1>
// 		</div>
// 		<div class="d-flex flex-col a-items-start gap-1"> 
// 			<span class="d-flex flex-row a-items-center p-1 about-btn">Straight Stairlift</span>
// 			<span class="d-flex flex-row a-items-center p-1 about-btn">Curved Stairlift</span>
// 		</div>
// 		<div>
// 		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
// 		</div>
// 		<div>
// 		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
// 		</div>
// 	</section>`
// })