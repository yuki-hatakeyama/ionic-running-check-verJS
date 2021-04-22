<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <p>アバウトページ</p>
        <p>{{computedCheck()}}</p>
        <p @click="$router.push('/tabs/tab1')">タブ１に戻る</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage } from "@ionic/vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
  components: {
    IonContent,
    IonPage,
  },
  computed: {
    computedCheck() {
      // firebase情報
      return function () {
        console.log("About で computedCheck");
        return true;
      };
    },
  },
});
</script>

<style scoped>
#container {
  text-align: center;
  height: 1000px;
  background: gold;
  line-height: 1;
  padding: 0;
  margin: 0;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
