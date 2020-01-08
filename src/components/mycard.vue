
<template>
  <Card style="width:260px;" padding="0" class="no-select">
      <div class="flex">
        <div class="flex j-center a-center y-center" style="height:110px;width:92px;" :style="{'backgroundColor':bgcolor}">
         <i class="iconfont" v-html="icon"></i>
        </div>
        <div class="flex j-center a-center flex-1 flex-col">
         <h1>{{count}} </h1>
         <div>{{title}}</div>
        </div>
      </div>
  </Card>
</template>

<script>
  export default {
    props:["icon","bgcolor","count","title"]
  }
</script>

<style lang="scss" scoped>
.iconfont{
  font-size: 2.1875rem;
  color:#fff;

}

</style>