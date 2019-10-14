<template>
    <div>
        <my-swipe></my-swipe>
    </div>
</template>

<script>
    import 'vue-swipe/dist/vue-swipe.css';
    import MySwipe from '@/components/MySwipe';
    import { Swipe, SwipeItem } from 'vue-swipe';
    export default {
        components:{
            Swipe,
            SwipeItem,
            MySwipe,
        }
    }
</script>

<style lang="scss" scoped>

</style>