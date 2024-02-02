<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";

const form = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
});

const submit = () => {
    form.post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation"),
    });
};
</script>

<template>
    <div class="modal fade" id="signup-modal" tabindex="-1" aria-hidden="true">
        <div
            class="modal-dialog modal-lg modal-dialog-centered p-2 my-0 mx-auto"
            style="max-width: 950px"
        >
            <div class="modal-content bg-dark border-light">
                <div class="modal-body px-0 py-2 py-sm-0">
                    <button
                        class="btn-close btn-close-white position-absolute top-0 end-0 mt-3 me-3"
                        type="button"
                        data-bs-dismiss="modal"
                    ></button>
                    <div class="row mx-0 align-items-center">
                        <div
                            class="col-md-6 border-end-md border-light p-4 p-sm-5"
                        >
                            <h2 class="h3 text-light mb-4 mb-sm-5">
                                Join Finder.<br />Get premium benefits:
                            </h2>
                            <ul class="list-unstyled mb-4 mb-sm-5">
                                <li class="d-flex mb-2">
                                    <i
                                        class="fi-check-circle text-primary mt-1 me-2"
                                    ></i
                                    ><span class="text-light"
                                        >Add and promote your listings</span
                                    >
                                </li>
                                <li class="d-flex mb-2">
                                    <i
                                        class="fi-check-circle text-primary mt-1 me-2"
                                    ></i
                                    ><span class="text-light"
                                        >Easily manage your wishlist</span
                                    >
                                </li>
                                <li class="d-flex mb-0">
                                    <i
                                        class="fi-check-circle text-primary mt-1 me-2"
                                    ></i
                                    ><span class="text-light"
                                        >Leave reviews</span
                                    >
                                </li>
                            </ul>
                            <img
                                class="d-block mx-auto"
                                src="../../../../public/img/signin-modal/signup-dark.svg"
                                width="344"
                                alt="Illustartion"
                            />
                            <div class="text-light mt-sm-4 pt-md-3">
                                <span class="opacity-60"
                                    >Already have an account? </span
                                ><a
                                    class="text-light"
                                    href="#signin-modal"
                                    data-bs-toggle="modal"
                                    data-bs-dismiss="modal"
                                    >Sign in</a
                                >
                            </div>
                        </div>
                        <div
                            class="col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5"
                        >
                            <form @submit.prevent="submit">
                                <div class="mb-4">
                                    <label
                                        class="form-label text-light"
                                        for="signup-name"
                                        >Full name</label
                                    >
                                    <input
                                        class="form-control form-control-light"
                                        type="text"
                                        v-model="form.name"
                                        id="signup-name"
                                        placeholder="Enter your full name"
                                        required
                                    />
                                    <InputError
                                        class="mt-2"
                                        :message="form.errors.name"
                                    />
                                </div>
                                <div class="mb-4">
                                    <label
                                        class="form-label text-light"
                                        for="signup-email"
                                        >Email address</label
                                    >
                                    <input
                                        class="form-control form-control-light"
                                        type="email"
                                        id="signup-email"
                                        v-model="form.email"
                                        placeholder="Enter your email"
                                        required
                                    />
                                    <InputError
                                        class="mt-2"
                                        :message="form.errors.email"
                                    />
                                </div>
                                <div class="mb-4">
                                    <label
                                        class="form-label text-light"
                                        for="signup-password"
                                        >Password
                                        <span class="fs-sm opacity-50"
                                            >min. 8 char</span
                                        ></label
                                    >
                                    <div class="password-toggle">
                                        <input
                                            class="form-control form-control-light"
                                            type="password"
                                            id="signup-password"
                                            v-model="form.password"
                                            minlength="8"
                                            required
                                        />
                                        <InputError
                                            class="mt-2"
                                            :message="form.errors.password"
                                        />
                                        <label
                                            class="password-toggle-btn"
                                            aria-label="Show/hide password"
                                        >
                                            <input
                                                class="password-toggle-check"
                                                type="checkbox"
                                            /><span
                                                class="password-toggle-indicator"
                                            ></span>
                                        </label>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <label
                                        class="form-label text-light"
                                        for="signup-password-confirm"
                                        >Confirm password</label
                                    >
                                    <div class="password-toggle">
                                        <input
                                            class="form-control form-control-light"
                                            type="password"
                                            id="signup-password-confirm"
                                            v-model="form.password_confirmation"
                                            minlength="8"
                                            required
                                        />
                                        <InputError
                                            class="mt-2"
                                            :message="
                                                form.errors
                                                    .password_confirmation
                                            "
                                        />
                                        <label
                                            class="password-toggle-btn"
                                            aria-label="Show/hide password"
                                        >
                                            <input
                                                class="password-toggle-check"
                                                type="checkbox"
                                            /><span
                                                class="password-toggle-indicator"
                                            ></span>
                                        </label>
                                    </div>
                                </div>

                                <button
                                    class="btn btn-primary btn-lg w-100"
                                    type="submit"
                                    :disabled="form.processing"
                                >
                                    Sign up
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
