<template>
<div style="width:100%">
  <Breadcrumb style="padding-bottom:10px">
        <BreadcrumbItem to="/">
            <Icon type="ios-home-outline"></Icon> 首页
        </BreadcrumbItem>
        <BreadcrumbItem to="/components/breadcrumb">
            <Icon type="logo-buffer"></Icon> 工作内容
        </BreadcrumbItem>
        <BreadcrumbItem>
            <Icon type="ios-cafe"></Icon> 。。。
        </BreadcrumbItem>
    </Breadcrumb>
    <Row :gutter="20">
          <Col span="4">
            <mycard icon="&#xe6cc;" title="新增用户" count="20" bgcolor="#2d8cf0"></mycard>
          </Col>
          <Col span="4">
            <mycard icon="&#xe6cc;" title="新增用户" count="20" bgcolor="#2d8cf0"></mycard>
          </Col>
          <Col span="4">
            <mycard icon="&#xe6cc;" title="新增用户" count="20" bgcolor="#2d8cf0"></mycard>
          </Col>
          <Col span="4">
            <mycard icon="&#xe6cc;" title="新增用户" count="20" bgcolor="#2d8cf0"></mycard>
          </Col>
          <Col span="4">
            <mycard icon="&#xe6cc;" title="新增用户" count="20" bgcolor="#2d8cf0"></mycard>
          </Col>
          <Col span="4">
            <mycard icon="&#xe6cc;" title="新增用户" count="20" bgcolor="#2d8cf0"></mycard>
          </Col>

        
    </Row>

</div>
    

</template>

<script>

  import mycard from '@/components/mycard'
  export default {
    components:{
      mycard
    }
  }
</script>

<style lang="scss" scoped>

</style>