<template>
    <h2>{{ count }}</h2>
    <div>
        <button @click="increment(1,$event)">1</button>
        <button v-on:click="increment(5)">5</button>
        <button v-on:click="decrement(1)">-1</button>
        <button v-on:click="decrement(5)">-5</button>
    </div>
    <div>
        <h1 >{{ name }}</h1>
        <button @click="name='Khean EngLy',increment(1)">Chang Name</button>
    </div>
</template>

<script>
export default {
    name:"App",
    data() {
       
      return{
        name:"Khean EngFong",
        count:0
      }  
    },
    methods:{
        increment(num,event){
            this.count+=num
            console.log(event)
        },
        decrement(num){
            this.count-=num
        }
    }
}
</script>