<script setup lang="ts">
import AppLogo from '@/components/Misc/AppLogo.vue';
import Tabs from './Tabs.vue';
import Search from './Search.vue';
import { Container } from '@/components/Elements/Container';
</script>

<template>
    <Container class="pt-[29px] md:justify-between justify-center">
        <AppLogo />
        <div class="hidden md:flex w-full items-center justify-center h-14">
            <Tabs />
        </div>
        <div class="flex items-center h-14 absolute right-8 md:relative md:right-0">
            <Search />
        </div>
    </Container>
</template>