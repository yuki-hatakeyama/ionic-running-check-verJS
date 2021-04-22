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
      <p>{{computedCheck()}}</p>
      <p @click="$router.push('/about')">About > </p>
      <ExploreContainer name="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'Tab1',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  computed: {
    computedCheck() {
      // firebase情報
      return function () {
        console.log("Tab1 で computedCheck");
        return true;
      };
    },
  },
}
</script>