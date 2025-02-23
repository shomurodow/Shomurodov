<script setup lang="ts">
        import router from '@/router';
        import Button from '../Button.vue';
        import { ref } from 'vue';
        
        const push = () => {
                router.push("/projects")
        }

        const projects = ref([
                {       id: 1,
                        title: "Spectra",
                        img: "/images/projects/1.jpg"
                },
                {
                        id: 2,
                        title: "Expressimo",
                        img: "/images/projects/1.jpg"
                },
                {
                        id: 3,
                        title: "Back to business",
                        img: "/images/projects/1.jpg"
                },
                {
                        id: 4,
                        title: "Enki Beton",
                        img: "/images/projects/1.jpg"
                },
                {
                        id: 5,
                        title: "Beton Zavod",
                        img: "/images/projects/1.jpg"
                },
                {
                        id: 6,
                        title: "Beton Zavod",
                        img: "/images/projects/1.jpg"
                },
                {
                        id: 7,
                        title: "Beton Zavod",
                        img: "/images/projects/1.jpg"
                },
        ])

</script>

<template>
        <section class="projects container">
                <!-- section title -->
                <div class="projects-title section-title">
                        <h1>последние работы</h1>
                </div>
                <!-- cards -->
                <div class="cards">
                        <div  v-for="(item, index) in projects.slice(0,5)" :key="index" class="card border-[0.052vw] rounded-[1.042vw] overflow-hidden relative">
                                <div class="w-full h-full absolute top-0 left-0 bg-[#00000080]"></div>
                                <img src="/images/projects/1.webp" class="w-full h-full" alt="image" loading="lazy">
                                <div class="card-bottom absolute top-[1.042vw] left-[1.042vw] right-[1.042vw] bottom-[1.042vw] z-10 flex justify-between items-end">
                                                <div class="card-title">{{item.title}}</div>
                                                <a href="#!" class="card-btn flex items-center justify-center bg-white rounded-full">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                                                <path d="M1 21C7.66665 14.3334 14.3334 7.66665 21 1L1 21ZM21 1C17.1182 0.999999 13.2365 1 9.35463 1H21ZM21 1C21 4.88185 21 8.76394 21 12.6458V1Z" fill="white"/>
                                                                <path d="M1 21C7.66665 14.3334 14.3334 7.66665 21 1M21 1C17.1182 0.999999 13.2365 1 9.35463 1M21 1C21 4.88185 21 8.76394 21 12.6458" stroke="black" stroke-width="1.26" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </svg>
                                                </a>
                                </div>
                        </div>
                </div>
                <!--buttons -->
                <div class="mt-[2.344vw]">
                        <Button text="последние работы" color="white" icon="/images/icons/arrow-right.svg"/>
                </div>
        </section>
</template>

<style scoped>
        .cards{
                display: grid;
                gap: 1.25vw;
                /* grid-auto-flow: dense; */
                grid-auto-rows: 11vw;
                grid-template-columns: repeat(auto-fit, minmax(15.625vw, 1fr));
                justify-items: stretch;
        }
        
        .card:first-child {
                grid-column: auto / span 2;
                grid-row: auto / span 2;
        }
        /* .card:nth-child(7) {
                grid-column: auto / span 2;
                grid-row: auto / span 2;
        }
        .card:first-child .card-bottom .card-title{
                @apply font-[Unbounded] font-[500] text-[2.3vw] leading-[2.4vw];
        } */
        .card-title{
                @apply font-[Unbounded] font-[500] text-[1.146vw] leading-[1.3vw];
        }
        .card-btn {
                @apply w-[2.604vw] h-[2.604vw]
        }
        .card-btn svg {
                @apply w-[1.146vw] h-[1.146vw]
        }
</style>