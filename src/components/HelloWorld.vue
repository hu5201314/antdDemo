<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
    >
      <div class="logo">
        <a-icon type="strikethrough"  class="logoIcon"/>
      </div>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>nav 3</span>
        </a-menu-item>
         <a-menu-item key="4">
          <a-icon type="form" />
          <span>nav 4</span>
        </a-menu-item>
         <a-menu-item key="5">
          <a-icon type="highlight" />
          <span>nav 5</span>
        </a-menu-item>
        <a-menu-item key="6">
          <a-icon type="edit" />
          <span>nav 6</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      collapsed: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#components-layout-demo-custom-trigger{
  margin-top: -60px;
  height: 630px;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
  float: left;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 40px;
  background: rgba(7, 11, 240, 0.5);
  margin: 16px;
}
#components-layout-demo-custom-trigger .logo .logoIcon{
  font-size: 40px;
  text-align: center;
  color: #fff;
}
</style>
