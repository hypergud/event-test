<template>
  <div class="card">
      <div class="block card-left">
          <div class="profile">
            <img class="card-profile-img" :src="item.profile" alt="Card profile image">
          </div>
      </div>
      <div class="block card-right">
        <div class="card-right-top">
            <h3 class="card-nickname">{{item.nickname}}</h3>
            <h4 class="card-id">{{item.id}}</h4>
            <h4 class="card-time">{{item.time}}</h4>
            <a href="#" class="bt-more" @click="btMore">•••</a>
        </div>
        <div class="card-right-middle card-body">
            <p class="card-text">{{item.contents}}</p>
            <div v-if="Math.random() < 0.8" class="card-img-box">
                <img class="card-img-top" @click="imgResize" :src="item.image">
            </div>
        </div>
        <Buttons v-for="(item,idx) in items" :key="idx" :item="item"/>
      </div>
  </div>
</template>

<script>
import Buttons from '@/components/card/Buttons.vue'

export default {
  name: 'Card',
  components: {
    Buttons
  },
  props: {
    item: Object
  },
  data(){
    return {
        items : [
            {
                bt01img: 'https://img.icons8.com/small/32/000000/twitter-reply.png',
                bt02img: 'https://img.icons8.com/small/32/000000/retweet.png',
                bt03img: 'https://img.icons8.com/material-outlined/32/000000/filled-like.png',
                bt04img: 'https://img.icons8.com/small/32/000000/share-3.png'
            }
        ]
    }
  },
//   호출할 함수
  methods:{
    //  getUnits: function() {
    //     //  var randomNum = Math.random();
    //     //  console.log(randomNum);
    //  }
 },
//  페이지로드시 vue.js 함수를 호출
 beforeMount(){
    // this.getUnits();
 }
  
}
</script>

<style scoped>
.card{
    margin:0 auto;
    display: flex;
    flex-direction: row;
    border-radius: 0;
    border-width: 1px;
    border-top-width: 0px;
    width: 600px;
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
    left: 15%;
    margin: 10px 0;
}

.card-profile-img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-right{
    width: 510px;
    height: auto;
    /* background-color: green; */
}

.card-right-top{
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
}

.card-id, .card-time{
    font-size: 17px;
    line-height: 22px;
    font-weight: 400;
    width: auto;
    margin-right: 5px;
    color: gray;
}

.bt-more{
    position: absolute;
    right: 15px;
    color: black;
    text-decoration: none;
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
    margin-top: -5px;
}

.card-img-box{
    width: 505px;
    max-height: 300px;
    overflow: hidden;
    border-radius: 15px;
    background-color: gainsboro;
}
.card-img-top{
    width: 505px;
    height: auto;
}



</style>
