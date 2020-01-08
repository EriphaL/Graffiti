<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">ManagerSys</div>
          <div class="layout-nav">
            <MenuItem name="1">
            <Icon type="ios-navigate"></Icon>
            Item 1
            </MenuItem>
            <MenuItem name="2" >
            <Icon type="ios-keypad" ></Icon>
            <span @click="myCanvas()">I涂鸦面板</span>
            
            </MenuItem>
            <MenuItem name="3">
            <Icon type="ios-analytics"></Icon>
            Item 3
            </MenuItem>
            <MenuItem name="4">
            <Icon type="ios-paper"></Icon>
            Item 4
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout style="height: calc(100vh - 65px);">
        <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
          <Menu ref="leftmenu"
          @on-select="isCollapsed=false" 
          @on-open-change="isCollapsed=false" 
          theme="dark" width="auto"
          
          :open-names="opennames"
          :class="menuitemClasses">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                <span>1</span>
              </template>
              <MenuItem name="1-1" to="/userlist"><span>用户列表</span></MenuItem>
              <MenuItem name="1-2"><span>用户统计</span></MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-calculator"></Icon>
                <span>2</span>
              </template>
              <MenuItem name="2-1"><span>Option 2</span></MenuItem>
              <MenuItem name="2-2"><span>Option 2</span></MenuItem>
              <MenuItem name="2-3"><span>Option 2</span></MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-build"></Icon>
                <span>3</span>
              </template>
              <MenuItem name="3-1"><span>Option 2</span></MenuItem>
              <MenuItem name="3-2"><span>Option 2</span></MenuItem>
              <MenuItem name="3-3"><span>Option 2</span></MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '15px',flex:'none'}">
          <!-- 这边应该改成路由视图 显示routerview -->
          <router-view>

          </router-view>
          
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        opennames:["1"],
        isCollapsed: false
      };
    },
    methods: {
      myCanvas(){
        this.$router.push('/canvas')
      }
    },
    watch: {
      // 用来控制侧边栏收起展开
      isCollapsed(val){
        if(val){
          this.opennames = [];
          this.$nextTick(()=>{
            this.$refs.leftmenu.updateOpened();
          })
        }
      }
    },
    
    computed: {
      menuitemClasses: function () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    }
  }
</script>

<style>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;

  }

  .layout-logo {
    width: 100px;
    color: #d7dde4;
    height: 30px;
    /* background: #515a6e; */
    background: #808695;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }

  .layout-con {
    height: 100%;
    width: 100%;
  }

  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }

  .menu-item i {
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }

  .collapsed-menu span {
    width: 0px;
    transition: width .2s ease;
  }

  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }

  /* 保证隐藏侧边栏时，右边的小箭头也隐藏掉 */
  .collapsed-menu .ivu-icon-ios-arrow-down {
    display: none;
  }
</style>