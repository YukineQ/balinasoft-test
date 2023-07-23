<script setup lang="ts">
import starIcon from '@/assets/star.svg';
</script>

<template>
    <div class="
            flex 
            flex-1 
            md:max-w-[380px] 
            md:w-full 
            min-w-[337px] 
            h-[182px] 
            rounded-lg 
            md:bg-[#392534] 
            cursor-pointer 
            hover:bg-[#52354b] 
            transition 
            group
        "
    >
        <router-link to="#" class="flex p-[16px] gap-3 h-full w-full">
            <img class="flex-none object-cover w-[110px] h-[150px] rounded-md group-hover:scale-105 transition"
                src="@/assets/movies/megan.jpg" />
            <div class="flex flex-col relative h-full w-full">
                <h3 class="text-white font-sf-pro text-lg font-semibold">Меган</h3>
                <p class="text-white/70 font-sf-pro font-normal">Триллер, Криминальный, Драма, до 16 ноября 2022,
                    Франция</p>
                <div class="flex flex-1 flex-row items-end gap-1 text-white/70 font-sf-pro space-x-2">
                    <div class="flex flex-row items-center justify-center gap-1">
                        <img :src="starIcon" />
                        <p>6.5</p>
                    </div>
                    <p>Премьера</p>
                    <p>16+</p>
                </div>
            </div>
        </router-link>
    </div>
</template>