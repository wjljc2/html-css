<template>
    <div>
        <ul id="movie-box">
            <li class="movie-list" v-for="(obj,index) in movieList" :key="index">
                <img :src="obj.images.medium" alt="">
                <div>
                    <h2>{{obj.original_title}}</h2>
                    <p>{{obj.collect_count}}已收藏</p>
                    <p>演员:<span v-for="(actor,index) in obj.casts" :key="index">{{actor.name}} </span></p>
                    <p>上映时间:{{obj.year}}</p>
                </div>
            </li>
        </ul>
        <img class = "loading" v-show="isShow" src="@/assets/img/loading.gif" alt="">
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                movieList:[],
                isShow:false,
                flag:true
            }
        },
        methods:{
            handScroll(){
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
                var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
                if(scrollTop + windowHeight - scrollHeight > -1 && this.flag == true){
                    this.isShow=true;
                    this.flag = false;
                    axios.get('./data/movie10.json')
                    .then((res)=>{
                        console.log(res.data);
                        this.movieList = [...this.movieList,...res.data.subjects];
                        this.isShow=false;
                        this.flag = true;
                    }).catch((res)=>{
                        console.log('aaa')
                    })
                }
            }
        },
        created(){
            // 跨域 域名(baidu.com) 端口(8080 8081) 协议(http https) 有一个不同即为跨域 ，都相同才是同源
            // 解决跨域 第三方服务器代理 jsonbird
            // axios.get('https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/in_theaters?start=0&count=10')
            axios.get('./data/movie0.json')
            .then((res)=>{
                console.log(res.data);
                this.movieList = res.data.subjects;
            }).catch((res)=>{
                console.log('aaa');
            })
        },
        mounted(){
            window.addEventListener('scroll',this.handScroll,true);
        },
    }
</script>

<style lang="scss" scoped>
#movie-box{
    padding: 0.2rem;
    .movie-list{
        display:flex;
        img{
            width: 2rem;
            margin-right: 0.2rem;
        }
        margin-bottom: 0.2rem;
        border-bottom: 1px solid #000;
    }
}
.loading{
    width: 3rem;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
</style>