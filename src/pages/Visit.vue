<template>
    <div>
        <button @click="joinMokumoku" class="el-button">参加</button>
        <button @click="leaveMokumoku" class="el-button">退室</button>
        <button @click="joinFree" class="el-button">参加（初回無料）</button>
        <button @click="leaveFree" class="el-button">退室（初回無料）</button>
        <p v-if="result !== null">{{result}}</p>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Visit",
        data() {
            return {
                visitModel: {
                    studentId: this.$route.query.id,
                    joinOrLeave: "JOIN",
                    courseId: 1,
                },
                result : null
            }
        },
        methods: {
            joinMokumoku() {
                this.send()
            },

            leaveMokumoku() {
                this.visitModel.joinOrLeave = "LEAVE"
                this.send()
            },

            joinFree() {
                this.visitModel.joinOrLeave = "JOIN"
                this.visitModel.courseId = 2
                this.send()
            },

            leaveFree() {
                this.visitModel.joinOrLeave = "LEAVE"
                this.visitModel.courseId = 2
                this.send()
            },

            send() {
                axios.post("https://kinokolabo.herokuapp.com/student/visit", this.visitModel)
                    .then(res => {
                        console.log("完了")
                        this.result = res.data;
                    })
                    .catch(error => {
                        alert("エラー発生:" + error)
                    })
            }
        }
    }
</script>

<style scoped>

</style>