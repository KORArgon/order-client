<template>
  <div class="row">
    <div class="col-md-12">
      <card>
        <div class="places-buttons">
          <div class="row">
            <div class="col-lg-8 ml-auto mr-auto">
              <div class="row">
                <div class="col-md-4" v-for="item in menuitems" :key="item.foodMenuNo" v-if="item.menuCategory == 'SIDE'">
                  <base-button
                    type="primary"
                    block
                    @click="notifyVue('top', 'center')"
                  >
                    <img style="height: 180px; width: 240px"
                         :src="`http://lhstest.iptime.org/data/web/webapps/order/uploadFile/${ item.image.path }${ item.image.storeName }`"/><br>
                    {{ item.foodMenuNm }}<br>
                    {{ item.foodMenuPrice }}원
                  </base-button>
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
import {BaseAlert} from "@/components";

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
      menuitems: [],
    };
  },
  created() {
    this.fetchData();
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
    async fetchData() {
      try {
        const response = await this.$axios.get('/api/v2/foodMenuList?id=B202404292054200025'); // '/items' 엔드포인트를 호출합니다.
        this.menuitems = response.data.body;
        console.log(response.data)
      } catch (error) {
        console.error('API 호출 에러:', error);
      }
    },
  },
};
</script>
<style></style>
