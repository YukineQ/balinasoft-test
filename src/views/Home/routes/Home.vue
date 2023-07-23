<script setup lang="ts">
import starIcon from '@/assets/star.svg';
import frag1 from '@/assets/movies/frag1.png';
import arrowDown from '@/assets/arrowDown.svg';
import { Button } from '@/components/Elements/Button';
import { Container } from '@/components/Elements/Container';
import Chip from '../components/Chip.vue';
import MovieCard from '../components/MovieCard.vue';
</script>

<template>
    <Container class="flex-col pt-[39px]">
        <div class="flex relative flex-col lg:flex-row gap-5">
            <img src="@/assets/movies/megan.jpg" 
                class="
                    hidden 
                    lg:flex 
                    flex-none 
                    object-cover 
                    w-[380px] 
                    h-[545px] 
                    rounded-lg
                " />
            <div class="flex flex-col w-full">
                <div class="flex relative flex-col">
                    <h4 class="
                            text-white/70 
                            font-sf-pro 
                            order-2 
                            lg:order-none 
                            absolute 
                            lg:relative 
                            inset-y-3/4 
                            pt-12 
                            lg:inset-0 
                            lg:pt-0 
                            z-50
                        ">
                        2022, США, 1ч 45 мин, В прокате до 26 ноября
                    </h4>
                    <h2 class="
                            text-white 
                            text-4xl 
                            font-bold 
                            font-sf-pro 
                            md:order-1 
                            lg:order-none 
                            absolute 
                            inset-y-3/4 
                            lg:relative 
                            lg:inset-0 
                            z-50
                        ">
                        Меган
                    </h2>
                    <div class="flex flex-row order-3 lg:order-none flex-wrap">
                        <Chip title="Премьера" />
                        <Chip title="6.5" :icon="starIcon" />
                        <Chip title="Боевик" />
                        <Chip title="Детектив" />
                        <Chip title="16+" />
                    </div>
                    <div class="h-[480px] w-full relative lg:hidden flex">
                        <img src="@/assets/movies/Fortune.jpg" class="object-cover" />
                        <div class="absolute w-full h-full bg-gradient-to-b from-stone-900/0 to-[#261121]"></div>
                    </div>
                </div>
                <div class="relative flex flex-col md:flex-row mt-4 gap-2 h-[52px]">
                    <div class="
                        flex 
                        items-center 
                        md:border 
                        w-full 
                        md:w-[383px] 
                        px-5 
                        border-[#695965] 
                        rounded-2xl 
                        text-white 
                        font-sf-pro 
                        gap-3 
                        order-2 
                        md:order-none
                    "
                >
                        <div class="flex w-full items-center justify-between">
                            <div>
                                <h5 class="font-bold text-sm">IMDb</h5>
                                <p class="text-xs text-white/70">256 отзывов</p>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold">9.2</h3>
                            </div>
                        </div>
                        <div className="w-px h-8 bg-white bg-opacity-20" />
                        <div class="flex w-full items-center justify-between">
                            <div>
                                <h5 class="font-bold text-sm">Кинопоиск</h5>
                                <p class="text-xs text-white/70">132 отзыва</p>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold">8.7</h3>
                            </div>
                        </div>
                    </div>
                    <Button size="sm" class="w-full md:w-1/2 lg:hidden order-1 md:order-none py-2.5 my-4 md:my-0">
                        Купить билет (от 6 руб.)
                    </Button>
                </div>
                <div class="order-4 lg:order-none">
                    <div class="lg:pt-6 flex md:flex-row flex-col md:gap-[63px] gap-3 pt-4 md:pt-0">
                        <div>
                            <p class="text-white/70 font-sf-pro text-sm">Премьера</p>
                            <h5 class="text-white font-sf-pro pt-1">16 февраля 2023</h5>
                        </div>
                        <div>
                            <p class="text-white/70 font-sf-pro text-sm">Возраст</p>
                            <h5 class="text-white font-sf-pro pt-1">12+</h5>
                        </div>
                        <div>
                            <p class="text-white/70 font-sf-pro text-sm">Страна</p>
                            <h5 class="text-white font-sf-pro pt-1">США</h5>
                        </div>
                        <div>
                            <p class="text-white/70 font-sf-pro text-sm">Режисер</p>
                            <h5 class="text-white font-sf-pro pt-1">Дэвид Литч</h5>
                        </div>
                    </div>
                </div>
                <div class="order-5 lg:order-none">
                    <div className="hidden md:flex w-full h-px mt-[19px] mb-[15px] bg-white bg-opacity-30" />
                    <div class="pt-3 md:pt-0">
                        <p class="text-white/70 text-sm font-sf-pro">В ролях</p>
                        <p class="text-white font-sf-pro pr-2">
                            Брэд Питт, Джои Кинг, Аарон Тейлор-Джонсон, Брайан Тайри,
                            Генри
                            Эндрю, Кодзи Хироюки, Санада Бэд Банни,
                            Логан Лерман, Зази Битц, Майкл Шеннон
                        </p>
                    </div>
                </div>
                <div
                    className="hidden md:flex w-full h-px mt-[19px] mb-[15px] bg-white bg-opacity-30 order-3 lg:order-none" />
                <div>
                    <h3 class="text-white font-sf-pro text-2xl font-bold order-1 lg:order-none sm:order-3 pt-20 md:pt-6">
                        Фрагменты и описание
                    </h3>
                    <div class="flex gap-2 pt-4 overflow-hidden">
                        <img class="h-[106px] w-[198px] rounded-md" :src="frag1" />
                        <img class="h-[106px] w-[198px] rounded-md" :src="frag1" />
                        <img class="h-[106px] w-[198px] rounded-md" :src="frag1" />
                    </div>
                </div>
                <div>
                    <p class="text-white pt-6 pb-2 sm:order-2 order-4 lg:order-none">
                        Наёмник под кодовым именем Божья Коровка отправляется на новую миссию: вместо заболевшего коллеги он
                        должен
                        сесть в скоростной поезд Токио — Киото, выкрасть чемоданчик и сойти на промежуточной станции. Но
                        выполнение
                        простого задания сильно осложняется, когда выясняется, что состав просто кишит всевозможными
                        киллерами.
                    </p>
                    <div class="flex w-fit items-center justify-center">
                        <p class="text-[#FE9B0E] font-sf-pro">Развернуть</p>
                        <img :src="arrowDown" />
                    </div>
                </div>
            </div>
        </div>
    </Container>
    <div class="
            flex 
            items-center 
            md:justify-center 
            md:bg-[#503449] 
            md:border 
            border-[#503449] 
            lg:rounded-lg 
            md:my-6 
            h-[59px] 
            lg:mx-[130px]
            bg-inherit
            mx-0
            pl-4
            md:pl-0
        ">
        <p class="text-white font-sf-pro text-2xl font-bold md:text-xl md:font-normal">
            Похожие по жанру
        </p>
    </div>
    <Container class="pb-[39px] mx-0">
        <div class="flex w-full flex-wrap gap-5 items-center justify-center">
            <MovieCard v-for="item in 5" />
        </div>
    </Container>
</template>