<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import SellerSidebar from "@/Pages/Vehicles/Components/SellerSidebar.vue";
import Features from "@/Pages/Vehicles/Components/Features.vue";
import Card from "@/Pages/Vehicles/Components/Card.vue";
</script>

<template>
    <AppLayout>
        <template #view>
            <div class="container mt-5 mb-md-4 py-5">
                <!-- Breadcrumb-->
                <nav class="mb-3 pt-md-3" aria-label="Breadcrumb">
                    <ol class="breadcrumb breadcrumb-light">
                        <li class="breadcrumb-item">
                            <a href="car-finder-home.html">Home</a>
                        </li>
                        <li class="breadcrumb-item">
                            <a href="car-finder-catalog-grid.html">Used cars</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                            Mercedes-Benz E 400 Cabriolet
                        </li>
                    </ol>
                </nav>
                <!-- Title + Sharing-->
                <div
                    class="d-sm-flex align-items-end align-items-md-center justify-content-between position-relative mb-4"
                    style="z-index: 1025"
                >
                    <div class="me-3">
                        <h1 class="h2 text-light mb-md-0">
                            Mercedes-Benz E 400 Cabriolet
                        </h1>
                        <div class="d-md-none">
                            <div class="d-flex align-items-center mb-3">
                                <div class="h3 mb-0 text-light">$31,900</div>
                                <div class="text-nowrap ps-3">
                                    <span class="badge bg-info fs-base me-2"
                                        >Used</span
                                    ><span
                                        class="badge bg-success fs-base me-2"
                                        data-bs-toggle="popover"
                                        data-bs-placement="bottom"
                                        data-bs-trigger="hover"
                                        data-bs-html="true"
                                        data-bs-content='&lt;div class="d-flex"&gt;&lt;i class="fi-award mt-1 me-2"&gt;&lt;/i&gt;&lt;div&gt;This car is checked and&lt;br&gt;certified by Finder.&lt;/div&gt;&lt;/div&gt;'
                                        >Certified</span
                                    >
                                </div>
                            </div>
                            <div
                                class="d-flex flex-wrap align-items-center text-light mb-2"
                            >
                                <div
                                    class="text-nowrap border-end border-light pe-3 me-3"
                                >
                                    <i
                                        class="fi-dashboard fs-lg opacity-70 me-2"
                                    ></i
                                    ><span class="align-middle">25K miles</span>
                                </div>
                                <div class="text-nowrap">
                                    <i
                                        class="fi-map-pin fs-lg opacity-70 me-2"
                                    ></i
                                    ><span class="align-middle"
                                        >Chicago, IL 60603</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-nowrap pt-3 pt-sm-0">
                        <button
                            class="btn btn-icon btn-translucent-light btn-xs rounded-circle mb-sm-2"
                            type="button"
                            data-bs-toggle="tooltip"
                            title="Add to Wishlist"
                        >
                            <i class="fi-heart"></i>
                        </button>
                        <div
                            class="dropdown d-inline-block"
                            data-bs-toggle="tooltip"
                            title="Share"
                        >
                            <button
                                class="btn btn-icon btn-translucent-light btn-xs rounded-circle ms-2 mb-sm-2"
                                type="button"
                                data-bs-toggle="dropdown"
                            >
                                <i class="fi-share"></i>
                            </button>
                            <div
                                class="dropdown-menu dropdown-menu-dark dropdown-menu-end my-1"
                            >
                                <button class="dropdown-item" type="button">
                                    <i
                                        class="fi-facebook fs-base opacity-75 me-2"
                                    ></i
                                    >Facebook
                                </button>
                                <button class="dropdown-item" type="button">
                                    <i
                                        class="fi-twitter fs-base opacity-75 me-2"
                                    ></i
                                    >Twitter
                                </button>
                                <button class="dropdown-item" type="button">
                                    <i
                                        class="fi-instagram fs-base opacity-75 me-2"
                                    ></i
                                    >Instagram
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-7">
                        <!-- Gallery-->
                        <div class="tns-carousel-wrapper">
                            <div class="tns-slides-count text-light">
                                <i class="fi-image fs-lg me-2"></i>
                                <div class="ps-1">
                                    <span
                                        class="tns-current-slide fs-5 fw-bold"
                                    ></span
                                    ><span class="fs-5 fw-bold">/</span
                                    ><span
                                        class="tns-total-slides fs-5 fw-bold"
                                    ></span>
                                </div>
                            </div>
                            <div
                                class="tns-carousel-inner"
                                data-carousel-options='{"navAsThumbnails": true, "navContainer": "#thumbnails", "gutter": 12, "responsive": {"0":{"controls": false},"500":{"controls": true}}}'
                            >
                                <div>
                                    <img
                                        class="rounded-3"
                                        src="../../../../public/img/car-finder/single/gallery/01.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div>
                                    <img
                                        class="rounded-3"
                                        src="../../../../public/img/car-finder/single/gallery/02.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div>
                                    <img
                                        class="rounded-3"
                                        src="../../../../public/img/car-finder/single/gallery/03.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div>
                                    <img
                                        class="rounded-3"
                                        src="../../../../public/img/car-finder/single/gallery/04.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div>
                                    <img
                                        class="rounded-3"
                                        src="../../../../public/img/car-finder/single/gallery/05.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div>
                                    <img
                                        class="rounded-3"
                                        src="../../../../public/img/car-finder/single/gallery/06.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div>
                                    <img
                                        class="rounded-3"
                                        src="../../../../public/img/car-finder/single/gallery/07.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div>
                                    <img
                                        class="rounded-3"
                                        src="../../../../public/img/car-finder/single/gallery/08.jpg"
                                        alt="Image"
                                    />
                                </div>
                            </div>
                        </div>
                        <ul class="tns-thumbnails" id="thumbnails">
                            <li class="tns-thumbnail">
                                <img
                                    src="../../../../public/img/car-finder/single/gallery/th01.jpg"
                                    alt="Thumbnail"
                                />
                            </li>
                            <li class="tns-thumbnail">
                                <img
                                    src="../../../../public/img/car-finder/single/gallery/th02.jpg"
                                    alt="Thumbnail"
                                />
                            </li>
                            <li class="tns-thumbnail">
                                <img
                                    src="../../../../public/img/car-finder/single/gallery/th03.jpg"
                                    alt="Thumbnail"
                                />
                            </li>
                            <li class="tns-thumbnail">
                                <img
                                    src="../../../../public/img/car-finder/single/gallery/th04.jpg"
                                    alt="Thumbnail"
                                />
                            </li>
                            <li class="tns-thumbnail">
                                <img
                                    src="../../../../public/img/car-finder/single/gallery/th05.jpg"
                                    alt="Thumbnail"
                                />
                            </li>
                            <li class="tns-thumbnail">
                                <img
                                    src="../../../../public/img/car-finder/single/gallery/th06.jpg"
                                    alt="Thumbnail"
                                />
                            </li>
                            <li class="tns-thumbnail">
                                <img
                                    src="../../../../public/img/car-finder/single/gallery/th07.jpg"
                                    alt="Thumbnail"
                                />
                            </li>
                            <li class="tns-thumbnail">
                                <img
                                    src="../../../../public/img/car-finder/single/gallery/th08.jpg"
                                    alt="Thumbnail"
                                />
                            </li>
                            <li class="tns-thumbnail">
                                <a
                                    class="d-flex flex-column align-items-center justify-content-center w-100 h-100 bg-faded-light rounded text-light text-decoration-none"
                                    href="https://www.youtube.com/watch?v=0ffN2hgKzOE"
                                    data-bs-toggle="lightbox"
                                    data-video="true"
                                    ><i class="fi-play-circle fs-5"></i
                                    ><span class="opacity-70 mt-1"
                                        >Play video</span
                                    ></a
                                >
                            </li>
                        </ul>
                        <!-- Specs-->
                        <div class="py-3 mb-3">
                            <h2 class="h4 text-light mb-4">Specifications</h2>
                            <div class="row text-light">
                                <div class="col-sm-6 col-md-12 col-lg-6">
                                    <ul class="list-unstyled">
                                        <li class="mb-2">
                                            <strong>Manufacturing Year:</strong
                                            ><span class="opacity-70 ms-1"
                                                >2018</span
                                            >
                                        </li>
                                        <li class="mb-2">
                                            <strong>Mileage:</strong
                                            ><span class="opacity-70 ms-1"
                                                >25K miles</span
                                            >
                                        </li>
                                        <li class="mb-2">
                                            <strong>Body Type:</strong
                                            ><span class="opacity-70 ms-1"
                                                >Convertible</span
                                            >
                                        </li>
                                        <li class="mb-2">
                                            <strong>Drivetrain:</strong
                                            ><span class="opacity-70 ms-1"
                                                >Front Wheel Drive</span
                                            >
                                        </li>
                                        <li class="mb-2">
                                            <strong>Engine:</strong
                                            ><span class="opacity-70 ms-1"
                                                >2.5L Turbo 6 Cylinder</span
                                            >
                                        </li>
                                        <li class="mb-2">
                                            <strong>Transmission:</strong
                                            ><span class="opacity-70 ms-1"
                                                >7-Speed Shiftable
                                                Automatic</span
                                            >
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-sm-6 col-md-12 col-lg-6">
                                    <ul class="list-unstyled">
                                        <li class="mb-2">
                                            <strong>Fuel Type:</strong
                                            ><span class="opacity-70 ms-1"
                                                >Gasoline</span
                                            >
                                        </li>
                                        <li class="mb-2">
                                            <strong>City MPG:</strong
                                            ><span class="opacity-70 ms-1"
                                                >20</span
                                            ><i
                                                class="fi-alert-circle fs-sm text-primary ms-2"
                                                data-bs-toggle="tooltip"
                                                title="Verified by seller"
                                            ></i>
                                        </li>
                                        <li class="mb-2">
                                            <strong>Highway MPG:</strong
                                            ><span class="opacity-70 ms-1"
                                                >29</span
                                            ><i
                                                class="fi-alert-circle fs-sm text-primary ms-2"
                                                data-bs-toggle="tooltip"
                                                title="Verified by seller"
                                            ></i>
                                        </li>
                                        <li class="mb-2">
                                            <strong>Exterior Color:</strong
                                            ><span class="opacity-70 ms-1"
                                                >Aspen White</span
                                            >
                                        </li>
                                        <li class="mb-2">
                                            <strong>Interior Color:</strong
                                            ><span class="opacity-70 ms-1"
                                                >Charcoal</span
                                            >
                                        </li>
                                        <li class="mb-2">
                                            <strong>VIN:</strong
                                            ><span class="opacity-70 ms-1"
                                                >2VW821AU9JM754284</span
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- Card with icon boxes-->
                        <Card />
                        <!-- Features-->
                        <Features />
                        <!-- Description-->
                        <div class="pb-4 mb-3">
                            <h2 class="h4 text-light pt-4 mt-3">
                                Seller's Description
                            </h2>
                            <p class="text-light opacity-70 mb-1">
                                Lorem tincidunt lectus vitae id vulputate diam
                                quam. Imperdiet non scelerisque turpis sed etiam
                                ultrices. Blandit mollis dignissim egestas
                                consectetur porttitor. Vulputate dolor pretium,
                                dignissim eu augue sit ut convallis. Lectus est,
                                magna urna feugiat sed ultricies sed in lacinia.
                                Fusce potenti sit id pharetra vel ornare.
                                Vestibulum sed tellus ullamcorper arcu.
                            </p>
                            <div class="collapse" id="seeMoreDescription">
                                <p class="text-light opacity-70 mb-1">
                                    Asperiores eos molestias, aspernatur
                                    assumenda vel corporis ex, magni excepturi
                                    totam exercitationem quia inventore quod
                                    amet labore impedit quae distinctio?
                                    Officiis blanditiis consequatur alias,
                                    atque, sed est incidunt accusamus
                                    repudiandae tempora repellendus obcaecati
                                    delectus ducimus inventore tempore harum
                                    numquam autem eligendi culpa.
                                </p>
                            </div>
                            <a
                                class="collapse-label collapsed"
                                href="#seeMoreDescription"
                                data-bs-toggle="collapse"
                                data-bs-label-collapsed="Show more"
                                data-bs-label-expanded="Show less"
                                role="button"
                                aria-expanded="false"
                                aria-controls="seeMoreDescription"
                            ></a>
                        </div>
                        <!-- Post meta-->
                        <div
                            class="d-flex flex-wrap border-top border-light fs-sm text-light pt-4 pb-5 pb-md-2"
                        >
                            <div class="border-end border-light pe-3 me-3">
                                <span class="opacity-70"
                                    >Published:
                                    <strong>May 9, 2021</strong></span
                                >
                            </div>
                            <div class="border-end border-light pe-3 me-3">
                                <span class="opacity-70"
                                    >Ad number: <strong>681013232</strong></span
                                >
                            </div>
                            <div class="opacity-70">
                                Views: <strong>57</strong>
                            </div>
                        </div>
                    </div>
                    <!-- Sidebar-->
                    <SellerSidebar />
                </div>
                <!-- Related posts (Carousel)
<RelatedPosts/> -->
            </div></template
        >
    </AppLayout>
</template>
