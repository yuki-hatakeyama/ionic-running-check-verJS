<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 3:JS</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>
      <!-- <p>{{computedCheck()}}</p> -->
      <p>コンポジションAPI{{ strongMessage?.value }}</p>
      <button @click="onChange()">リアクティブな値を変更します</button>
      <ExploreContainer name="Tab 3 page" />
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
import { defineComponent, computed, reactive, watch, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import ExploreContainer from "@/components/ExploreContainer.vue";

export default defineComponent({
  name: "Tab3",
  components: {
    ExploreContainer,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },
  setup() {
    const state = reactive({ isBoolean: true });
    let strongMessage = ref(null);

    const router = useRouter();
    const route = useRoute();

    console.log("router", router);
    console.log("route", route);

    let stopWatch = "";

    // true / false の切り替え
    const onChange = () => {
      state.isBoolean = !state.isBoolean;
    };

    // コンポーネントが表示されるアニメーションがはじまる時に発火します。
    onIonViewWillEnter(() => {
      stopWatch = watch(route, (nextValu, prevValu) => {
        console.log("nextValu", nextValu.path);
        console.log("prevValu", prevValu.path);
      });

      strongMessage.value = computed(() => {
        console.log("onIonViewWillEnter内の の computed");
        return state.isBoolean;
      });
    });
    // コンポーネントを離脱するアニメーションがはじまる時に発火します。
    onIonViewWillLeave(() => {
      // stopWatch();
      // console.log('Home page will leave');
    });
    // コンポーネントが表示されるアニメーションが終了した時に発火します。
    onIonViewDidEnter(() => {
      // state.isBoolean = false;
      // console.log('Home page did enter', state);
    });

    // コンポーネントを離脱するアニメーションがはじまる時に発火します。
    onIonViewWillLeave(() => {
      stopWatch();
      // console.log('Home page will leave');
    });

    // コンポーネントを離脱するアニメーションが終了した時に発火します。
    onIonViewDidLeave(() => {
      // console.log('Home page did leave');
    });

    return {
      state,
      strongMessage,
      onChange,
    };
  },
});
</script>
