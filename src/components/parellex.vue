<template>
    <div class="parallax-container">
        <img class="parallax" :style="{ transform: `translateY(${scrollY * speeds[0]}px)` }" src="../assets/mom1.jpg"
            alt="Image 1" />
        <img class="parallax" :style="{ transform: `translateY(${scrollY * speeds[1]}px)` }" src="../assets/mom2.jpg"
            alt="Image 2" />
        <img class="parallax" :style="{ transform: `translateY(${scrollY * speeds[2]}px)` }" src="../assets/mom3.jpg"
            alt="Image 3" />
        <div class="content"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            scrollY: 0.1,
            speeds: [0.2,0.4,0.2],
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.scrollY = window.scrollY;
        },
    },
};
</script>

<style scoped>

.parallax-container {
    position: relative;
    height: 210vh;
    width: 22.2rem;
}

.parallax {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    transition: transform 0.1s ease-out;
}

img{
    width:100%;
}

</style>