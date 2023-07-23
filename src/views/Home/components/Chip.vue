<script setup lang="ts">
type ChipProps = {
    icon?: string;
    title: string;
}

defineProps<ChipProps>()
</script>

<template>
    <div 
        class="
            bg-black/50 
            text-white 
            w-fit 
            px-2 py-1 
            lg:mt-4 
            mr-1 
            rounded-md 
            font-sf-pro
            inline-flex
            items-center
            gap-1
        "
    >
        <img class="h-4 w-4" v-if="icon" :src="icon" alt="icon" />
        <p>{{ title }}</p>
    </div>
</template>