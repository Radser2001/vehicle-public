<script setup>
import { Link } from "@inertiajs/vue3";
</script>

<template>
    <!-- Navbar-->
    <header
        class="navbar navbar-expand-lg navbar-dark fixed-top"
        data-scroll-header
    >
        <div class="container">
            <a class="navbar-brand me-3 me-xl-4" href="car-finder-home.html"
                ><img
                    class="d-block"
                    src="../../../public/img/logo/logo-light.svg"
                    width="116"
                    alt="Finder"
            /></a>
            <button
                class="navbar-toggler ms-auto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span></button
            ><a
                class="btn btn-link btn-light btn-sm d-none d-lg-block order-lg-3"
                href="#signin-modal"
                data-bs-toggle="modal"
                ><i class="fi-user me-2"></i>Sign in</a
            >
            <!-- <a
                class="btn btn-primary btn-sm ms-2 order-lg-3"
                href="car-finder-sell-car.html"
                ><i class="fi-plus me-2"></i>Sell car</a
            > -->
            <div class="collapse navbar-collapse order-lg-2" id="navbarNav">
                <ul
                    class="navbar-nav navbar-nav-scroll"
                    style="max-height: 35rem"
                >
                    <!-- Menu items-->
                    <li class="nav-item active">
                        <Link class="nav-link" :href="route('index')"
                            >Home</Link
                        >
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" :href="route('vehicles.index')"
                            >Vehicles</Link
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="car-finder-home.html"
                            >About Us</a
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="car-finder-home.html"
                            >Contact Us</a
                        >
                    </li>

                    <li class="nav-item d-lg-none">
                        <a
                            class="nav-link"
                            href="#signin-modal"
                            data-bs-toggle="modal"
                            ><i class="fi-user me-2"></i>Sign in</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>
