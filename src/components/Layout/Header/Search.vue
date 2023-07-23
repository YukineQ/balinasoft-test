<script setup lang="ts">
import searchIcon from '@/assets/magnifying-glass.svg';
</script>

<template>
    <div class="w-9 h-9 rounded-full bg-primary-500 flex justify-center items-center cursor-pointer">
        <img :src="searchIcon" alt="Search"/>
    </div>
</template>