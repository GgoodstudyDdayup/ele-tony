<template>
    <div>
    <div :class=" aa==false&&bb==false ? '':'modal'"></div>
    </div>
</template>
<script>
export default { 
    props:['aa','bb'],
    methods:{
    }
}
</script>
<style scoped>
.modal{
    position:fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 3;
    background: rgba(0,0,0,.4);
    transition: all .3s ease-in-out
}
</style>