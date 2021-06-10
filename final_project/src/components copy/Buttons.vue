<template>
    <div class="buttons card-right-bottom">
        <a href="#" class="twitter-bt bt01" @click="btReply">
            <img :src="btitem.bt01img">
        </a>
        <a href="#" class="twitter-bt bt02" @click="btRetweet">
            <img :src="btitem.bt02img">
        </a>
        <a href="#" class="twitter-bt bt03" @click="btLike">
            <img :src="btitem.bt03img">
        </a>
        <a href="#" class="twitter-bt bt04" @click="btShare">
            <img :src="btitem.bt04img">
        </a>
    </div>
</template>

<script>

export default {
  name: 'Buttons',
  props: {
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
  }
}
</script>

<style scoped>
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