<template>
    <el-form :model="memberForm" :rules="rules" ref="memberForm" label-width="200px" style="width: 700px" class="container">
        <el-form-item label="お名前" prop="name">
            <el-input type="text" v-model="memberForm.name" auto-complete="off" class="col-10"></el-input>
<!--            <el-input type="text" v-model="memberForm.firstName" auto-complete="off"></el-input>-->
        </el-form-item>
        <el-form-item label="フリガナ" prop="nameKana">
            <el-input type="text" v-model="memberForm.nameKana" auto-complete="off" class="col-10"></el-input>
<!--           <el-input type="text" v-model="memberForm.firstKanaName" auto-complete="off"></el-input>-->
        </el-form-item>
        <el-form-item label="郵便番号" prop="zip">
            <el-input type="text" v-model="memberForm.zip" auto-complete="off" class="col-5"></el-input>
            <el-button @click="fetchAddress" class="col-4">郵便番号→住所</el-button>
        </el-form-item>
        <el-form-item label="都道府県" prop="pref">
            <el-select v-model="memberForm.pref" placeholder="Select">
                <el-option
                        v-for="item in prefs"
                        :key="item.code"
                        :label="item.name"
                        :value="item.code">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="住所" prop="addr">
                <el-input type="text" v-model="memberForm.addr" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="電話番号（自宅）" prop="tel1">
            <el-input type="tel" v-model="memberForm.tel1" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="電話番号（携帯）" prop="tel2">
            <el-input type="tel" v-model="memberForm.tel2" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="メールアドレス" prop="mail">
            <el-input type="mail" v-model="memberForm.mail" auto-complete="off"></el-input>
        </el-form-item>
<!--        <el-form-item label="パスワード" prop="passwd">-->
<!--            <el-input type="password" v-model="memberForm.passwd" auto-complete="off"></el-input>-->
<!--        </el-form-item>-->
        <el-button type="primary" @click="regist">登録</el-button>
    </el-form>
</template>


