<template>
  <div id="app">
          <router-view/>
  </div>
</template>

<style>
*{margin:0;padding:0}
 a,ul,ol,dl{
    list-style:none;
    text-decoration:none;
 }
  body{
    position: relative;
    background-color:rgba(0,0,0,.8);
    padding:2rem 0;
  }
#app{
  position: absolute;
  left:50%;
  margin-left:-30%;
  width:60%;
}
a{
  display:block;
}

</style>
