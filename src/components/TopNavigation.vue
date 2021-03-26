<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white">
                <div class="col-12 text-right text-md-center top-toggler-icon">
                    <button class="navbar-toggler border-white" data-toggle="collapse" data-target="#nav-menu-4">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-collapse text-center collapse" id="nav-menu-4">
                        <ul class="navbar-nav d-inline-flex">
                            <li class="nav-item"><a href="#" class="nav-link">入退室記録</a></li>
                            <li class="nav-item"><a href="#" class="nav-link">会員情報</a></li>
<!--                            <li class="nav-item"><a href="#" class="nav-link">旬の料理特集</a></li>-->
<!--                            <li class="nav-item"><a href="#" class="nav-link">ランキング</a></li>-->
                        </ul>
                    </div>
                </div>
    </nav>
</template>

<script>
    export default {
        name: "TopNavigation"
    }
</script>

<style scoped>
    nav {
        padding: 0;
    }
</style>
