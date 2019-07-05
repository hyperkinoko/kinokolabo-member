<template>
    <div class="logo-container container">
        <div>
            <a href="#">
                <img class="logo" src="../assets/300_logo.png" alt="キノコラボ"/>
            </a>
        </div>
        <div>
            <a href="line://ti/p/@zbj3840q" target="_blank">
                <img class="logo-icon" src="../assets/LINE_APP_typeA.png"/>
            </a>
            <a href="https://www.facebook.com/kinokolabo.kinokodata/" target="_blank">
                <img class="logo-icon" src="../assets/FB-fLogo-Blue-broadcast-2.png"/>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopHeader"
    }
</script>

<style scoped>
    .logo-icon {
        width: 30px;
        height: 30px;
        margin: 10px;
    }
    .logo-icon:last-child {
        margin-right: 0;
    }

    .logo {
        height: 80px;
    }

    .logo-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

    }

</style>