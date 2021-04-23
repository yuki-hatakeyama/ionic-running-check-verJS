<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";
// import { defineComponent, watch } from "vue";
// import { useRoute } from "vue-router";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
  },
  // setup() {
  //   const route = useRoute();

  //   watch(
  //     () => route.path,
  //     (nextValu, prevValu) => {
  //       console.log("nextValu", nextValu);
  //       console.log("prevValu", prevValu);
  //     }
  //   );
  // },
});
</script>
