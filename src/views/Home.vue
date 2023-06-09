<template>
  <div>
    <hero-section
      backgroundImage="homepage-hero.jpg"
      title="Welcome to Instaflickr"
      subtitle="A fake photo app" />
    <div class="wrapper">
      <recent-photos />
      <!-- <place-photos /> -->
    </div>
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import RecentPhotos from '@/components/RecentPhotos.vue';
import PlacePhotos from '@/components/PlacePhotos.vue';

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    RecentPhotos,
    PlacePhotos,
  },
};
</script>
