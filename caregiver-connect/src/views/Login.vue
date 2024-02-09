<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="/home"></ion-back-button>
          </ion-buttons>
          <ion-title>Login</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content ref="content">
        <div class="ion-text-center">
            <ion-list>
                <ion-item>
                    <ion-input label="Username"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-input label="Password"></ion-input>
                </ion-item>
            </ion-list>
            <ion-button>Login</ion-button>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
    import {
        IonBackButton,
        IonButtons,
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
        IonInput
    } from '@ionic/vue';
    import { ref } from 'vue';

    const content = ref();
    const scrollToBottom = () => {
        content.value.$e1.scrollToBottom(300);
    };
  </script>