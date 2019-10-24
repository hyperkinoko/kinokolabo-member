<template>
    <div id="signin" class="container">
        <div id="logo">
            <img src="../assets/300_icon.png">
        </div>
        <h2>新規会員登録</h2>
        <el-form :model="registForm" :rules="rules" ref="registForm">
            <div class="error">{{error}}</div>
            <el-form-item prop="mail">
                <div><label for="mail">メールアドレス</label></div>
                <el-input type="text" v-model="registForm.mail" id="mail"></el-input>
                <!--           <el-input type="text" v-model="studentForm.firstKanaName" auto-complete="off"></el-input>-->
            </el-form-item>
            <el-form-item prop="pass1">
                <div><label for="pass1">パスワード</label></div>
                <el-input type="password" v-model="registForm.pass1" id="pass1"></el-input>
                <!--           <el-input type="text" v-model="studentForm.firstKanaName" auto-complete="off"></el-input>-->
            </el-form-item>
            <el-form-item prop="pass2">
                <div><label for="pass2">パスワード(確認）</label></div>
                <el-input type="password" v-model="registForm.pass2" id="pass2"></el-input>
                <!--           <el-input type="text" v-model="studentForm.firstKanaName" auto-complete="off"></el-input>-->
            </el-form-item>
            <div><button @click="signup">登録</button></div>
        </el-form>
        <div>会員登録がお済みの方は<router-link to="/signin">こちら</router-link></div>
    </div>
</template>

<script>
    import firebase from 'firebase'

    export default {
        name: "Signin",
        data() {
            return {
                registForm: {
                    mail: null,
                    pass1: null,
                    pass2: null,
                },
                error: null,
                rules: {
                    mail: [
                        {required: true, message: '入力必須です', trigger: 'blur'}
                    ],
                    pass1: [
                        {required: true, message: '入力必須です', trigger: 'blur'}
                    ],
                    pass2: [
                        {required: true, message: '入力必須です', trigger: 'blur'}
                    ],
                }
            }
        },
        methods: {
            signup : function () {
                if(this.registForm.pass1 !== this.registForm.pass2) {
                    this.error = "パスワードが一致しません"
                    return
                }
                firebase.auth().createUserWithEmailAndPassword(this.registForm.mail, this.registForm.pass1)
                    .then(user => {
                        alert('Create account : ', user.email)
                    })
                    .catch(error => {
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

    label {
        margin: 0;
        font-size: medium;
    }

    .el-form-item {
        text-align: left;
        padding-bottom: 20px;
        margin-bottom: 5px;
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
