<template>
  <div>
    <router-link class="underline" to="/blogs">← Back</router-link>

    <h2 class="text-xl font-semibold mt-4">Blog: {{ slug }}</h2>
  </div>
</template>

<script setup>
defineProps({
  slug: { type: String, required: true },
})
</script>
