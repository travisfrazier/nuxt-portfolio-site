<template>
    <section class="projects__section">
      <div class="projects__top">
        <h2>Projects</h2>
        <a href="#contact">
          <button>Contact Me</button>
        </a>
      </div>
      <div class="projects__container">
        <div
          v-bind:key="project.id"
          v-for="project in projects"
          class="projects__item"
        >
          <div
            class="project__item--img"
            :style="{
              'background-image':
                'url(' + (`/images/${project.img}`) + ')',
            }"
          >
            <div class="projects__overlay">
              <a target="_blank" v-bind:href="project.live">
                <button>View Project</button>
              </a>
              <a target="_blank" v-bind:href="project.code">
                <button>View Code</button>
              </a>
            </div>
          </div>
          <h3>{{ project.name }}</h3>
          <div class="projects__item--skills">
            <p>{{ project.skillOne }}</p>
            <p>{{ project.skillTwo }}</p>
            <p>{{ project.skillThree }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          {
            img: "thumbnail-project-3-large.webp",
            name: "Todo Web App",
            skillOne: "HTML",
            skillTwo: "Sass",
            skillThree: "Vue",
            live: "https://vuejs-todo-application.netlify.app",
            code: "https://github.com/travisfrazier/todo-vue",
            id: 1,
          },
           {
            img: "space-tourism.png",
            name: "Space Travel Website",
            skillOne: "HTML",
            skillTwo: "Sass",
            skillThree: "Vue",
            live: "https://space-tourism-vuejs.netlify.app",
            code: "https://github.com/travisfrazier/space-tourism",
            id: 2,
          },
          {
            img: "typemaster.png",
            name: "Typemaster Launch Landing Page",
            skillOne: "HTML",
            skillTwo: "CSS Grid",
            skillThree: "Sass",
            live: "https://travisfrazier.github.io/typemaster-lp",
            code: "https://github.com/travisfrazier/typemaster-lp",
            id: 3,
          },
          {
            img: "guess.png",
            name: "Match Game Web App",
            skillOne: "HTML",
            skillTwo: "CSS",
            skillThree: "Javascript",
            live: "https://travisfrazier.github.io/matchgame",
            code: "https://github.com/travisfrazier/matchgame",
            id: 4,
          },
          {
            img: "drum.png",
            name: "Drum Pad Web App",
            skillOne: "HTML",
            skillTwo: "Sass",
            skillThree: "Vue",
            live: "https://travisfrazier.github.io/vue-drum-pad",
            code: "https://github.com/travisfrazier/vue-drum-pad",
            id: 5,
          },
          {
            img: "flash.png",
            name: "Flash Card Web App",
            skillOne: "HTML",
            skillTwo: "Sass",
            skillThree: "Vue",
            live: "https://effortless-malabi-73eca3.netlify.app",
            code: "https://github.com/travisfrazier/flashcards-vue",
            id: 6,
          },
          {
            img: "weather.png",
            name: "Weather API Web App",
            skillOne: "HTML",
            skillTwo: "Sass",
            skillThree: "Javascript",
            live: "https://codepen.io/travisfrazier/full/bKyzep",
            code: "https://codepen.io/travisfrazier/full/bKyzep",
            id: 7,
          },
          {
            img: "movie-app.png",
            name: "Movie API Web App",
            skillOne: "HTML",
            skillTwo: "Sass",
            skillThree: "Vue",
            live: "https://vue-movie-list.netlify.app",
            code: "https://github.com/travisfrazier/nuxt-movie-list",
            id: 8
          },
        ],
      };
    },
    methods: {
      animateProjects() {
        gsap.set('.projects__item', {
          opacity: 0
        })
        
        gsap.to('.projects__item', {
          opacity: 1,
          duration: 2.5,
          stagger: 1,
          scrollTrigger: {
            trigger: '.projects__container', 
            scrub: 0.5
          }
        })
      }
    },
    mounted() {
      this.animateProjects();
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .projects__section {
    padding-bottom: 100px;
  }
  
  .projects__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 80px;
    padding-top: 20px;
  }
  
  h2 {
    @include font-xl;
  }
  
  h3 {
    @include font-m;
    text-transform: uppercase;
    margin-bottom: 12px;
  }
  
  .projects__container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    gap: 20px;
    @media only screen and (max-width: $mobile) {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }
  
  .projects__item {
    cursor: pointer;
  }
  
  .project__item--img {
    height: 400px;
    background-position: center;
    background-size: cover;
    margin-bottom: 20px;
    position: relative;
  
    @media only screen and (max-width: $mobile) {
      height: 275px;
    }
  
    &:hover {
      .projects__overlay {
        opacity: 1;
        visibility: visible;
      }
    }
  
    .projects__overlay {
      visibility: hidden;
      opacity: 0;
      transition: opacity 500ms ease-in-out, visibility 500ms ease-in-out 0ms;
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #25252598;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 20px;
    }
  }
  
  .projects__item--skills {
    display: flex;
    gap: 10px;
    text-transform: uppercase;
  }
  </style>