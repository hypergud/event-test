<template>
    <div>
        <div class="btn-back">
            <router-link to="/" tag="button">Back</router-link>
        </div>
        <div v-for="(item,idx) in items" :key="idx" :item="item">
            <h1>{{item}}</h1>
            <h2>{{idx}}</h2>
        </div>
        
        Twitter Detail Page with {{id}}
    </div>
</template>

<script>
import axios from 'axios';

export default{
    name: 'TwitterDetail',
    props: {
        id: String
    },
    data(){
        return{  
            items: []
        }
    },
    mounted(){
        //ajax with axios 
        axios.get('https://dummyapi.io/data/api/post?limit=10', {
            'headers' : {
                "app-id" : '609d61a3cfa64e21a68b8e5c'
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
</style>