<script setup lang="ts">
const tabsRoutes = [
    {
        name: 'Кино',
        to: '/movie',
    },
    {
        name: 'События',
        to: '/event',
    },
    {
        name: 'Спорт',
        to: '/sport'
    },
]
</script>

<template>
    <div class="flex w-[359px] h-[36px] overflow-hidden bg-primary-500 rounded-full">
        <router-link
            v-for="item in tabsRoutes"
            :to="item.to" 
            class="
               w-full h-full 
               flex 
               items-center 
               justify-center 
               rounded-full
               text-white/70
            " 
            active-class="bg-[#FE9B0E] text-[#ffffff]" 
        >
            {{ item.name }}
        </router-link>
    </div>
</template>