<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import Hero from "@/Pages/Home/Components/Hero.vue";
import CarBodyTypes from "@/Pages/Home/Components/CarBodyTypes.vue";
import TopOffers from "@/Pages/Home/Components/TopOffers.vue";
import Brands from "@/Pages/Home/Components/Brands.vue";
import Features from "@/Pages/Home/Components/Features.vue";
import Latest from "@/Pages/Home/Components/Latest.vue";
import MobileApp from "@/Pages/Home/Components/MobileApp.vue";
import Blog from "@/Pages/Home/Components/Blog.vue";
</script>

<template>
    <AppLayout>
        <template #dashboard>
            <main class="page-wrapper">
                <!-- Page content-->
                <Hero />

                <!-- Body type selection-->
                <CarBodyTypes />

                <!-- Top offers-->
                <TopOffers />
                <!-- Brands-->
                <Brands />
                <!-- Features-->
                <Features />
                <!-- Latest cars (carousel)-->
                <Latest />
                <!-- CTA carousel-->
                <section class="container pt-4 pb-5 py-sm-5">
                    <div class="tns-carousel-wrapper">
                        <div
                            class="tns-carousel-inner d-block d-md-flex"
                            data-carousel-options='{"controlsContainer": "#external-controls", "nav": false, "gutter": 20, "autoHeight": true}'
                        >
                            <!-- Slide 1-->
                            <div>
                                <div
                                    class="card card-body p-sm-5 card-light h-100"
                                >
                                    <div
                                        class="row align-items-center py-3 py-sm-0"
                                    >
                                        <div
                                            class="col-md-4 col-xl-3 mb-4 pb-3 mb-md-0 pb-md-0 text-center text-md-start"
                                        >
                                            <h2 class="text-light">
                                                Auto Market
                                            </h2>
                                            <p
                                                class="fs-lg text-light opacity-70 pb-md-4"
                                            >
                                                Choose the best for your car!
                                            </p>
                                            <a
                                                class="btn btn-primary"
                                                href="car-finder-catalog-grid.html"
                                                >Go to shop<i
                                                    class="fi-chevron-right fs-sm ms-2"
                                                ></i
                                            ></a>
                                        </div>
                                        <div class="col-md-8 col-xl-9">
                                            <div
                                                class="row row-cols-2 row-cols-lg-4 gy-4 gx-3 gx-sm-4"
                                            >
                                                <a
                                                    class="col text-light text-decoration-none"
                                                    href="#"
                                                    ><img
                                                        class="d-block mb-2 mx-auto"
                                                        src="../../../../public/img/car-finder/categories/01.png"
                                                        width="168"
                                                        alt="Seat Covers"
                                                    />
                                                    <div
                                                        class="fw-bold text-center pt-1"
                                                    >
                                                        Seat Covers
                                                    </div></a
                                                ><a
                                                    class="col text-light text-decoration-none"
                                                    href="#"
                                                    ><img
                                                        class="d-block mb-2 mx-auto"
                                                        src="../../../../public/img/car-finder/categories/02.png"
                                                        width="168"
                                                        alt="Tires"
                                                    />
                                                    <div
                                                        class="fw-bold text-center pt-1"
                                                    >
                                                        Tires
                                                    </div></a
                                                ><a
                                                    class="col text-light text-decoration-none"
                                                    href="#"
                                                    ><img
                                                        class="d-block mb-2 mx-auto"
                                                        src="../../../../public/img/car-finder/categories/03.png"
                                                        width="168"
                                                        alt="Disks"
                                                    />
                                                    <div
                                                        class="fw-bold text-center pt-1"
                                                    >
                                                        Disks
                                                    </div></a
                                                ><a
                                                    class="col text-light text-decoration-none"
                                                    href="#"
                                                    ><img
                                                        class="d-block mb-2 mx-auto"
                                                        src="../../../../public/img/car-finder/categories/04.png"
                                                        width="168"
                                                        alt="Child Seats"
                                                    />
                                                    <div
                                                        class="fw-bold text-center pt-1"
                                                    >
                                                        Child Seats
                                                    </div></a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Slide 2-->
                            <div>
                                <div
                                    class="card card-body p-sm-5 card-light h-100"
                                >
                                    <div
                                        class="row align-items-center py-3 py-sm-0"
                                    >
                                        <div
                                            class="col-md-6 mb-4 pb-3 mb-md-0 pb-md-0 text-center text-md-start"
                                        >
                                            <h2 class="text-light">
                                                Car sale in 24 hours
                                            </h2>
                                            <p
                                                class="fs-lg text-light opacity-70 pb-md-4"
                                            >
                                                Calculate your car's value, then
                                                choose how you want to sell.
                                            </p>
                                            <a
                                                class="btn btn-primary"
                                                href="car-finder-sell-car.html"
                                                >Sell my car<i
                                                    class="fi-chevron-right fs-sm ms-2"
                                                ></i
                                            ></a>
                                        </div>
                                        <div class="col-md-6">
                                            <div
                                                class="row row-cols-sm-3 row-cols-md-2 row-cols-lg-3 gy-4 gx-3 gx-sm-4"
                                            >
                                                <div class="col">
                                                    <div
                                                        class="d-table bg-dark rounded-3 p-4 mx-auto mb-3"
                                                    >
                                                        <img
                                                            class="d-block m-sm-2"
                                                            src="../../../../public/img/car-finder/icons/buyers.svg"
                                                            width="56"
                                                            alt="Vetted buyers"
                                                        />
                                                    </div>
                                                    <div
                                                        class="fw-bold text-center"
                                                    >
                                                        Vetted buyers
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div
                                                        class="d-table bg-dark rounded-3 p-4 mx-auto mb-3"
                                                    >
                                                        <img
                                                            class="d-block m-sm-2"
                                                            src="../../../../public/img/car-finder/icons/tools.svg"
                                                            width="56"
                                                            alt="Smart tools"
                                                        />
                                                    </div>
                                                    <div
                                                        class="fw-bold text-center"
                                                    >
                                                        Smart tools
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <div
                                                        class="d-table bg-dark rounded-3 p-4 mx-auto mb-3"
                                                    >
                                                        <img
                                                            class="d-block m-sm-2"
                                                            src="../../../../public/img/car-finder/icons/handshake.svg"
                                                            width="56"
                                                            alt="Handshake"
                                                        />
                                                    </div>
                                                    <div
                                                        class="fw-bold text-center"
                                                    >
                                                        The offer you deserve
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- External carousel controls-->
                    <div
                        class="tns-carousel-controls tns-carousel-light pt-4 pb-2"
                        id="external-controls"
                    >
                        <button class="me-3" type="button">
                            <i class="fi-chevron-left"></i>
                        </button>
                        <button type="button">
                            <i class="fi-chevron-right"></i>
                        </button>
                    </div>
                </section>
                <!-- Mobile app CTA-->
                <MobileApp />
                <!-- Latest news (Blog)-->
                <Blog />
            </main>
        </template>
    </AppLayout>
</template>
