<template>
  <div class="p-6">
    <nav class="flex gap-4 mb-6">
      <router-link class="underline" to="/">Home</router-link>
      <router-link class="underline" to="/about">About</router-link>
    </nav>

    <router-view />
  </div>
</template>
