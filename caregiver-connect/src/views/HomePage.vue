<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="secondary">
        <div class="ion-text-center">
          <ion-title size="large">CareGiver Connect</ion-title>
        </div>
        <ion-buttons :collapse="true" slot="end">
          <ion-button color="primary" @click="() => router.push('/new')">Login</ion-button>
          <ion-button color="primary" @click="() => router.push('/new')">Signup</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">CareGiver Connect</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-button color="primary" size="large" expand="block" @click="() => router.push('/new')">
        Find Providers
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { 
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import { useRouter } from 'vue-router';
const router = useRouter();

</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
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
