<template>
    <header>
      <div class="header__tippyTop">
        <p class="header__title">travisfrazier</p>
        <div class="header__social">
          <a href="https://linkedin.com/in/traviscoding" target="_blank">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="LinkedIn">
                <path
                  id="Shape"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.5513 3.3042C4.41165 3.3042 3.48447 4.23017 3.48447 5.36833C3.48447 6.50724 4.41165 7.4338 5.5513 7.4338C6.68872 7.4338 7.61408 6.50724 7.61408 5.36833C7.61408 4.23017 6.68872 3.3042 5.5513 3.3042ZM3.76655 8.99818V20.4515H7.32916L7.33051 8.99818H3.76655ZM9.56465 8.99713V20.4503L13.1192 20.4517L13.1206 14.7845C13.1206 13.3298 13.3739 11.8429 15.2535 11.8429C17.1044 11.8429 17.1044 13.5976 17.1044 14.879V20.4503L20.6629 20.449V14.1689C20.6629 11.3348 20.1456 8.71224 16.3929 8.71224C14.6304 8.71224 13.4769 9.70851 13.0247 10.5618H12.9747L12.9747 8.99713H9.56465ZM22.4355 24H1.98187C1.00598 24 0.212036 23.223 0.212036 22.268V1.73068C0.212036 0.776376 1.00598 0 1.98187 0H22.4355C23.4151 0 24.212 0.776376 24.212 1.73068V22.268C24.212 23.223 23.4151 24 22.4355 24Z"
                  fill="white"
                />
              </g>
            </svg>
          </a>
          <a href="https://github.com/travisfrazier" target="_blank">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="akar-icons_github-fill">
                <path
                  id="Path"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.3035 0C5.50583 0 0 5.50583 0 12.3035C0 17.7478 3.52188 22.3463 8.41254 23.9765C9.02771 24.0842 9.2584 23.715 9.2584 23.3921C9.2584 23.0999 9.24302 22.131 9.24302 21.1005C6.15176 21.6696 5.35203 20.347 5.10596 19.6549C4.96755 19.3012 4.36775 18.2092 3.84485 17.917C3.41423 17.6863 2.79905 17.1173 3.82947 17.1019C4.79838 17.0865 5.49045 17.9939 5.72114 18.363C6.82846 20.2239 8.59709 19.701 9.30454 19.3781C9.4122 18.5783 9.73516 18.04 10.0889 17.7325C7.35136 17.4249 4.49079 16.3637 4.49079 11.6576C4.49079 10.3196 4.96755 9.21227 5.7519 8.35102C5.62886 8.04343 5.19824 6.78232 5.87493 5.09058C5.87493 5.09058 6.90535 4.76762 9.2584 6.3517C10.2427 6.07487 11.2885 5.93645 12.3343 5.93645C13.3801 5.93645 14.4259 6.07487 15.4102 6.3517C17.7632 4.75224 18.7936 5.09058 18.7936 5.09058C19.4703 6.78232 19.0397 8.04343 18.9167 8.35102C19.701 9.21227 20.1778 10.3042 20.1778 11.6576C20.1778 16.3791 17.3018 17.4249 14.5643 17.7325C15.0103 18.1169 15.3948 18.8552 15.3948 20.0086C15.3948 21.6542 15.3794 22.9768 15.3794 23.3921C15.3794 23.715 15.6101 24.0995 16.2253 23.9765C18.6676 23.1519 20.79 21.5821 22.2936 19.4882C23.7972 17.3941 24.6063 14.8814 24.6071 12.3035C24.6071 5.50583 19.1012 0 12.3035 0Z"
                  fill="white"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div class="header__main">
        <div class="header__info">
          <h1>
            Nice to meet you! I'm <u class="animate__text"></u
            ><span class="cursor">_</span>
          </h1>
          <p>
            Based in San Diego, I’m a front-end developer passionate about
            building responsive web apps that users love.
          </p>
          <a href="#contact">
            <button>Contact Me</button>
          </a>
        </div>
        <img class="header__profile" src="/images/me.png" />
      </div>
    </header>
  </template>
  
  <script>
  export default {
    methods: {
      typeText() {
  
        gsap.to(".cursor", {
          opacity: 0,
          duration: 0.9,
          ease: "power2.inOut",
          repeat: -1,
        });
  
        let tlMaster = gsap.timeline({
          delay: 2,
          repeat: -1
        });
  
        const words = [
          "Travis Frazier",
          "a coder",
          "ui focused",
          "pretty cool :)"
        ];
  
        words.forEach((word) => {
          let tlText = gsap.timeline({
            repeat: 1,
            yoyo: true,
          });
          tlText.to(".animate__text", {
            duration: 2.5,
            text: word
          });
          tlMaster.add(tlText);
        });
  
      },
    },
    mounted() {
      this.typeText();
    },
  };
  </script>
  
  <style lang="scss" scoped>
  header {
    border-bottom: 1px solid $color-light;
    padding-bottom: 240px;
    position: relative;
    @media only screen and (max-width: $mobile) {
      padding-bottom: 80px;
    }
  }
  
  .header__title {
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -0.44px;
    color: $color-lightest;
  }
  
  .header__tippyTop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 15px 0px 0px;
  }
  
  .header__social {
    display: flex;
    gap: 24px;
  }
  
  .header__main {
    padding-top: 120px;
  
    @media only screen and (max-width: $mobile) {
      display: flex;
      flex-direction: column;
      gap: 40px;
      text-align: center;
      align-items: center;
      padding-top: 40px;
    }
  
    h1 {
      width: 75%;
      @include font-xl;
      margin-bottom: 34px;
      u {
        text-decoration-color: $color-bright;
      }
      @media only screen and (max-width: $tablet) {
        width: 80%;
      }
      @media only screen and (max-width: $mobile) {
        width: 100%;
      }
    }
  
    p {
      margin-bottom: 70px;
      width: 35%;
      @media only screen and (max-width: $mobile) {
        width: 100%;
      }
    }
  }
  
  .header__profile {
    position: absolute;
    top: 0;
    right: 0px;
    z-index: -1;
    max-width: 445px;
    height: 670px;
    object-fit: cover;
    @media only screen and (max-width: $mobile) {
      position: static;
      width: 175px;
      height: auto;
      order: -1;
    }
  }
  </style>