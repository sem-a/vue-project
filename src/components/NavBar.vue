<template>
  <nav class="navbar">
    <form class="searchbar">
      <label for="search">
        <span class="screen-reader-only">Search:</span>
        <input type="text" v-model="tag" placeholder="Search for photos" class="searchbar-input" />
      </label>
      <button type="submit" class="btn btn--green btn--go" @click.prevent="search">Go!</button>
    </form>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      tag: '',
    };
  },
  methods: {
    search() {
      this.$router.push({ name: 'SearchResults', params: { tag: this.tag } });
      this.tag = '';
    },
  },
};
</script>
