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
      <ExploreContainer name="Tab 2 page" />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,onIonViewDidEnter,
onIonViewWillEnter,onIonViewWillLeave,
onIonViewDidLeave } from '@ionic/vue';
import { defineComponent, computed, reactive } from "vue";

import ExploreContainer from '@/components/ExploreContainer.vue';

export default  defineComponent({
  name: 'Tab2',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  // computed: {
  //   computedCheck() {
  //     // firebase情報
  //     return function () {
  //       console.log("Tab2 で computedCheck");
  //       return true;
  //     };
  //   },
  // },
  setup() {
    const state = reactive({ isBoolean: true });
    const strongMessage = computed(() => {
      console.log("Tab2 で computedCheck");
      return state.isBoolean;
    });

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
    };
  },
});
</script>