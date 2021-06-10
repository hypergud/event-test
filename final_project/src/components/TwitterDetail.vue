<template>
    <div class="card-wrapper">
        <ul>
            <li>
                <div class="card">
                    <div class="block btn-back detail-top card-left">
                        <router-link style="" to="/" tag="button"><img src="https://img.icons8.com/android/24/000000/left.png"/></router-link>
                    </div>
                    <div class="block card-right">
                        <div class="block card-right-top">
                            <h3 class="card-top-nickname">{{items.firstName}}</h3>
                        </div>
                    </div>
                </div>
                <div class="card  background">
                    <img class="card-profile-img" :src="items.picture" alt="Card profile image">
                    
                </div>
                <div class="card">
                    <a href="#" class="bt-more">•••</a>
                    <div class="card-info">
                            <h3 class="card-nickname">{{items.firstName  + ' ' + items.lastName}}</h3>
                            <h4 class="card-id">@{{items.id}}</h4>
                            <h4 class="card-text">Phone: {{items.phone}}</h4>
                            <h4 class="card-text">Email: {{items.email}}</h4>
                            <h4 class="card-text">Location: {{items.location.state + ', ' + items.location.street + ', ' + items.location.city + ', ' + items.location.timezone + ', ' + items.location.country}}</h4>
                            <h4 class="card-time">가입일: {{items.registerDate}}</h4>
                    </div>
                </div>
            </li>
            
        </ul>
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
            axios.get('https://dummyapi.io/data/api/user/0F8JIqi4zwvb77FGz6Wt', {
            'headers' : {
                "app-id" : '60c24918d4c558c1cbd6bc74'
            }
        })
        .then((res) => {
            // this.items = res.data.data;
            this.items = res.data;
            console.log(this.items);
        });
    }
}
</script>

<style scoped>

button{
    border:0;
    background-color:transparent;
    margin: 10px 10px;
    
}

button img{
    width: 15px;
    -webkit-filter: opacity(.5) drop-shadow(0 0 0 #00acee);
    filter: opacity(.5) drop-shadow(0 0 0 #00acee);
}

button:hover{
    cursor: pointer;
}

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
    /* background-color: azure; */
}

.card-left{
    width: 70px;
    height: auto;
    /* background-color: yellow; */
    position: relative;
}

.background{
    width: 600px;
    height: 130px;
    background-color: #cfd9e4;
    padding-bottom: 50px;
}

.card-info{
    margin: 50px 0 0 0px ;
}

.card-profile-img{
    width: 140px;
    height: 140px;
    object-fit: cover;
    border-radius: 70%;
    border: 5px solid #fff;
    position: relative;
    top: 75%;
    left: 3%;
}


.card-right-top{
    height: 20px;
    margin: 10px 10px 0;
    display: flex;
    flex-direction: row;
}

.card-top-nickname{
    font-size: 20px;
    line-height: 20px;
    font-weight: 700;
    width: auto;
    margin-right: 5px;
    position: relative;
    top: -22px;
    left: -20px;
}

.card-nickname{
    font-size: 20px;
    line-height: 20px;
    font-weight: 700;
    width: auto;
    margin-right: 5px;
}

.card-id, .card-time{
    font-size: 13px;
    line-height: 22px;
    font-weight: 400;
    width: auto;
    margin-right: 5px;
    color: gray;
    position: relative;
    top: -18px;
}

.card-time{
    top: -10px;
}

.bt-more{
    position: relative;
    top: 10px;
    right:-560px;
    color: black;
    text-decoration: none;
}

.card-text{
    margin-top: -20px;
    font-size: 15px;
    font-weight: 600;
}

</style>