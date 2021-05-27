<template>
    <div>
        <h1>TwitterList packages</h1>
        <br/>
        <ul>
            <li v-for="(item,idx) in items" :key="idx" :item="item"><router-link to="/detail/{{id}}">This is card</router-link></li>
        </ul>
    </div>
</template>

<script>
export default{
    name: 'TwitterList',
    props: {
        msg: String
    },
    components: {
        Card
    },
    data(){
        return{
            items:[
                {
                    
                }
            ]
        }
    }
}
</script>

<style scoped>
ul,li{list-style:none;}
</style>