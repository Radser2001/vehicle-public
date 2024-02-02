<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import Header from "./Components/Header.vue";
import FAQ from "./Components/FAQ.vue";
import Features from "./Components/Features.vue";
import Partners from "./Components/Partners.vue";
import StorySteps from "./Components/StorySteps.vue";
</script>

<template>
    <AppLayout>
        <template #about>
            <Header />
            <StorySteps />
            <Features />
            <Partners />
            <FAQ />
        </template>
    </AppLayout>
</template>
