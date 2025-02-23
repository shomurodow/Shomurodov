<script setup lang="ts">
import Button from "@/components/Button.vue"


const AlertFunc = () => {
        alert(1)
}


</script>

<template>
        <div class="hero h-[100vh] flex items-center justify-center relative">
                <div class="hero-img w-[45%] h-full flex items-center absolute left-[-1vw]">
                        <img src="/images/hero.webp" alt="hero" class="w-full h-auto">
                </div>
                <div class="hero-blur bg-blur">
                        <div class="container h-full flex items-end">
                                <div class="w-full">
                                        <div class="flex justify-end">
                                                <div class="w-[35vw]">
                                                        <ul class="hero-list flex gap-[2vw] font-[Montserrat] text-[0.8vw] text-[#FFFFFF80] leading-[0.9vw] font-medium list-disc">
                                                                <li class="ml-[0.9vw]">web-developer</li>
                                                                <li>web-designer</li>
                                                        </ul>

                                                        <div class="mt-[1.3vw] hero-text">
                                                                <h1>Привет</h1>
                                                                <h1>я — веб-разработчик</h1>
                                                                <h1>с опытом более 3-х лет,</h1>
                                                                <h1>которого заботит</h1>
                                                                <h1>создание красивых</h1>
                                                                <h1>и качественных сайтов</h1>
                                                        </div>
                                                </div>
                                        </div>
                                        <div class="w-full">
                                                <!-- hero buttons  -->
                                                <Button class="mt-[3.5vw]" text="посмотреть работы" color="white" :func="AlertFunc" icon="/images/icons/arrow-down.svg"/>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
</template>


<style>
        .hero-blur {
                width: calc(100% - 4vw);
                height: calc(100% - 4vw);
        }
        .hero-img {
                @apply h-full;
        }
</style>