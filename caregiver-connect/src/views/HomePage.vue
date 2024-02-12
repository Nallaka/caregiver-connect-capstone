<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <div class="ion-text-left">
          <ion-title size="large">
            <img src="../../logo.jpg" width="50"/>
            <ion-text color="secondary">CareGiver Connect</ion-text>
          </ion-title>
        </div>
        <ion-buttons :collapse="true" slot="end">
          <ion-button color="secondary" fill="solid" @click="() => router.push('/login')">Login</ion-button>
          <ion-button color="secondary" fill="solid" @click="() => router.push('/signup')">Signup</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">
            <ion-text color="secondary">CareGiver Connect</ion-text>
          </ion-title>
        <ion-buttons :collapse="true" slot="end">
          <ion-button color="primary" fill="solid" @click="() => router.push('/login')">Login</ion-button>
          <ion-button color="primary" fill="solid" @click="() => router.push('/signup')">Signup</ion-button>
        </ion-buttons>
        </ion-toolbar>
      </ion-header> -->
      <ion-card>
        <img src="../../banner.png"/>
        <ion-card-content>
          We are CareGiver Connect and we exist to connect dimentia patiens to providers and resources in their local resources.
          Start with searching for providers or resources in your local area or let others know about resources in your area!
        </ion-card-content>
      </ion-card>
      <ion-button color="primary" size="large" expand="block" @click="() => router.push('/providers-search')">
        <ion-icon slot="start" :icon="searchCircle"></ion-icon>
        Find Providers
      </ion-button>
      <ion-button color="primary" size="large" expand="block" @click="() => router.push('/services-search')">
        <ion-icon slot="start" :icon="searchCircle"></ion-icon>
        Find Services
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { 
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonCard,
    IonCardContent,
    IonText,
  } from '@ionic/vue';
  import { useRouter } from 'vue-router';
  import { searchCircle } from 'ionicons/icons';
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
    font-size: 25px;
    line-height: 32px;
    
    color: #8c8c8c;
    
    margin: 0;
  }

  #container a {
    text-decoration: none;
  }
</style>
