<script setup lang="ts">
import type { Article } from '@utils/types/meta';
import { useRoute } from '../../.nuxt/vue-router-stub';
const route = useRoute();
const { data } = await useAsyncData( () => queryContent<Article>(route.path).findOne());
</script>

<template>
  <main>
    <h1>{{ data?.title }}</h1>
    <h2>{{ data?.description }}</h2>
    <h3>Created: {{ data?.dateCreated }}</h3>
    <ContentRenderer :value="data">
      <ContentRendererMarkdown :value="(data as Record<string, any>)">
      </ContentRendererMarkdown>
    </ContentRenderer>
  </main>
</template>
