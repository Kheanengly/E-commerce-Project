<template>
    <div>

        <h1>Add Method = {{ add(4,5,6) }}</h1>
        <h1>Multi Method = {{ multipal(10) }}</h1>
        <h1>Multi Method = {{ multipal(defaultValue) }}</h1>
    </div>  
</template>

<script>
export default {
    name:"App",
    data(){
        return({
            defaultValue: 5
        })
    },
    methods:{
        add(a,b,c){
            return a+b+c;
        },
        multipal(num){
            return num * this.defaultValue;
        }
    }
    
}
</script>