<script>
    import axios from 'axios'
    import axiosJsonpAdapter from 'axios-jsonp'

    const ZIPCODE_API_URL = 'http://zipcloud.ibsnet.co.jp/api/search'

    export default {
        name: "MemberForm",
        data() {
            return {
                memberForm: {
                    id: 0,
                    name: "",
                    // firstName: "",
                    nameKana: "",
                    // firstKanaName: "",
                    zip: "",
                    pref: 0,
                    addr : "",
                    tel1: "",
                    tel2: "",
                    mail: "",
                    // passwd : ""
                },
                prefs: [
                    { "code": 0, "name": "選択してください"},
                    { "code": 1, "name": "北海道"},
                    { "code": 2, "name": "青森県"},
                    { "code": 3, "name": "岩手県"},
                    { "code": 4, "name": "宮城県"},
                    { "code": 5, "name": "秋田県"},
                    { "code": 6, "name": "山形県"},
                    { "code": 7, "name": "福島県"},
                    { "code": 8, "name": "茨城県"},
                    { "code": 9, "name": "栃木県"},
                    { "code": 10, "name": "群馬県"},
                    { "code": 11, "name": "埼玉県"},
                    { "code": 12, "name": "千葉県"},
                    { "code": 13, "name": "東京都"},
                    { "code": 14, "name": "神奈川県"},
                    { "code": 15, "name": "新潟県"},
                    { "code": 16, "name": "富山県"},
                    { "code": 17, "name": "石川県"},
                    { "code": 18, "name": "福井県"},
                    { "code": 19, "name": "山梨県"},
                    { "code": 20, "name": "長野県"},
                    { "code": 21, "name": "岐阜県"},
                    { "code": 22, "name": "静岡県"},
                    { "code": 23, "name": "愛知県"},
                    { "code": 24, "name": "三重県"},
                    { "code": 25, "name": "滋賀県"},
                    { "code": 26, "name": "京都府"},
                    { "code": 27, "name": "大阪府"},
                    { "code": 28, "name": "兵庫県"},
                    { "code": 29, "name": "奈良県"},
                    { "code": 30, "name": "和歌山県"},
                    { "code": 31, "name": "鳥取県"},
                    { "code": 32, "name": "島根県"},
                    { "code": 33, "name": "岡山県"},
                    { "code": 34, "name": "広島県"},
                    { "code": 35, "name": "山口県"},
                    { "code": 36, "name": "徳島県"},
                    { "code": 37, "name": "香川県"},
                    { "code": 38, "name": "愛媛県"},
                    { "code": 39, "name": "高知県"},
                    { "code": 40, "name": "福岡県"},
                    { "code": 41, "name": "佐賀県"},
                    { "code": 42, "name": "長崎県"},
                    { "code": 43, "name": "熊本県"},
                    { "code": 44, "name": "大分県"},
                    { "code": 45, "name": "宮崎県"},
                    { "code": 46, "name": "鹿児島県"},
                    { "code": 47, "name": "沖縄県"}
                    ],
                rules: {
                    name: [
                        { required: true, message: '入力必須です', trigger: 'blur' }
                    ],
                    // ame: [
                    //     {
                    //         validator: (rule, value, callback) => {
                    //             if (!value) {
                    //                 return callback(new Error('お名前は必須事項です'));
                    //             }
                    //         },
                    //         trigger: 'blur'
                    //     }
                    // ],
                    nameKana: [
                        { required: true, message: '入力必須です', trigger: 'blur' },
                        { pattern: /^[ァ-ヶー　 ]*$/, message: '全角カタカナで', trigger: 'blur' },

                        // {
                        //     validator: (rule, value, callback) => {
                        //         if (!value) {
                        //             return callback(new Error('フリガナは必須事項です'));
                        //         }
                        //         if(!value.match(/^[ァ-ヶー　]*$/)) {
                        //             return callback(new Error('全角カタカナで入力してください'));
                        //         }
                        //     },
                        //     trigger: 'blur'
                        // }
                    ],
                    // ame: [
                    //     {
                    //         validator: (rule, value, callback) => {
                    //             if (!value) {
                    //                 return callback(new Error('フリガナは必須事項です'));
                    //             }
                    //             if(!value.match(/^[ァ-ヶー　]*$/)) {
                    //                 return callback(new Error('全角カタカナで入力してください'));
                    //             }
                    //         },
                    //         trigger: 'blur'
                    //     }
                    // ],
                    zip: [
                        { required: true, message: '入力必須です', trigger: 'blur' },
                        { pattern: /^[0-9]{7}$/, message: '半角数字7桁', trigger: 'blur' },
                        // {
                        //     validator: (rule, value, callback) => {
                        //         if (!value) {
                        //             return callback(new Error('郵便番号は必須事項です'));
                        //         }
                        //         if(!value.match(/^[0-9]{7}$/)) {
                        //             return callback(new Error('半角数字7桁で入力してください'));
                        //         }
                        //     },
                        //     trigger: 'blur'
                        // }
                    ],
                    pref: [
                        { required: true, message: '入力必須です', trigger: 'blur' },
                        // { type : "number", min: 1, message: '選択してください', trigger: 'change' },
                    //     {
                    //         validator: (rule, value, callback) => {
                    //             if (value === 0) {
                    //                 return callback(new Error('都道府県を選択してください'));
                    //             }
                    //         },
                    //         trigger: 'blur'
                    //     }
                    ],
                    addr: [
                        { required: true, message: '入力必須です', trigger: 'blur' },
                        //     {
                    //         validator: (rule, value, callback) => {
                    //             if (!value) {
                    //                 return callback(new Error('住所は必須事項です'));
                    //             }
                    //         },
                    //         trigger: 'blur'
                    //     }
                    ],
                    tel1: [
                        { pattern: /^[0-9]{10}$|^[0-9]{11}$/, message: '半角数字で入力してください', trigger: 'blur' },
                    //     {
                    //         validator: (rule, value, callback) => {
                    //             if (!value) {
                    //                 return callback(new Error('電話番号は必須事項です'));
                    //             }
                    //             if(!(value.match(/^[0-9]{10}$|^[0-9]{11}$/))) {
                    //                 return callback(new Error('半角数字で入力してください'));
                    //             }
                    //         },
                    //         trigger: 'blur'
                    //     }
                    ],
                    tel2: [
                        { pattern: /^[0-9]{10}$|^[0-9]{11}$/, message: '半角数字で入力してください', trigger: 'blur' },
                    ],
                    mail: [
                        { type: "email", message: 'メールアドレスが間違っています', trigger: 'blur' },
                        //     {
                    //         validator: (rule, value, callback) => {
                    //             if (!value) {
                    //                 return callback(new Error('メールアドレスは必須事項です'));
                    //             }
                    //             if(!value.match(/^[\w_\-\.]+@[\w\-\.]+\.\w{2,}$/)) {
                    //                 return callback(new Error('半角英数字で入力してください'));
                    //             }
                    //         },
                    //         trigger: 'blur'
                    //     }
                    ],
                    // passwd: [
                    //     { required: true, message: '入力必須です', trigger: 'blur' },
                    // ],
                }
            }
        },
        methods : {
            regist() {
                this.$refs['memberForm'].validate((valied) => {
                    if(valied) {
                        axios.post('https://kinokolabo.herokuapp.com/member/regist', this.memberForm)
                            .then(res => {
                                console.log("登録完了 idは" + res.data + "です")
                                this.$router.push("/student/regist?guardian=" + res.data)
                            })
                            .catch(error => {
                                alert("エラー発生:" + error)
                            })
                    }
                });
            },
            async fetchAddress() {
                // 郵便番号のバリデーションチェック
                const reg = /^\d{7}$/
                if (!reg.test(this.memberForm.zip)) return

                // 住所apiを叩く
                const res = await axios.get(ZIPCODE_API_URL, {
                    adapter: axiosJsonpAdapter,
                    params: {
                        zipcode: this.memberForm.zip
                    }
                })

                // 存在しない郵便番号でapiを叩くと200以外のステータスが返ってくる
                if (res.status !== 200) return

                // 返却されたデータを挿入する
                this.memberForm.pref = res.data.results[0].address1
                this.memberForm.addr = res.data.results[0].address2 + res.data.results[0].address3
            }
        }
    }
</script>

<style scoped>
    el-button {

    }

</style>
