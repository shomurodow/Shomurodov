<script setup lang="ts">
import Button from "@/components/Button.vue"
</script>

<template>
        <div class="hero h-[100vh] flex items-center justify-center relative">
                <div class="hero-img w-[45%] h-full flex items-center absolute left-[-1vw]">
                        <img src="/images/hero.webp" alt="hero" class="w-full h-auto">
                </div>
                <div class="hero-blur bg-blur">
                        <div class="max-w-[70vw] h-full flex items-end p-[1.5vw] mx-auto">
                                <div class="w-full">
                                        <div class="flex justify-end">
                                                <div class="w-[35vw]">
                                                        <ul class="hero-list flex gap-[2vw] font-[Montserrat] text-[0.8vw] font-medium list-disc">
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
                                                <Button class="mt-[3.5vw]"/>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
</template>


<style>
        .hero-blur {
                width: calc(100% - 80px);
                height: calc(100vh - 80px); 
        }
        .hero-img {
                height: 100%;
                /* height: calc(100vh - 80px);  */
        }
        .hero-text h1{
                font-size: 2.3vw;
                line-height: 2.4vw;
        }
        /* hero list */
        .hero-list{
                /* font-weight: 600; */
                /* font-size: 14px; */
                line-height: 17.07px;
                color: #FFFFFF80;  
        }
</style>