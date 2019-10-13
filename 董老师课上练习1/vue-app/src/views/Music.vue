<template>
    <div>
        <ul class = 'musiclist'>
            <li v-for = "(obj,index) in musiclist" :key="index" @click="godetail()">
                <img :src="obj.bg" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return{
                musiclist:[]
            }
        },
        created(){
            axios.get('./data/musiclist.json')
            .then((res)=>{
                this.musiclist = res.data.albums;
            }).catch((res)=>{
                alert('服务器错误');
            })
        },
        methods:{
            godetail(){
                this.$router.push({
                    path:'/musicdetail',
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .musiclist{
        display:flex;
        flex-wrap: wrap;
        li{
            width: 50%;
            img{
                width: 100%;
                display:block;
            }
        }
    }
</style>