<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
 
<!-- 다른페이지 이동링크 만들때 -->
<router-link to="/">홈페이지</router-link>
<router-link to="/list">리스트페이지</router-link>

<!-- props 전송-->
<router-view :blog="blog"></router-view>

<!-- router-view로 대체 -->
<!-- <BlogList :blog="blog"/> -->

</template>

<script>
// router-view로 대체
// import BlogList from './components/BlogList.vue';
import blog from './assets/blog.js';
export default {
  name: 'App',
  data(){
    return{
      blog : blog,
    }
  },
  components: {
    // router-view로 대체
    // BlogList : BlogList,
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
