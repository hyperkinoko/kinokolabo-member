<template>
    <el-form :model="studentForm" :rules="rules" ref="studentForm" label-width="200px" style="width: 700px;">
        <p><el-checkbox v-model="sameAs" @change="fetchMemberId">ご本人</el-checkbox></p>
        <div v-if="!sameAs">
            <el-form-item label="お名前" prop="name">
                <el-input type="text" v-model="studentForm.name" auto-complete="off"></el-input>
    <!--            <el-input type="text" v-model="studentForm.firstName" auto-complete="off"></el-input>-->
            </el-form-item>
            <el-form-item label="フリガナ" prop="nameKana">
                <el-input type="text" v-model="studentForm.nameKana" auto-complete="off"></el-input>
    <!--           <el-input type="text" v-model="studentForm.firstKanaName" auto-complete="off"></el-input>-->
            </el-form-item>
            <el-form-item label="郵便番号" prop="zip">
                <el-input type="text" v-model="studentForm.zip" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="都道府県" prop="pref">
                <el-select v-model="studentForm.pref" placeholder="Select">
                    <el-option
                            v-for="item in prefs"
                            :key="item.code"
                            :label="item.name"
                            :value="item.code">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="住所" prop="addr">
                    <el-input type="text" v-model="studentForm.addr" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="電話番号" prop="tel">
                <el-input type="tel" v-model="studentForm.tel" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="メールアドレス" prop="mail">
                <el-input type="mail" v-model="studentForm.mail" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-checkbox v-if="!sameAs" v-model="studentForm.notice">入退室を保護者さまに通知する</el-checkbox>
            </el-form-item>
<!--        <el-form-item label="パスワード" prop="passwd">-->
<!--            <el-input type="password" v-model="studentForm.passwd" auto-complete="off"></el-input>-->
<!--        </el-form-item>-->
        </div>
        <el-form-item label="生年月日" prop="bDay">
        <el-select v-model="studentForm.bYear" class="col-3" @change="fetchDay" style="width: 8em">
            <el-option v-for="item in getYears()"
                       :key="item.value"
                       :label="item.value"
                       :value="item.value">
            </el-option>
        </el-select>年
            <el-select v-model="studentForm.bMonth" class="col-3" @change="fetchDay" style="width: 8em;">
                <el-option v-for="item in getMonths()"
                           :key="item.value"
                           :label="item.value"
                           :value="item.value">
                </el-option>
            </el-select>月
            <el-select v-model="studentForm.bDay" class="col-3" :disabled="studentForm.bYear === '' || studentForm.bMonth === ''" style="width: 8em">
                <el-option v-for="item in getDays(studentForm.bYear, studentForm.bMonth)"
                           :key="item.value"
                           :label="item.value"
                           :value="item.value">
                </el-option>
            </el-select>日
        </el-form-item>
        <el-button style="float: right" type="primary" @click="regist">登録</el-button>
    </el-form>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "StudentForm",
        data() {
            return {
                sameAs : false,
                studentForm: {
                    guardianId : this.$route.query.guardian,
                    memberId : 0,
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
                    notice : true,
                    bYear : "",
                    bMonth : "",
                    bDay : "",
                    // passwd : ""
                },
                years: [],
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
                        { type : "number", min: 1, message: '選択してください', trigger: 'change' },
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
                    tel: [
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
                    bYear: [
                        {required: true, message: '入力必須です', trigger: ' blur'}
                    ],
                    bMonth: [
                        {required: true, message: '入力必須です', trigger: ' blur'}
                    ],
                    bDay: [
                        {required: true, message: '入力必須です', trigger: ' blur'}
                    ],

                    // passwd: [
                    //     { required: true, message: '入力必須です', trigger: 'blur' },
                    // ],
                }
            }
        },
        methods : {
            fetchMemberId() {
                if(this.sameAs) {
                    this.studentForm.memberId = this.$route.query.guardian
                    this.studentForm.notice = false
                } else {
                    this.studentForm.memberId = 0
                    this.studentForm.notice = true
                }
            },
            fetchDay() {
                const year = this.studentForm.bYear
                const month = this.studentForm.bMonth
                const day = this.studentForm.bDay
                if(year !== '' && month !== '' && day !== '') {
                    const lastDay = new Date(year, month, 0).getDate()
                    if(day > lastDay) {
                        this.studentForm.bDay = 1
                    }
                }
            },
            getYears() {
                let years = new Array()
                const thisYear = new Date().getFullYear()
                for(let y = 1920; y < thisYear; y++) {
                    years.push({"value": y})
                }
                return years
            },
            getMonths() {
                let months = new Array()
                for(let m = 1; m <= 12; m++) {
                    months.push({"value": m})
                }
                return months
            },
            getDays(year, month) {
                let days = new Array()
                const lastDay = new Date(year, month, 0).getDate()
                for(let d = 1; d <= lastDay; d++) {
                    days.push({"value": d})
                }
                return days
            },
            regist() {
                this.$refs['studentForm'].validate((valied) => {
                    if(valied) {
                        axios.post('https://kinokolabo.herokuapp.com/student/regist', this.studentForm)
                            .then(res => {
                                console.log("登録完了 idは" + res.data + "です")
                                this.$router.push("/qrcode?id=" + res.data)
                            })
                            .catch(error => {
                                alert("エラー発生:" + error)
                            })
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>