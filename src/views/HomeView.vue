<script setup>
import {onMounted, ref} from "vue";
import ApiService from "@/foundation/api-service.js"
import {BAlert} from "bootstrap-vue-3";

  const message = ref('')
  onMounted(() => {
    console.log(message)
    ApiService.getUser()
     .then(response => {
        console.log(response)
        message.value = response.data
      })
  })

</script>

<template>
  <div class="container">
    <p>{{ message }}</p>
    <b-alert show variant="success">
      BootstrapVue 3 が正常に動作しています！
    </b-alert>
    <b-button variant="secondary">プライマリボタン</b-button>
  </div>
</template>
