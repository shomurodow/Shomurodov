<script setup lang="ts">
        import router from '@/router';
        import Button from '../Button.vue';
        
        const projects = () => {
                router.push("/projects")
        }
</script>

<template>
        <section class="projects container">
                <div class="projects-title section-title">
                        <h1>последние работы</h1>
                </div>
                <div class="mt-[45px]">
                        <Button text="последние работы" color="white" :func="projects" icon="/images/icons/arrow-right.svg"/>
                </div>
        </section>
</template>