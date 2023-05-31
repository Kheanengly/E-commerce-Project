<template>
    <div>Hello this is {{name}} page</div>
    <div v-text="bind_text"></div>
    <div v-html="bind_html"></div>
    <div v-bind:id="headingID">binding attribute</div>
    <button v-bind:disabled="display">binding attribute </button>
    <div v-bind:class="status">binding Class</div>
    <div v-bind:class="isSlotOut ? 'sold-out' : 'new'">Product</div>
  </template>
  
  <script>
import { isSlotOutlet } from '@vue/compiler-core';

    export default {
      name: "About",
      data(){
        return{
         name:"About",
         bind_text:"Learn binding text",
         bind_html: `<a herf="#" onclick= "alert('you have been hacker!')"> Learn binding HTML <a/>`,
         headingID : 'header',
         display : true,
         status: "class",
         isSlotOut: true
        };
      },
    };
  </script>

<style>
  .new{
    color:red
  }

  .sold-out{
    color:blue
  }
</style>