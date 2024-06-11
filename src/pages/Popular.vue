<template>
  <div class="row">
    <div class="col-md-12">
      <card>
        <div class="places-buttons">
          <div class="row">
            <div class="col-md-6 ml-auto mr-auto text-center">
              <h4 class="card-title">
                <h4 slot="header">인기메뉴</h4>
                <p class="category">Click to view notifications</p>
              </h4>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 ml-auto mr-auto">
              <div class="row">
                <div class="col-md-4">
                  <base-button
                    type="primary"
                    block
                    @click="notifyVue('top', 'left')"
                  >Top Left</base-button
                  >
                </div>
                <div class="col-md-4">
                  <base-button
                    type="primary"
                    block
                    @click="notifyVue('top', 'center')"
                  >Top Center</base-button
                  >
                </div>
                <div class="col-md-4">
                  <base-button
                    type="primary"
                    block
                    @click="notifyVue('top', 'right')"
                  >Top Right</base-button
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 ml-auto mr-auto">
              <div class="row">
                <div class="col-md-4">
                  <base-button
                    type="primary"
                    block
                    @click="notifyVue('bottom', 'left')"
                  >Bottom Left</base-button
                  >
                </div>
                <div class="col-md-4">
                  <base-button
                    type="primary"
                    block
                    @click="notifyVue('bottom', 'center')"
                  >Bottom Center</base-button
                  >
                </div>
                <div class="col-md-4">
                  <base-button
                    type="primary"
                    block
                    @click="notifyVue('bottom', 'right')"
                  >Bottom Right</base-button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import NotificationTemplate from "./Notifications/NotificationTemplate";
import { BaseAlert } from "@/components";

export default {
  components: {
    BaseAlert,
  },
  data() {
    return {
      type: ["", "info", "success", "warning", "danger"],
      notifications: {
        topCenter: false,
      },
    };
  },
  methods: {
    notifyVue(verticalAlign, horizontalAlign) {
      const color = Math.floor(Math.random() * 4 + 1);
      this.$notify({
        component: NotificationTemplate,
        icon: "tim-icons icon-bell-55",
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: this.type[color],
        timeout: 0,
      });
    },
  },
};
</script>
<style></style>
