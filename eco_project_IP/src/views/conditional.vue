<template>
    <div v-if="number === 5"> Learn Conditional with v-if</div>
    <div v-if="number == 5 ">Number is 5</div>
    <div v-else-if="number1 > 5 "> Number than 5 </div>
    <div v-else>Number less than 5</div>
    <div v-show="display">Number is {{number}}</div>
</template>

<script>
export default {
    name:"Conditional",
    data() {
        return{
            number : 5,
            number1 : 3,
            display : true,
        }
    },
}
</script>

<style >

</style>