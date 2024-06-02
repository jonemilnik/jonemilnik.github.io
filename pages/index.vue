<script setup lang="ts">
import type { Home } from '@utils/types/meta';
import { useRoute } from '../.nuxt/vue-router-stub';
const route = useRoute();
const { data } = await useAsyncData( () => queryContent<Home>(route.path).findOne());
</script>

<template>
 <main>
  <ContentRenderer :value="data">
    <h1>{{ data?.title }}</h1>
    <h2>{{ data?.description }}</h2>
    <ContentRendererMarkdown :value="(data as Record<string, any>)">
    </ContentRendererMarkdown>
  </ContentRenderer>
  </main>
</template>