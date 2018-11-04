<template>
    <h1>123</h1>
</template>
<script>
export default {
    data(){

    },
    methods: {
        show() {
            this.$http({
                method: 'get',
                url: '/user',
                data: {
                    name: 'virus'
                }
            })
        }
    }
}
</script>
