<template>
    <div>
        ......
        <img :src="Detiallist.images.small" alt="">
        <ul>
            <li class = "castlist" v-for="(cast,index) in Detiallist.casts" :key="index">
                <img :src="cast.avatars.small" alt="">
                <p>{{cast.name}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return{
                Detiallist:{},
            }
        },
        created(){
            axios.get('./data/moviedetail.json')
            .then((res)=>{
                this.Detiallist = res.data;
            }).catch((err)=>{
                console.log('aaa');
            })
        }
    }
</script>

<style lang="scss" scoped>
.castlist{
    width: 2rem;
    float: left;
    img{
        width: 100px;
        height: 130px;
        border-radius: 50% 50%;
    }
}
</style>