<template>
    <div class="col-md-5 pt-5 pt-md-0" style="margin-top: -6rem">
        <div class="sticky-top pt-5">
            <div class="d-none d-md-block pt-5">
                <div class="d-flex mb-4">
                    <span class="badge bg-info fs-base me-2">Used</span
                    ><span
                        class="badge bg-success fs-base me-2"
                        data-bs-toggle="popover"
                        data-bs-placement="top"
                        data-bs-trigger="hover"
                        data-bs-html="true"
                        data-bs-content='&lt;div class="d-flex"&gt;&lt;i class="fi-award mt-1 me-2"&gt;&lt;/i&gt;&lt;div&gt;This car is checked and&lt;br&gt;certified by Finder.&lt;/div&gt;&lt;/div&gt;'
                        >Certified</span
                    >
                </div>
                <div class="h3 text-light">$31,900</div>
                <div class="d-flex align-items-center text-light pb-4 mb-2">
                    <div class="text-nowrap border-end border-light pe-3 me-3">
                        <i class="fi-dashboard fs-lg opacity-70 me-2"></i
                        ><span class="align-middle">25K miles</span>
                    </div>
                    <div class="text-nowrap">
                        <i class="fi-map-pin fs-lg opacity-70 me-2"></i
                        ><span class="align-middle">Chicago, IL 60603</span>
                    </div>
                </div>
            </div>
            <div class="card card-light card-body mb-4">
                <div class="text-light mb-2">Private Seller</div>
                <a
                    class="d-flex align-items-center text-decoration-none mb-3"
                    href="car-finder-vendor.html"
                    ><img
                        class="rounded-circle"
                        src="../../../../../public/img/avatars/33.jpg"
                        width="48"
                        alt="Devon Lane"
                    />
                    <div class="ps-2">
                        <h5 class="text-light mb-0">Devon Lane</h5>
                        <span class="star-rating"
                            ><i
                                class="star-rating-icon fi-star-filled active"
                            ></i
                            ><i
                                class="star-rating-icon fi-star-filled active"
                            ></i
                            ><i
                                class="star-rating-icon fi-star-filled active"
                            ></i
                            ><i
                                class="star-rating-icon fi-star-filled active"
                            ></i
                            ><i
                                class="star-rating-icon fi-star-filled active"
                            ></i></span
                        ><span
                            class="fs-sm text-light opacity-70 align-middle ms-1"
                            >(5 reviews)</span
                        >
                    </div></a
                ><a class="text-light" href="car-finder-vendor.html"
                    >Other ads by this seller</a
                >
                <div class="pt-4 mt-2">
                    <button
                        class="btn btn-outline-light btn-lg px-4 mb-3"
                        type="button"
                    >
                        <i class="fi-phone me-2"></i>(316) *** **** – reveal</button
                    ><br /><a
                        class="btn btn-primary btn-lg"
                        href="#send-mail"
                        data-bs-toggle="collapse"
                        ><i class="fi-chat-left me-2"></i>Send message</a
                    >
                    <div class="collapse" id="send-mail">
                        <form class="needs-validation pt-4" novalidate>
                            <div class="mb-3">
                                <textarea
                                    class="form-control form-control-light"
                                    rows="5"
                                    placeholder="Write your message"
                                    required
                                ></textarea>
                                <div class="invalid-feedback">
                                    Please enter you message.
                                </div>
                            </div>
                            <button
                                class="btn btn-outline-primary"
                                type="submit"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="card card-body bg-transparent border-light">
                <h5 class="text-light">
                    Email me price drops and new listings for these search
                    results:
                </h5>
                <form class="form-group form-group-light mb-3">
                    <div class="input-group">
                        <span class="input-group-text">
                            <i class="fi-mail"></i
                        ></span>
                        <input
                            class="form-control"
                            type="email"
                            placeholder="Your email"
                            required
                        />
                    </div>
                    <button class="btn btn-primary" type="submit">
                        Subscribe
                    </button>
                </form>
                <div class="form-check form-check-light">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        id="subscription-agree"
                    />
                    <label
                        class="form-check-label fs-sm opacity-70"
                        for="subscription-agree"
                        >I agree to receive price drop alerts on this vehicle
                        and helpful shopping information.</label
                    >
                </div>
            </div>
        </div>
    </div>
</template>
