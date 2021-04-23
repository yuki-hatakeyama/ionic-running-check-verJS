<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <p>アバウトページ</p>
        <!-- <p>{{computedCheck()}}</p> -->
        <p>メニュー情報{{ menuComputed }}</p>
        <p @click="$router.push('/tabs/tab1')">タブ１に戻る</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonPage,
  onIonViewDidEnter,
  onIonViewWillEnter,
  onIonViewWillLeave,
  onIonViewDidLeave,
} from "@ionic/vue";

import { defineComponent, computed, reactive } from "vue";

export default defineComponent({
  name: "About",
  components: {
    IonContent,
    IonPage,
  },
  // computed: {
  //   computedCheck() {
  //     // firebase情報
  //     return function () {
  //       console.log("About の computed");
  //       return true;
  //     };
  //   },
  // },
  setup() {
    const state = reactive({ isBoolean: true });

    const strongMessage = computed(() => {
      console.log("About の computed");
      return state.isBoolean;
    });

    let menu = {
      name: "プレーン",
    };

    const menuComputed = computed(() => {
      return menu;
    });

    // コンポーネントが表示されるアニメーションがはじまる時に発火します。
    onIonViewWillEnter(() => {
      menu.name = "チョコ";
      // state.isBoolean = false;
      // console.log('Home page will enter', state);
    });

    // コンポーネントが表示されるアニメーションが終了した時に発火します。
    onIonViewDidEnter(() => {
      // state.isBoolean = false;
      // console.log('Home page did enter', state);
    });

    // コンポーネントを離脱するアニメーションがはじまる時に発火します。
    onIonViewWillLeave(() => {
      // console.log('Home page will leave');
    });

    // コンポーネントを離脱するアニメーションが終了した時に発火します。
    onIonViewDidLeave(() => {
      // console.log('Home page did leave');
    });

    return {
      state,
      strongMessage,
      menuComputed,
    };
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
