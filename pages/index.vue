<template>
	<div class="layout">
		<Header />
		<Skills />
		<Projects />
		<Contact />
		<Rings class="header__rings" />
		<Rings class="skills__rings" />
		<Rings class="footer__rings" />
	</div>
</template>

<script>
export default {
  methods: {
    animateRings() {
      // //Skills rings
      gsap.set(".skills__rings .ring", {
        x: 200,
      });
      gsap.to(".skills__rings .ring", {
        duration: 2,
        x: 0,
        repeat: 0,
        scrollTrigger: ".skills__rings",
        stagger: {
          amount: 0.75
        },
      });
      //Footer rings
      gsap.set(".footer__rings .ring", {
        x: -200,
      });
      gsap.to(".footer__rings .ring", {
        duration: 2,
        x: 0,
        repeat: 0,
        scrollTrigger: ".footer__rings",
        stagger: {
          amount: 0.75
        },
      });
    },
  },
  mounted() {
    this.animateRings();
  },
};
</script>

<style lang="scss" scoped>
.layout {
	max-width: 1110px;
	margin: 0 auto;
	padding-left: 20px;
	padding-right: 20px;
}

.home-links a {
	margin-right: 1rem;
}

.skills__rings {
	position: absolute;
	right: -250px;
	top: 1050px;
	@media only screen and (max-width: $mobile) {
		right: -350px;
		top: 1450px;
	}
}

.header__rings {
	position: absolute;
	left: -150px;
	top: 120px;
	@media only screen and (max-width: $mobile) {
		left: -350px;
	}
}

.footer__rings {
	position: absolute;
	bottom: 190px;
	left: -150px;
	@media only screen and (max-width: $mobile) {
		left: -350px;
		bottom: 180px;
	}
}
</style>
