<template>
    <div>
        <img :src="'http://kinokolabo.herokuapp.com/qrcode/create?id=' + id">
    </div>
</template>

<script>
    export default {
        name: "QRCode",
        data() {
            return {
                id: this.$route.query.id
            }
        }
    }
</script>

<style scoped>

</style>