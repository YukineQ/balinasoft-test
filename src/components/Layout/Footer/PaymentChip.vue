<script setup lang="ts">
const paymentIcons = [
    'src/assets/payments/belcard.png',
    'src/assets/payments/belcardPassword.png',
    'src/assets/payments/mastercard.png',
    'src/assets/payments/mastercardSecure.png',
    'src/assets/payments/visa.png',
    'src/assets/payments/webpay.png',
]
</script>

<template>
    <div v-for="item in paymentIcons" class="flex items-center justify-center px-1.5 py-[3.5px] rounded-md h-6 bg-white w-fit">
        <img class="w-full h-full object-contain" :src="item" />
    </div>
</template>