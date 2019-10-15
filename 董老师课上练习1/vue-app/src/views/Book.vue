<template>
    <div>
        <my-swipe :imgList = "imgList" mode = "fade" speed = "2000" @xx = "aa">

        </my-swipe>
    </div>
</template>

<script>
    import 'vue-swipe/dist/vue-swipe.css';
    import MySwipe from '@/components/MySwipe';
    import { Swipe, SwipeItem } from 'vue-swipe';

    export default {
        data(){
            return {
                imgList:[
                    '/img/photo/1.jpg',
                    '/img/photo/2.jpg',
                    '/img/photo/3.jpg'
                ]
            }
        },
        components:{
            Swipe,
            SwipeItem,
            MySwipe,
        },
        methods:{
            aa(arg){
                console.log(arg)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .my-swipe{
        height: 200px;
        color:#fff;
        font-size:30px;
        text-align: center;
    }
</style>