<template>
    
    <h2 v-for = "(name,index) in names" :key="name" >{{index}}.{{name}}</h2>
    <h2 v-for = "name in fullName" :key="name.first" >{{ name.first }}{{ name.last }},</h2>
    <h2 v-for="(value,key,index) in inoformation" :key="value">{{ index }} {{ key }} {{ value }},</h2>
</template>

<script>
export default {
    name: "App",
    data() {
      return{
        names:["Engly","Engfong"],
        fullName:[
            {last:"Engly" , first:"Khean"},
            {last:"Fong" , first:"Khean"},
        ],
        inoformation:{
            name:"Khean Engly",
            chanel:"Rean Vue",
            course:"Vue "

        }
      }
    },
}
</script>

<style>

</style>