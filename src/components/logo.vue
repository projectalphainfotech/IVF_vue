<template>
    <div>
        <img src="../assets/LOGO.png" class="logo-container" alt="">
    </div>
</template>

<script>
export default {
    name: 'Logo',
}
</script>

<style scoped>
.logo-container {
    width: 40rem;
    display: flex;
    height: 10rem;
    align-items: center;
    flex-direction: column;
    background-color: #fdeaf1;
    color: rgb(0, 0, 0);
    margin:2rem;
}

@media screen and (max-width:764px) {
    .logo-container {
        width: 20rem;
        display: flex;
        height: 10rem;
        align-items: center;
        flex-direction: column;
        background-color: #fdeaf1;
        color: rgb(0, 0, 0);
    }
}

@media screen and (max-width:464px) {
    .logo-container {
        width: 18rem;
        display: flex;
        height: 5rem;
        align-items: center;
        flex-direction: column;
        background-color: #fdeaf1;
        color: rgb(0, 0, 0);
    }
}

</style>
