<template>
  <div class="card-wrapper">
    <Card v-for="(item,idx) in items" :key="idx" :item="item"/>
  </div>
</template>

<script>
import Card from '@/components/card/Card.vue'

export default {
  name: 'CardWrapper',
  components: {
    Card
  },
  data(){
    return {
        items : [
            {
                profile : 'https://source.unsplash.com/random?q=1' ,
                nickname : 'nickname1',
                id : '@id1',
                time : Math.floor(Math.random()*10+1) + '시간',
                image : 'https://source.unsplash.com/random?q=1' ,
                contents : 'contents'
            },
            {
                profile : 'https://source.unsplash.com/random?q=2' ,
                nickname : 'nickname2',
                id : '@id2',
                time : Math.floor(Math.random()*10+1) + '시간',
                image : 'https://source.unsplash.com/random?q=2' ,
                contents : 'contents'
            },
            {
                profile : 'https://source.unsplash.com/random?q=3' ,
                nickname : 'nickname3',
                id : '@id3',
                time : Math.floor(Math.random()*10+1) + '시간',
                image : 'https://source.unsplash.com/random?q=3' ,
                contents : 'contents'
            },
            {
                profile : 'https://source.unsplash.com/random?q=4' ,
                nickname : 'nickname4',
                id : '@id4',
                time : Math.floor(Math.random()*10+1) + '시간',
                image : 'https://source.unsplash.com/random?q=4' ,
                contents : 'contents'
            },
            {
                profile : 'https://source.unsplash.com/random?q=5' ,
                nickname : 'nickname5',
                id : '@id5',
                time : Math.floor(Math.random()*10+1) + '시간',
                image : 'https://source.unsplash.com/random?q=5' ,
                contents : 'contents'
            },
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
