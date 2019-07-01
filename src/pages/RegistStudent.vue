<template>
    <div class="container">
        <h2>受講生さま</h2>
        <student-form></student-form>
    </div>
</template>

<script>
    import StudentForm from "@/components/StudentForm";

    export default {
        name: "RegistStudent",
        components: {StudentForm}
    }
</script>

<style scoped>

</style>