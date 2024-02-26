<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Add a Provider</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="vcs">
        <ion-list style="width: 50%">
          <ion-item>
            <ion-input label-placement="floating" label="Provider ID" v-model="providerId"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Provider Name" v-model="providerName"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Addr Line 1" v-model="addressLine1"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Addr Line 2" helper-text="(optional)"
              v-model="addressLine2"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="State" v-model="state"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="City" v-model="city"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="County" v-model="county"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Zip Code" v-model="zipCode"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Phone number" v-model="phoneNumber"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label-placement="floating" label="Ownership Type" v-model="ownershipType"></ion-input>
          </ion-item>
        </ion-list>
        <ion-button @click="addProvider">
          Add Provider
        </ion-button>
      </div>
      <!-- Show ProviderAddedSuccess component when showSuccess is true -->
      <ProviderAddedSuccess v-if="showSuccess" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonBackButton, IonButtons, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonToast } from '@ionic/vue';
import axios from 'axios';

import { ref } from 'vue';
import ProviderAddedSuccess from './ProviderAddedSuccess.vue';


const providerId = ref('');
const providerName = ref('');
const addressLine1 = ref('');
const addressLine2 = ref('');
const state = ref('');
const city = ref('');
const county = ref('');
const zipCode = ref('');
const phoneNumber = ref('');
const ownershipType = ref('');


const showSuccess = ref(false); // Track whether to show the success message

const addProvider = async () => {
  try {
    const response = await axios.post('http://localhost:8080/api/providers', {
      id_cms_other: providerId.value,
      agency_name: providerName.value,
      addr1: addressLine1.value,
      addr2: addressLine2.value,
      state: state.value,
      city: city.value,
      county: county.value,
      zip: zipCode.value,
      phone_number: phoneNumber.value,
      ownership_type: ownershipType.value,
      showSuccess: true,
    });
    console.log('Provider added successfully:', response.data);
    // Show toast message
    // Optionally, you can reset input fields after successful submission
    providerId.value = '';
    providerName.value = '';
    addressLine1.value = '';
    addressLine2.value = '';
    state.value = '';
    city.value = '';
    county.value = '';
    zipCode.value = '';
    phoneNumber.value = '';
    ownershipType.value = '';
    // Reset other input fields similarly
  } catch (error: any) {
    if (error.response) {
      console.error('Error adding provider:', error.response.data);
      // Handle error response from the server
    } else {
      console.error('Unknown error:', error);
      // Handle other types of errors
    }
  }
};

</script>

<!-- Add this at the end of your template -->
<IonToast v-model:show={showToast} message={toastMessage} duration={2000} />
