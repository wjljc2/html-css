<template>
    <div class = "swipe-box">
        <transition-group name = "fade" tag = "ul">
            <li v-for="(obj,index) in imgList" :key="index" v-show="index == nowIndex">
                <img :src="obj" alt="">
            </li>
        </transition-group>
        <button @click = "fn()">click 回传</button>


    </div>
</template>

<script>
    export default {
        data(){
            return{
                nowIndex:0,
                // imgList:[
                //     '/img/photo/1.jpg',
                //     '/img/photo/2.jpg',
                //     '/img/photo/3.jpg'
                // ]
            }
        },
        props:['imgList','mode','speed'],
        created(){
            setInterval(()=>{
                this.nowIndex++;
                if(this.nowIndex == this.imgList.length){
                    this.nowIndex = 0;
                }
            },this.speed)
        },
        methods:{
            fn(){
                // $emit 子组件对父组件传值
                this.$emit('xx','111111');
            }
        }
    };
</script>

<style lang="scss" scoped>
    .swipe-box{
        position: relative;
        li{
            width: 100%;
            position: absolute;
            left: 0;
            top: 0;
        }
        img{
            width: 100%;
            height: 250px;
        }
    }
    .fade-enter{
        transform: translateX(-100%);
    }
    .fade-enter-active{
      transition: transform 1s linear ;
    }
    .fade-enter-to{
        transform: translateX(0%);
    }
    .fade-leave{
        transform: translateX(0%);
    }
    .fade-leave-active{
        transition: transform 1s linear ;
    }
    .fade-leave-to{
        transform: translateX(100%);
    }
    
</style>