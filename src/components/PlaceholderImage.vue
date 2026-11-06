<script setup lang="ts">
const W = [320, 480, 640, 800, 1122]
const props = defineProps<{ base?: string; alt: string; ratio?: string; eager?: boolean; pos?: string; sizes?: string }>()
const set = (ext: string) => W.map(w => `${props.base}-${w}.${ext} ${w}w`).join(', ')
</script>
<template>
  <div class="ph-wrap relative overflow-hidden bg-graphite" :style="{ aspectRatio: ratio || '4/5' }">
    <picture v-if="base">
      <source type="image/avif" :srcset="set('avif')" :sizes="sizes || '(min-width:768px) 50vw, 100vw'" />
      <source type="image/webp" :srcset="set('webp')" :sizes="sizes || '(min-width:768px) 50vw, 100vw'" />
      <img :src="`${base}-800.webp`" :alt="alt" width="800" height="1000" :loading="eager ? 'eager' : 'lazy'" :fetchpriority="eager ? 'high' : undefined" decoding="async" class="ph-img h-full w-full object-cover" :style="{ objectPosition: pos || '50% 15%' }" />
    </picture>
    <template v-else>
      <svg class="ph-img absolute inset-0 h-full w-full" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" role="img" :aria-label="alt">
        <rect width="400" height="500" fill="#1a1a1c"/><circle cx="270" cy="190" r="34" fill="#3a3a3f"/><path d="M200 380c0-70 30-120 70-120s70 50 70 120z" fill="#3a3a3f"/>
      </svg>
      <span class="absolute bottom-3 left-3 bg-[#ffd400] px-2 py-1 text-[11px] font-bold text-black">FOTO PROVISÓRIA</span>
    </template>
  </div>
</template>
