<script setup lang="ts">
import PendingTag from './PendingTag.vue'
import { site, visible } from '../config/site'
</script>
<template>
  <section id="metodo" class="py-24 md:py-40">
    <div class="mx-auto max-w-7xl px-5 md:px-10">
      <h2 v-reveal class="display h-lg max-w-3xl">{{ site.method.title }}</h2>
      <ol class="mt-16 border-l border-steel md:ml-[20%]">
        <li v-for="(s, i) in visible(site.method.steps)" :key="s.title" v-reveal class="relative py-8 pl-8 md:pl-14">
          <span class="absolute -left-[1px] top-8 h-10 w-[3px] bg-ember"></span>
          <span class="display absolute right-0 top-4 text-6xl text-steel md:text-8xl" aria-hidden="true">{{ i + 1 }}</span>
          <h3 class="wide text-xl md:text-2xl">{{ s.title }}<PendingTag :show="s.pending" /></h3>
          <p class="mt-2 max-w-md text-mist">{{ s.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
