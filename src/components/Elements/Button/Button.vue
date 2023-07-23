<script lang="ts">
export const sizes = {
    sm: "py-1.5 px-12 text-sm",
    lg: "w-full",
}

interface BaseButtonProps {
    size?: keyof typeof sizes;
}
</script>

<script setup lang="ts">
withDefaults(defineProps<BaseButtonProps>(), {
    size: "lg",
})
</script>

<template>
    <button class="relative rounded-lg font-sf-pro text-white bg-[#FE9B0E]" :class="[sizes[size]]">
        <span>
            <slot></slot>
        </span>
    </button>
</template>