<template>
    <main>
        <h1>利用規約</h1>
        <h2>承諾</h2>
        <p>
            本規約は、「きのこでーた」より提供するサービスである「キノコラボ」及び「ほうかご もくもく会」ご利用にあたって、ご利用者様に同意していただく規約となります。
        </p>
        <p>
            本規約に同意がいただけない場合は、「キノコラボ」及び「ほうかご もくもく会」をご利用いただけません。<br>
            また、同意成立後にご利用者様が本規約に反した場合は、サービスの提供を停止し、ご入室をお断りさせていただきます。
        </p>

        <h2>提供するサービス</h2>
        <h3>キノコラボ</h3>
        <p>
            「キノコラボ」は利用者様にプログラミング言語の習得を目的とした指導を行うサービスです。
        </p>
        <h3>ほうかご もくもく会</h3>
        <p>
            「ほうかご もくもく会」は 利用者様に安全で落ち着いた学習環境を提供するサービスです。
        </p>

        <h2>禁止事項</h2>
        <p>
            ご利用者様みなさまが快適にご利用していただけるように、以下を禁止事項とします。<br>
            禁止事項を行われた場合は、注意の後、すみやかに退室していただきます。<br>
            また、その際、既にお支払いしていただいた利用料金は、返金いたしかねます。
        </p>
        <p>
            禁止事項を繰り返される場合には、入室をお断りします。
        </p>
        <h3>禁止事項</h3>
        <ul>
            <li>大きな声で騒ぐこと</li>
            <li>みだりに立ち歩くこと</li>
            <li>他のご利用者様への暴言・暴力</li>
            <li>他のご利用者様の持ち物を許可なく触ること</li>
            <li>利用を許可していない場所に立ち入ること</li>
            <li>当教室の備品を汚損すること</li>
            <li>その他、他のご利用者様、近隣住民の方の迷惑になる行為</li>
        </ul>

        <h2>免責事項</h2>
        <p>
            以下に関しましては、程度や金額の大小にかかわらず、当方では一切責任を負いません。<br>
            貴重品は必ずご自身で管理してください。
        </p>
        <ul>
            <li>ご利用者様同士の喧嘩・トラブル</li>
            <li>ご利用者様の持ち物の紛失・盗難</li>
        </ul>

        <h2>規約改正</h2>
        <p>
            本規約に改正があった場合は、速やかにご利用者様に通知し、同意のご確認をいたします。
        </p>
        <p>
            改正内容に同意がいただけない場合は、サービスの提供を停止させていただきます。
        </p>

        <h2>期間・解除</h2>
        <p>本規約は、2019年7月1日より効力を持ちます。</p>
        <p>本規約は、ご利用者様が登録を解除されるか、「キノコラボ」及び「ほうかご もくもく会」のサービスが終了するまで、当方とご利用者様の間で有効であるとします。</p>
        <el-button @click="next">承諾します</el-button>
    </main>
</template>

<script>
    export default {
        name: "Terms",
        methods: {
            next() {
                this.$router.push("/member/regist")
            }
        }
    }
</script>

<style scoped>
    main {
        font-size: 30px;
    }

</style>