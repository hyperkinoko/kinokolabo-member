<template>
    <footer>
        <div id="sitemap">
            <ul>
                <li><router-link to="/">トップ</router-link></li>
                <li><router-link to="/policy">プライパシーポリシー</router-link></li>
                <li><router-link to="/terms">利用規約</router-link></li>
            </ul>
        </div>
        <p class="small">© 2018 きのこでーた All Rights Reserved.</p>
    </footer>
</template>

<script>
    export default {
        name: "MyFooter"
    }
</script>

<style scoped>
    footer {
        margin: 0;
        text-align: center;
        padding: 40px 30px 20px 30px;
        background-color: #f2ef7a;
    }

    ul {
        list-style: none;
        padding-left: 0;
    }

</style>
