<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="/home"></ion-back-button>
          </ion-buttons>
          <ion-title>New Item</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content ref="content">
        <ion-button @click="scrollToBottom">Scroll to Bottom

        </ion-button>

        <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button @click="() => router.push('/new')">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
    import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
    import { ref } from 'vue';
    import { add } from 'ionicons/icons';
    import { useRouter } from 'vue-router';
    const router = useRouter();

    const content = ref();
    const scrollToBottom = () => {
        content.value.$e1.scrollToBottom(300);
    };
  </script>