<script setup lang="ts">
import Header from './Header/Header.vue';
import Footer from './Footer/Footer.vue';
import { RouterView } from "vue-router";
</script>

<template>
    <div class="flex flex-col h-full w-full">
        <Header />
        <RouterView />
        <Footer />
    </div>
</template>