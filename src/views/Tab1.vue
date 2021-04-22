<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1:JS</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <!-- <p>{{computedCheck()}}</p> -->
      <p>コンポジションAPI{{ strongMessage }}</p>
      <p>ref:::{{stateRef}}</p>
      <button @click="onChange()">値変更：：：{{ strongMessage }}</button>
      <p @click="$router.push('/about')">About > </p>
      <ExploreContainer name="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,onIonViewDidEnter,
onIonViewWillEnter,onIonViewWillLeave,
onIonViewDidLeave } from '@ionic/vue';
import { defineComponent, computed, reactive, watch, ref } from "vue";

import ExploreContainer from '@/components/ExploreContainer.vue';

export default  defineComponent({
  name: 'Tab1',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup() {
    console.log("setup");
    const state = reactive({ isBoolean: true }); // Objectのみ代入できます。
    let stateRef = ref("値が入ります"); // Objectも代入できます。


    // computedで値の変換をリアルタイムに反映させる場合 → 変数のreactive化が必須。
    // ※ 変数がreactiveならcomputedを使わなくても、リアルタイムに反映はできる。
    const strongMessage = computed(() => {
      console.log("Tab1 の computed");
      return state.isBoolean;
    });

    // watch関数でリアクティブな変数を監視します
    // ref ・ reactive ・ computed の監視が可能
    watch(strongMessage, (nextValu, prevValu) => {
      console.log("Tab1 の watch");
      console.log("nextValu", nextValu);
      console.log("prevValu", prevValu);
    });
    
    // ▼値を絞りたい場合。
    // watch(() => state.isBoolean, (nextValu, prevValu) => {
    //   console.log("nextValu", nextValu);
    //   console.log("prevValu", prevValu);
    // });
    

    // true / false の切り替え
    const onChange = () =>{
      state.isBoolean = !state.isBoolean;
      stateRef.value = "初期化"; 
    }

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
      // console.log('Home page did leave');
    });

    return {
      state,
      strongMessage,
      onChange,
      stateRef
    };
  },
})
</script>