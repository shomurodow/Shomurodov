<script setup lang="ts">
        const props = defineProps({
                text: String,
                color: String,
                func: Function,
                icon: String
        })
        console.log(props.color);
</script>

<template>
        <button class="btn" :class="`btn-${color}`" @click="func">{{ text }} <img :src="icon" alt="icon"></button>
</template>