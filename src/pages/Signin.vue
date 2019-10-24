<template>
    <div id="signin" class="container">
        <div id="logo">
            <img src="../assets/300_icon.png">
        </div>
        <h2>会員ページログイン</h2>
        <form>
            <div class="error">{{error}}</div>
            <div class="form-item">
                <div><label for="mail">メールアドレス</label></div>
                <div><input type="text" v-model="signinForm.mail" id="mail"></div>
                <!--           <el-input type="text" v-model="studentForm.firstKanaName" auto-complete="off"></el-input>-->
            </div>
            <div class="form-item">
                <div><label for="pass">パスワード</label></div>
                <div><input type="password" v-model="signinForm.pass" id="pass"></div>
                <!--           <el-input type="text" v-model="studentForm.firstKanaName" auto-complete="off"></el-input>-->
            </div>
            <div><button @click="signin">ログイン</button></div>
        </form>
        <div>会員登録がまだの方は<router-link to="/signup">こちら</router-link></div>
    </div>
</template>

<script>
    import firebase from 'firebase'

    export default {
        name: "Signin",
        data() {
            return {
                signinForm: {
                    mail: null,
                    pass: null
                },
                error: null
            }
        },
        methods: {
            signin : function () {
                firebase.auth().signInWithEmailAndPassword(this.signinForm.mail, this.signinForm.pass)
                    .then(user => {
                            alert("success" + user)
                            this.$router.push('/')
                        },
                        error => {
                            this.error = error.message
                        })
            }
        }
    }
</script>

<style scoped>
    #signin {
        text-align: center;
    }

    @media screen and (min-width: 500px){
        #signin {
            width: 450px;
        }
    }

    #logo img{
        width: 200px;
    }

    @media screen and (max-width: 480px){
        #logo img {
            display: none;
        }
    }

    h2 {
        margin: 30px 0 30px 0;
    }

    input {
        border: 1px solid gray;
        box-shadow: none;
        border-radius: 10px;
        font-size: larger;
        width: 100%;
        padding: 10px 20px;
    }

    @media screen and (width: 480px){
        input {
            font-size: inherit;
            padding: 10px;
        }

    }

    .form-item {
        text-align: left;
        padding-bottom: 20px;
    }

    form {
        padding: 10px 30px;
    }

    @media screen and (max-width: 480px){
        form {
            padding: 10px 5px;
        }
    }

    .error {
        color: red;
        font-size: smaller;
        text-align: left;
        margin-bottom: 10px;
    }

    button {
        border-radius: 10px;
        background-color: #2057A7;
        color: white;
        padding: 10px 50px;
        margin: 10px 0;
    }

</style>
