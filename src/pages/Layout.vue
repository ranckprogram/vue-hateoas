<template>
  <div class="main">
    <aside class="aside">
      <ul>
        <li>
          <router-link :to="{name: 'PowerView'}">视图</router-link>
        </li>
        <li>
          <router-link to="/views/123/zones">区</router-link>
        </li>
        <li>
          <router-link to="/views/123/zones/12443/resourses">resourses</router-link>
        </li>
        <li>
          <router-link :to="{name: 'PowerRedirectView'}">视图</router-link>
        </li>
        <li>
          <router-link to="/views/1231/redirects">redirects</router-link>
        </li>

      </ul>

    </aside>
    <main class="content">
      <div style="padding: 10px;width: 100%; background: #ddd;color:#333">main</div>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
    };
  },
  computed: {},
  created() { },
  mounted() { },
  methods: {},
  watch: {},
};
</script>

<style  scoped>
.main {
  display: flex;
}
.aside {
  width: 200px;
  height: 500px;
}
.main {
  height: 500px;
  background: #f5f5f5;
  flex: 1;
  width: 100%;
}
.content {
  width: 100%;
}
</style>