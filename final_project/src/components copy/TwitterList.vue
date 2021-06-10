<template>
    <div class="card-wrapper">
        <ul>
            <li v-for="(item,idx) in items" :key="idx" :item="item">
                <router-link style="text-decoration: none" to="/detail/:id" >
                    <div class="card">
                        <div class="block card-left">
                            <div class="profile">
                                <img class="card-profile-img" :src="item.owner.picture" alt="Card profile image">
                            </div>
                        </div>
                        <div class="block card-right">
                            <div class="card-right-top">
                                <h3 class="card-nickname">{{item.owner.lastName}}</h3>
                                <h4 class="card-id">{{item.owner.id}}</h4>
                                <h4 class="card-time">{{item.publishDate}}</h4>
                                <a href="#" class="bt-more">•••</a>
                            </div>
                            <div class="card-right-middle card-body">
                                <p class="card-text">{{item.text}}</p>
                                <div v-if="Math.random() < 0.8" class="card-img-box">
                                    <img class="card-img-top" :src="item.image">
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
            </li>

            
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'TwitterList',
    props: {
        msg: String
    },
    components: {
    },
    data(){
        return{  
            items : []
        }
    },
    mounted(){
        //ajax with axios 
        axios.get('https://dummyapi.io/data/api/user/0F8JIqi4zwvb77FGz6Wt/post?limit=10', {
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
    border-width: 1px;
    border-top-width: 0px;
    width: 600px;
}

.card-left{
    width: 70px;
    height: auto;
    background-color: yellow;
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
    /* width: 510px; */
    width: 520px;
    height: auto;
    background-color: green;
}

.card-right-top{
    /* height: 20px; */
    height: 20px;
    background-color: pink;
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
    background-color: violet;
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