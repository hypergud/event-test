<template>
    <div class="card-wrapper">
        <ul>
            <li>
                <div class="card top" style="border-top:1px solid rgb(218, 218, 218);width:580px">
                    <h3>Home</h3>
                </div>
                <div class="card">
                    <div class="block card-left">
                        <div class="profile">
                            <img class="card-user-img" src="https://img.icons8.com/plumpy/48/000000/user-male-circle.png" alt="Card profile image">
                        </div>
                    </div>
                    <div class="block card-right">
                        <div class="card-right-top">
                            <input type="text" value="What's happening?">
                            <button class="bt-twit"><h3>Twit</h3></button>
                        </div>
                        <div class="card-right-middle card-body">
                        </div>
                    </div>
                </div>
            </li>
            <li v-for="(item,idx) in items" :key="idx" :item="item">
                <div class="card">
                    <div class="block card-left">
                        <!-- <router-link style="text-decoration: none" to="/detail/:id" > -->
                        <router-link style="text-decoration: none" to="/detail/:id" >
                        <div class="profile">
                            <img class="card-profile-img" :src="item.owner.picture" alt="Card profile image">
                        </div>
                        </router-link>
                    </div>
                    <div class="block card-right">
                        <router-link style="text-decoration: none" to="/detail/:id" >
                        <div class="card-right-top">
                            <h3 class="card-nickname">{{item.owner.firstName}}</h3>
                            <h4 class="card-id">@{{item.owner.id}}</h4>
                            <h4 class="card-time">{{item.publishDate}}</h4>
                            <a href="#" class="bt-more">•••</a>
                        </div>
                        </router-link>
                        <div class="card-right-middle card-body">
                            <p class="card-text">{{item.text}}</p>
                            <div v-if="Math.random() < 0.8" class="card-img-box">
                                <img class="card-img-top" :src="item.image">
                            </div>
                        </div>
                        <div class="buttons card-right-bottom" v-for="(btitem,idx) in btitems" :key="idx" :btitem="btitem">
                            <a href="#" class="twitter-bt bt01" @click="btReply">
                                <img :src="btitem.bt01img">
                            </a>
                            <a href="#" class="twitter-bt bt02" @click="btRetweet">
                                <img :src="btitem.bt02img">
                            </a>
                            <div class="btlike">
                                <a href="#" class="twitter-bt bt03" @click="btLike">                                
                                    <img :src="btitem.bt03img"> 
                                </a><h5>{{item.likes}}</h5>
                            </div>
                            
                            <a href="#" class="twitter-bt bt04" @click="btShare">
                                <img :src="btitem.bt04img">
                            </a>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
// import Buttons from '@/components/Buttons.vue';

export default {
    name: 'TwitterList',
    props: {
        msg: String,
        btitem: Object
    },
    methods : {
      imgResize(){
          alert('imgResize clicked');
      },
      btMore(){
          alert('btMore clicked');
      },
      btReply(){
          alert('btReply clicked');
      },
      btRetweet(){
          alert('btRetweet clicked');
      },
      btLike(){
          alert('btLike clicked');
      },
      btShare(){
          alert('btShare clicked');
      }
  },
    components: {
        // Buttons
    },
    data(){
        return{  
            items : [],
            btitems : [
            {
                bt01img: 'https://img.icons8.com/small/32/000000/twitter-reply.png',
                bt02img: 'https://img.icons8.com/small/32/000000/retweet.png',
                bt03img: 'https://img.icons8.com/material-outlined/32/000000/filled-like.png',
                bt04img: 'https://img.icons8.com/small/32/000000/share-3.png'
            }
        ]
        }
    },
    mounted(){
        //ajax with axios 
        axios.get('https://dummyapi.io/data/api/user/0F8JIqi4zwvb77FGz6Wt/post?limit=10', {
        // axios.get('https://dummyapi.io/data/api/post?limit=10', {
            // axios.get('https://dummyapi.io/data/api/user?limit=10', {
            'headers' : {
                "app-id" : '60c24918d4c558c1cbd6bc74'
            }
        })
        .then((res) => {
            this.items = res.data.data;
            console.log(this.items);
        });
    }
}
</script>

<style scoped>
.card-wrapper{
    margin:0 auto;
    max-width:600px;
}

ul, li{
    list-style: none;
}
.card{
    margin:0 auto;
    display: flex;
    flex-direction: row;
    border-radius: 0;
    width: 600px;
    border: 1px solid rgb(218, 218, 218);
    border-top-width: 0px;
    /* background-color: azure; */
}

.card-user-img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.5;
}

input {
    border:none;
    font-size: 17px;
    color: gray;
    width: 500px;
    width: 400px;
    height: 45px;
    /* padding-top: 20px; */
    /* background-color: pink; */
}
input:focus {outline:none;}

.bt-twit{
    border: none;
    background-color: #00caee;
    width: 80px;
    height: 30px;
    border-radius: 30%;
    margin-left: auto;
    /* border:5px solid blue; */
  border-radius: 40px;
  color:black;
  padding: 10px; 
  width: 80px;
  height: 30px; 
  margin-top: 10px;
  /* cursor: pointer; */
  opacity: 0.5;
}

.bt-twit h3{
    font-weight: 600;
    color: #fff;
    position: relative;
    top: -20px;
}

.top{
    padding-left: 20px;
    height: 50px;
}

.top h3{
    position: relative;
    top: -8px;
}
.card-left{
    width: 70px;
    height: auto;
    /* background-color: yellow; */
    position: relative;
}

.profile{
    width: 50px;
    height: 50px; 
    border-radius: 70%;
    overflow: hidden;
    position: absolute;
    position: relative;
    left: 15%;
    margin: 10px 0;
}

.card-profile-img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-right{
    /* width: 510px; */
    /* width: 520px; */
    height: auto;
    /* background-color: green; */
}

.card-right-top{
    /* height: 20px; */
    height: 20px;
    /* background-color: pink; */
    margin: 10px 10px 0;
    display: flex;
    flex-direction: row;
    
}

.card-nickname{
    font-size: 20px;
    line-height: 20px;
    font-weight: 700;
    width: auto;
    margin-right: 5px;
    position: relative;
    top: -20px;
}

.card-id, .card-time{
    font-size: 15px;
    line-height: 22px;
    font-weight: 400;
    width: auto;
    margin-right: 5px;
    color: gray;
    position: relative;
    top: -20px;
}

.bt-more{
    color: black;
    text-decoration: none;
    margin-left: auto;
}

.card-right-middle{
    /* background-color: violet; */
    margin: 10px 10px 0px;
    padding: 0;
    /* padding-bottom: 5px; */
    width: 505px;
}

.card-text{
    margin: 5px 0 3px;
    margin: 5px 0 5px;
    margin-top: -5px;
}

.card-img-box{
    width: 505px;
    width: 505px;
    max-height: 300px;
    max-height: 300px;
    overflow: hidden;
    border-radius: 15px;
    /* background-color: gainsboro; */
    
}
.card-img-top{
    width: 505px;
    height: auto;
    /* object-fit:cover; */
}

.card-img-top img{
    object-fit:cover;
}

.card-right-bottom{
    /* background-color:burlywood; */
    margin: 2px 10px 0;
    margin: 6px 10px 0;
    padding: 0;
    padding-bottom: 5px;
    width: 450px;
    height: 20px;
    display: flex;
    justify-content: space-between;
}

.twitter-bt img{
    width: 18px;
}

.btlike{
    display: flex;
    flex-direction: row;
    /* float: right; */
}

.btlike h5{
    position: relative;
    top: -23px;
    left: 3px;
    font-weight: 500;
}

</style>