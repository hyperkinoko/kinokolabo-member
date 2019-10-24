<template>
    <div class="logo-container container">
        <div>
            <a href="#">
                <img class="logo" src="../assets/300_logo.png" alt="キノコラボ"/>
            </a>
        </div>
        <div>
            <a href="line://ti/p/@zbj3840q" target="_blank">
                <img class="sns-icon" src="../assets/LINE_APP_typeA.png"/>
            </a>
            <a href="https://www.facebook.com/kinokolabo.kinokodata/" target="_blank">
                <img class="sns-icon" src="../assets/FB-fLogo-Blue-broadcast-2.png"/>
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
    .sns-icon {
        width: 40px;
        height: 40px;
        margin: 0 15px 0 0;
    }

    @media screen and (max-width: 600px){
        .sns-icon {
            width: 30px;
            height: 30px;
            margin: 0 5px 0 0;
        }
    }

    .logo {
        height: 80px;
    }

    .logo-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    @media screen and (max-width: 480px){
        .logo-container {
            padding-left: 5px;
            padding-right: 5px;
        }
    }

</style>
