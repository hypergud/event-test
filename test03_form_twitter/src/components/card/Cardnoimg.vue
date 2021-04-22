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
            <!-- <div class="card-img-box">
                <img class="card-img-top" @click="img-resize" :src="item.image">
            </div> -->
            
        </div>
        <div class="card-right-bottom">
            <a href="#" class="twitter-bt bt01" @click="btReply">
                <img src="https://img.icons8.com/small/32/000000/twitter-reply.png"/>
            </a>
            <a href="#" class="twitter-bt bt02" @click="btRetweet">
                <img src="https://img.icons8.com/small/32/000000/retweet.png"/>
            </a>
            <a href="#" class="twitter-bt bt03" @click="btLike">
                <img src="https://img.icons8.com/material-outlined/32/000000/filled-like.png"/>
            </a>
            <a href="#" class="twitter-bt bt04" @click="btShare">
                <img src="https://img.icons8.com/small/32/000000/share-3.png"/>
            </a>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    item: Object
  },
  methods : {
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
    margin: 5px 0 0;
    margin-top: -5px;
}

.card-img-box{
    width: 490px;
    max-height: 300px;
    overflow: hidden;
    border-radius: 15px;
    background-color: gainsboro;
}
.card-img-top{
    width: 490px;
    height: auto;
}

.card-right-bottom{
    /* background-color:burlywood; */
    margin: 2px 10px 0;
    padding: 0;
    padding-bottom: 10px;
    width: 450px;
    display: flex;
    justify-content: space-between;
}

.twitter-bt img{
    width: 17px;
}

</style>
