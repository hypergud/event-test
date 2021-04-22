<template>
  <div class="card-wrapper">
    <Card v-for="(item,idx) in itemsimg" :key="idx" :item="item"/>
    <Cardnoimg v-for="(item,idx) in itemsnoimg" :key="idx" :item="item"/>
  </div>
</template>

<script>
import Card from '@/components/card/Card.vue'
import Cardnoimg from '@/components/card/Cardnoimg.vue'

export default {
  name: 'CardWrapper',
  components: {
    Card,
    Cardnoimg
  },
  data(){
    return {
        itemsimg : [
            {
                profile : 'https://source.unsplash.com/random?q=1' ,
                nickname : 'nickname',
                id : '@id',
                time : Math.floor(Math.random()*10+1) + '시간',
                image : 'https://source.unsplash.com/random?q=1' ,
                contents : 'contents'
            },
            {
                profile : 'https://source.unsplash.com/random?q=3' ,
                nickname : 'nickname',
                id : '@id',
                time : Math.floor(Math.random()*10+1) + '시간',
                image : 'https://source.unsplash.com/random?q=3' ,
                contents : 'contents'
            },
            {
                profile : 'https://source.unsplash.com/random?q=3' ,
                nickname : 'nickname',
                id : '@id',
                time : Math.floor(Math.random()*10+1) + '시간',
                // image : 'https://source.unsplash.com/random?q=3' ,
                contents : 'contents'
            },
            {
                profile : 'https://source.unsplash.com/random?q=4' ,
                nickname : 'nickname',
                id : '@id',
                time : Math.floor(Math.random()*10+1) + '시간',
                image : 'https://source.unsplash.com/random?q=4' ,
                contents : 'contents'
            },
            {
                profile : 'https://source.unsplash.com/random?q=5' ,
                nickname : 'nickname',
                id : '@id',
                time : Math.floor(Math.random()*10+1) + '시간',
                // image : 'https://source.unsplash.com/random?q=5' ,
                contents : 'contents'
            },
        ],
        itemsnoimg : [
            {
                profile : 'https://source.unsplash.com/random?q=6' ,
                nickname : 'nickname',
                id : '@id',
                time : Math.floor(Math.random()*10+1) + '시간',
                contents : 'contents'
            }
            
        ]
    }
  }
}
</script>

<style scoped>
.card-wrapper{
    margin:0 auto;
    max-width:600px;
}
</style>
