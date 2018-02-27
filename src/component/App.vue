<template>
    <div>
        {{val}}
        <router-view></router-view> 
    </div>
</template>

<script>
    export default {
        data () {
            return {
                val:'vue脚手架测试1111111'
            }
        }
    }
</script>

<style scoped>

</style>