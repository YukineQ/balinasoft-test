<script setup lang="ts">
export type Entry = {
    name: string;
    to: string;
};

export type LinkListProps = {
    title: string;
    entries: Entry[];
};

defineProps<LinkListProps>();
</script>

<template>
    <div class="flex-shrink-0 items-center justify-center flex flex-col md:justify-start md:items-start">
        <h3 class="text-white/70 text-lg pb-3">{{ title }}</h3>
        <div class="flex flex-col items-center md:items-start">
            <p class="text-white pb-2" v-for="entry in entries">
                {{ entry.name }}
            </p>
        </div>
    </div>
</template>