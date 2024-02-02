<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
</script>

<template>
    <AppLayout>
        <template #contact>
            <!-- Page content-->
            <section class="container my-5 pt-5 pb-lg-5">
                <!-- Breadcrumb-->
                <nav class="mb-4 pt-md-3" aria-label="Breadcrumb">
                    <ol class="breadcrumb breadcrumb-light">
                        <li class="breadcrumb-item">
                            <a href="car-finder-home.html">Home</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                            Contact us
                        </li>
                    </ol>
                </nav>
                <div class="row gy-4">
                    <div class="col-lg-4 col-md-6">
                        <div class="mb-md-5 mb-4 pb-md-4">
                            <h1 class="mb-md-4 text-light">Contact us</h1>
                            <p class="mb-0 fs-lg text-light opacity-70">
                                Fill out the form and out team will try to get
                                back to you within 24 hours.
                            </p>
                        </div>
                        <div class="d-flex align-items-start mb-4 pb-md-3">
                            <img
                                class="me-3 flex-shrink-0"
                                src="img/car-finder/icons/envelope.svg"
                                width="32"
                                alt="Envelope icon"
                            />
                            <div>
                                <h3 class="h6 mb-2 pb-1 text-light">
                                    General communication
                                </h3>
                                <p class="mb-0 text-light">
                                    <span class="opacity-70"
                                        >For general queries, including
                                        partnership opportunities, please
                                        email</span
                                    ><a
                                        class="ms-1 text-nowrap"
                                        href="mailto:example@email.com"
                                        >example@email.com</a
                                    >
                                </p>
                            </div>
                        </div>
                        <div class="d-flex align-items-start mb-4 pb-md-3">
                            <img
                                class="me-3 flex-shrink-0"
                                src="img/car-finder/icons/chat.svg"
                                width="32"
                                alt="Chat icon"
                            />
                            <div>
                                <h3 class="h6 mb-2 pb-1 text-light">
                                    General communication
                                </h3>
                                <p class="mb-0 text-light">
                                    <span class="opacity-70"
                                        >We’re here to help! If you have
                                        technical issues</span
                                    ><a
                                        class="ms-1 text-nowrap"
                                        href="car-finder-help-center.html"
                                        >contact support</a
                                    >
                                </p>
                            </div>
                        </div>
                        <div class="d-flex align-items-start mb-4 pb-md-3">
                            <img
                                class="me-3 flex-shrink-0"
                                src="img/car-finder/icons/map-pin.svg"
                                width="32"
                                alt="Map pin icon"
                            />
                            <div>
                                <h3 class="h6 mb-2 pb-1 text-light">
                                    Our headquarters
                                </h3>
                                <p class="mb-0 text-light">
                                    <span class="opacity-70"
                                        >8502 Preston Rd. Inglewood, Maine
                                        98380</span
                                    ><a
                                        class="ms-1 text-nowrap"
                                        href="#map-location"
                                        data-scroll
                                        >get directions</a
                                    >
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 offset-lg-2">
                        <!-- Contact form-->
                        <form class="needs-validation" novalidate>
                            <div class="mb-4">
                                <label
                                    class="form-label text-light"
                                    for="c-name"
                                    >Full Name</label
                                >
                                <input
                                    class="form-control form-control-lg form-control-light"
                                    id="c-name"
                                    type="text"
                                    required
                                />
                                <div class="invalid-feedback">
                                    Please, enter your name
                                </div>
                            </div>
                            <div class="mb-4">
                                <label
                                    class="form-label text-light"
                                    for="c-email"
                                    >Your Email</label
                                >
                                <input
                                    class="form-control form-control-lg form-control-light"
                                    id="c-email"
                                    type="email"
                                    required
                                />
                                <div class="invalid-feedback">
                                    Please, enter your email
                                </div>
                            </div>
                            <div class="mb-4">
                                <label
                                    class="form-label text-light"
                                    for="c-subject"
                                    >Subject</label
                                >
                                <select
                                    class="form-select form-select-lg form-select-light"
                                    id="c-subject"
                                    required
                                >
                                    <option value="" selected disabled>
                                        Choose subject
                                    </option>
                                    <option value="Subject 1">Subject 1</option>
                                    <option value="Subject 2">Subject 2</option>
                                    <option value="Subject 3">Subject 3</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please, choose subject
                                </div>
                            </div>
                            <div class="mb-4">
                                <label
                                    class="form-label text-light"
                                    for="c-message"
                                    >Message</label
                                >
                                <textarea
                                    class="form-control form-control-lg form-control-light"
                                    id="c-message"
                                    rows="4"
                                    placeholder="Leave your message"
                                    required
                                ></textarea>
                                <div class="invalid-feedback">
                                    Please, leave your message
                                </div>
                            </div>
                            <div class="pt-2">
                                <button
                                    class="btn btn-lg btn-primary w-sm-auto w-100"
                                    type="submit"
                                >
                                    Submit form
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <!-- Map location-->
            <section class="container mb-5 pb-lg-5" id="map-location">
                <div
                    class="interactive-map rounded-3"
                    data-map-options='{"mapLayer": "https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=5vRQzd34MMsINEyeKPIs", "coordinates": [51.5074, -0.1278], "zoom": 10, "markers": [{"coordinates": [51.5074, -0.1278], "popup": "&lt;div class=&apos;p-3&apos;&gt;&lt;h6&gt;Hi, I&apos;m in London&lt;/h6&gt;&lt;p class=&apos;fs-sm pt-1 mt-n3 mb-0&apos;&gt;Lorem ipsum dolor sit amet elit.&lt;/p&gt;&lt;/div&gt;"}]}'
                    style="height: 500px"
                ></div>
            </section>
        </template>
    </AppLayout>
</template>
