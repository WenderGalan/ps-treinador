<script setup lang="ts">
import { site } from "../config/site"
defineProps<{ show?: boolean }>()
</script>
<template><span v-if="show && site.demoMode && site.showTags" class="pending-tag">A CONFIRMAR</span></template>
