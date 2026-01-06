<template>
  <div>
    <p class="mb-3">Blog list:</p>

    <ul class="list-disc ml-6">
      <li v-for="post in posts" :key="post.slug">
        <router-link class="underline" :to="{ name: 'blogs.show', params: { slug: post.slug } }">
          {{ post.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
const posts = [
  { slug: 'hello-world', title: 'Hello World' },
  { slug: 'vue-router', title: 'Vue Router Basics' },
]
</script>
