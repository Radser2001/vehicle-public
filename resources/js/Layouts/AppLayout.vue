<script setup>
import { onMounted } from "vue";
import Navbar from "@/Components/Navbar.vue";
import Footer from "@/Components/Footer.vue";
import Spinner from "@/Components/Spinner.vue";
import SignIn from "@/Components/Auth/SignIn.vue";
import SignUp from "@/Components/Auth/SignUp.vue";
// onMounted(() => {
//     // Remove preloader after 2 seconds
//     setTimeout(() => {
//         const preloader = document.querySelector(".page-loading");

//         if (preloader) {
//             preloader.classList.remove("active");
//             preloader.remove();
//         }
//     }, 2000);
// });
</script>

<template>
    <div>
        <!-- <Spinner /> -->

        <main class="page-wrapper">
            <Navbar />
            <!-- Sign In Modal-->
            <SignIn />
            <!-- Sign Up Modal-->
            <SignUp />
            <slot name="dashboard" />
            <slot name="vehicles" />
            <slot name="view" />
            <slot name="about" />
            <slot name="contact" />
            <slot name="profile" />
            <slot name="signIn" />
            <slot name="register" />
            <!-- <a class="btn-scroll-top" href="#top" data-scroll
                ><span class="btn-scroll-top-tooltip text-muted fs-sm me-2"
                    >Top</span
                ><i class="btn-scroll-top-icon fi-chevron-up"> </i
            ></a> -->
            <Footer />
        </main>

        <!-- Page Heading -->
        <!-- <header class="bg-white shadow" v-if="$slots.header">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <slot name="header" />
            </div>
        </header> -->

        <!-- Page Content -->
        <!-- <main>
            <slot />
        </main> -->
    </div>
</template>
