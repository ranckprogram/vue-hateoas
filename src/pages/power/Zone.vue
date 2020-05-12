<template>
  <div class="">
    <div>Zone</div>

    <ul>
      <li>
        <button @click="goResource(links)">进入资源</button>

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    this.links = {
      self: "/views/123/zones/12443/resourses"

    }
    return {
    };
  },
  computed: {},
  created() {
    this.getList()
  },
  mounted() { },
  methods: {
    getList() {
      const { path } = this.$route;
      console.log(path, 'get data=====')
    },
    goResource(links) {
      this.$router.push({ path: links.self })
    }
  },
  watch: {},
};
</script>

<style scoped>
</style>