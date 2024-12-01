<script setup>
import {onMounted, ref} from "vue";
  import ApiService from "@/foundation/api-service.js"

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
  <main>
<!--    <TheWelcome />-->
    <p>{{ message }}</p>
  </main>
</template>
