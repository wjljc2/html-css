<template>
    <v-touch v-on:swipeleft = "next()" v-if="show" class = "photo-detail" :style ="{'background-image':'url('+$store.state.photoList[index].src+')'}" @click="goPhoto">

    </v-touch>
</template>

<script>
    import Vue from 'vue';
    import VueTouch from 'vue-touch';
    Vue.use(VueTouch, {name: 'v-touch'})
    export default {
        data(){
            return{
                index:this.$route.query.index,
                show:false,
            }
        },
        beforeMount(){
            if(this.$store.state.photoList.length == 0){
                this.goPhoto();
            }else{
                this.show = true;
            }
        },
        methods: {
            goPhoto(){
                this.$route.push('/image');
            },
            next(){  // 显示下一张图
                this.index++;
                if(this.index == this.$store.state.photoList.length){
                    this.index = 0;
                }
            },
            back(){  // 显示上一张图
                this.index--;
                if(this.index == 0){
                    this.index = this.$store.state.photoList.length;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .photo-detail{
        background: #000 url("http://localhost:8080/img/photo/1.jpg") no-repeat center center;
        background-size:contain;
        // width:100%;
        // height:100%;
        position: absolute;
        left:0px;
        top:1rem;
        right:0px;
        bottom:1rem;
        color:#f00;
    }
</style>