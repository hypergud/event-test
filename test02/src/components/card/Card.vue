<script>
export default {
    name: 'Card',
    props: {
        item: Object
    },
    methods: {
        viewDetail(){
            alert('View Detail!');
        }
    }
}
</script>

<style scoped>
.card{
    margin: 10px;
}
</style>
