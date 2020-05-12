<template>
  <div class="">
    sResourse
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
  created() {
    console.log(this.$route)
    console.log(this.$store)

    const { path } = this.$route
    console.log(path)
    
  },
  mounted() { },
  methods: {},
  watch: {},
};
</script>

<style  scoped>
</style>