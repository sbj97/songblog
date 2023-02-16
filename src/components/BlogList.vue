<template>
  <div>
    <h5 @click="$router.push('/detail/0')">{{blog[0].title}}</h5>
    <p>{{blog[0].date}}</p>
  </div>
  
  <div>
    <h5 @click="$router.push('/detail/1')">{{blog[1].title}}</h5>
    <p>{{blog[1].date}}</p>
  </div>
  
  <div>
    <h5 @click="$router.push('/detail/2')">{{blog[2].title}}</h5>
    <p>{{blog[2].date}}</p>
  </div>
</template>

<script>
export default {
  name: 'BlogList',
  props :{
    blog : Array,
  },
}
</script>

<style>

</style>