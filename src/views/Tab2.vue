<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 2:JS</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      <!-- <p>{{computedCheck()}}</p> -->
      <p>コンポジションAPI{{ strongMessage }}</p>
      <p @click="onCommit()">コミットさせます</p>
      <ExploreContainer name="Tab 2 page" />
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  onIonViewDidEnter,
  onIonViewWillEnter,
  onIonViewWillLeave,
  onIonViewDidLeave,
} from "@ionic/vue";
import { defineComponent, computed, reactive } from "vue";
import { useStore } from "vuex";

import ExploreContainer from "@/components/ExploreContainer.vue";

export default defineComponent({
  name: "Tab2",
  components: {
    ExploreContainer,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },
  setup() {
    const store = useStore();
    const user = {
      uid: "Bの値が入ります",
    };

    // mutation を呼び出す場合
    const authStateChanged = () => {
      store.commit("onAuthStateChanged", user);
    };

    const onCommit = () => {
      console.log("コミットします");
      authStateChanged();
    };

    const state = reactive({ isBoolean: true });
    const strongMessage = computed(() => {
      console.log("Tab2 の computed");
      return state.isBoolean;
    });

    // onAuthStateChanged();

    // const // getters を呼び出す場合
    // const userInfo = computed(() => {
    //   console.log("ユーザー情報を取得", store.getters.user);
    //   return store.getters.user;
    // });

    // コンポーネントが表示されるアニメーションがはじまる時に発火します。
    onIonViewWillEnter(() => {
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
      // state.isBoolean = false;
      // console.log('Home page did leave');
    });
    return {
      state,
      strongMessage,
      onCommit,
    };
  },
});
</script>
