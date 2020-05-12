<template>
  <div class="view">
    view

    <button @click="getList">getList</button>
    <button @click="create">create</button>
    <button @click="getList">getList</button>

    <ul>
      <li>
        <button @click="handleGoToNext(links.child)">go to next</button>
      </li>
      <li>
        <button @click="deleteThis">deleteThis</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { dealLink } from '@/utils/tools'

export default {
  components: {},
  props: {},
  data() {
    this.links = {
      child: {
        zones: "/views/123/zones",
        redirects: "/views/123/redirects",
      }
    }
    return {

    };
  },
  computed: {},
  created() {
    console.log(this.$route, 'created')
    this.parsePath(this.$route)

  },
  mounted() { },
  methods: {
    getList() {

    },
    create() { },
    deleteThis() { },
    getPathByApi(api, baseUrl = '/apis') {

    },
    parsePath(route) {
      const { path } = route
      const [, resource] = path.split('/')
      if (resource.includes('_')) {
        const [parent, child] = resource.split('_')
        console.log(parent, child)
        this.links.current = child
      }
    },
    handleGoToNext(links) {
      this.$router.push({ path: links[this.links.current] })
    }
  },
  watch: {
    $route(a) {
      console.log(a, 'watch $route')
      this.parsePath(a)
    }
  },
};
</script>

<style scoped>
</style>