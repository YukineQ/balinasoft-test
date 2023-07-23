<script setup lang="ts">
import { AppLogo } from '@/components/Misc';
import { Button } from '@/components/Elements/Button';
import LinkList, { Entry } from './LinkList.vue';
import PaymentChip from './PaymentChip.vue';
import xmark from '@/assets/x-mark.svg';

const movies: Entry[] = [
    { name: 'Кинотеатр «Октябрь»', to: '#' },
    { name: 'Кинотеатр «Ноябрь»', to: '#' },
];

const events: Entry[] = [
    { name: 'Концентры', to: '#' },
    { name: 'Бои', to: '#' },
    { name: 'Семинары', to: '#' },
    { name: 'Прочее', to: '#' }
];

const sport: Entry[] = [
    { name: 'Разовое посещение', to: '#' },
    { name: 'Купить абонемент', to: '#' },
];
</script>

<template>
    <div class="w-full h-full bg-primary-600">
        <div
            class="w-full lg:px-[128px] md:px-16 box-border flex md:flex-row flex-col md:justify-between items-center gap-8">
            <div class="pt-[25px] flex flex-col gap-2 w-fit items-center md:items-start">
                <div class="w-[100px] h-[61px] flex items-center justify-center">
                    <AppLogo />
                </div>
                <p class="hidden max-w-[226px] text-[#DCD6DB] text-[13px] font-normal font-sf-pro md:flex shrink">
                    Подпишись, оставь телефон или e-mail для получения рекламных сообщений.
                </p>
                <Button size="sm" class="w-fit mt-2 hidden md:flex">Подписаться</Button>
            </div>
            <div class="flex md:flex-row flex-col gap-8 pt-4 md:pt-[46px] lg:pr-24">
                <LinkList title="Кино" :entries="movies" />
                <LinkList title="Мероприятия" :entries="events" />
                <LinkList title="Спорт" :entries="sport" />
            </div>
        </div>
        <div class="md:hidden py-4">
            <div class="w-full px-10 h-px opacity-50 bg-white bg-opacity-20" />
            <div>
                <div class="text-white font-sf-pro text-2xl font-bold flex relative py-6">
                    <h4 class="w-full text-center">Подписка</h4>
                    <div class="
                            flex 
                            h-8 w-8 
                            absolute 
                            right-3 
                            justify-center 
                            items-center 
                            rounded-full 
                            bg-white 
                            bg-opacity-20 
                            hover:bg-opacity-30 
                            transition 
                            cursor-pointer
                        "
                    >
                        <img :src="xmark" class="w-6 h-6 fill-white"/>
                    </div>
                </div>
                <p class="text-center text-white font-sf-pro px-10">
                    Подпишись, оставь телефон или e-mail для получения рекламных сообщений.
                </p>
                <div class="w-full flex items-center justify-center py-6">
                    <Button class="py-2.5 w-[90%]">Подписаться</Button>
                </div>
            </div>
            <div class="w-full px-10 h-px opacity-50 bg-white bg-opacity-20" />
        </div>
        <div class="flex flex-col items-center justify-center">
            <div class="flex flex-row gap-1 justify-center items-center pt-14">
                <PaymentChip />
            </div>
            <p class="font-sf-pro text-xs text-[#FE9B0E] pt-4">Политика конфиденциальности, Договор публичной оферты</p>
            <p class="
                md:text-sm 
                text-xs 
                font-nunito 
                font-thin 
                text-white/50 
                pt-1 px-11 
                text-center 
                md:px-0 
                leading-[18px] 
                md:leading-normal
            ">
                © 2023 ООО «Кино-инвест», г. Минск, ул. Матроскина, 23 УНП 101333338 тел: 8 017 217-11-77
            </p>
        </div>
    </div>
</template>