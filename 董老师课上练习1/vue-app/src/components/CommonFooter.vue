<template>
    <div id = "footer" :style="{background:$store.state.color}">
        <router-link v-for="(obj,index) in menu" :key="index" @click.native="$store.commit('change',{title:obj.title,color:obj.color})" :to=obj.path >{{obj.title}}</router-link>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                menu:[
                    {
                        title:'电影',
                        path:'/movie',
                        color:'red',
                    },
                    {
                        title:'书籍',
                        path:'/book',
                        color:'orange',
                    },
                    {
                        title:'音乐',
                        path:'/music',
                        color:'green',
                    },
                    {
                        title:'图片',
                        path:'/image',
                        color:'yellow',
                    }
                ]
            }
        },
        created(){
            this.menu.forEach((obj,index)=>{
                if(this.$route.path == obj.path){
                    this.$store.commit('change',{title:obj.title,color:obj.color})
                }
            })
        }
        
    }
</script>

<style lang="scss" scoped>
    #footer{
        height: 50px;
        line-height: 50px;
        background: #ff0000;
        position: fixed;
        bottom:0;
        width: 100%;
        display: flex;
        
        a{
            flex: 1;
            text-align: center;
            color: black;
            &.router-link-exact-active{
                color:aliceblue;
            }
        }
    }
</style>