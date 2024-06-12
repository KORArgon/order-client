<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link
          to="/popular"
          :name="$t('sidebar.popular')"
          icon="tim-icons icon-heart-2"
        />

        <sidebar-link
          to="/main"
          :name="$t('sidebar.main')"
          icon="tim-icons icon-align-left-2"
        />
        <sidebar-link
          to="/side"
          :name="$t('sidebar.side')"
          icon="tim-icons icon-align-left-2"
        />
        <sidebar-link
          to="/drink"
          :name="$t('sidebar.drink')"
          icon="tim-icons icon-align-left-2"
        />
      </template>
    </side-bar>
    <div class="main-panel">
      <dashboard-content @click.native="toggleSidebar"> </dashboard-content>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import DashboardContent from "./Content.vue";
export default {
  components: {
    DashboardContent,
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
