<script setup>
import Checkbox from "@/Components/Checkbox.vue";
import GuestLayout from "@/Layouts/GuestLayout.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: "",
    password: "",
    remember: false,
});

const submit = () => {
    form.post(route("login"), {
        onFinish: () => form.reset("password"),
    });
};
</script>

<template>
    <div class="modal fade" id="signin-modal" tabindex="-1" aria-hidden="true">
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
                                Hey there!<br />Welcome back.
                            </h2>
                            <img
                                class="d-block mx-auto"
                                src="../../../../public/img/signin-modal/signin-dark.svg"
                                width="344"
                                alt="Illustartion"
                            />
                            <div class="text-light mt-4 mt-sm-5">
                                <span class="opacity-60"
                                    >Don't have an account? </span
                                ><a
                                    class="text-light"
                                    href="#signup-modal"
                                    data-bs-toggle="modal"
                                    data-bs-dismiss="modal"
                                    >Sign up here</a
                                >
                            </div>
                        </div>
                        <div
                            class="col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5"
                        >
                            <form @submit.prevent="submit">
                                <div class="mb-4">
                                    <label
                                        class="form-label text-light mb-2"
                                        for="signin-email"
                                        >Email address</label
                                    >
                                    <input
                                        class="form-control form-control-light"
                                        type="email"
                                        id="signin-email"
                                        placeholder="Enter your email"
                                        required
                                        v-model="form.email"
                                    />
                                    <InputError
                                        class="mt-2"
                                        :message="form.errors.email"
                                    />
                                </div>
                                <div class="mb-4">
                                    <div
                                        class="d-flex align-items-center justify-content-between mb-2"
                                    >
                                        <label
                                            class="form-label text-light mb-0"
                                            for="signin-password"
                                            >Password</label
                                        ><Link
                                            v-if="canResetPassword"
                                            :href="route('password.request')"
                                            class="fs-sm text-light"
                                            href="#"
                                            >Forgot password?</Link
                                        >
                                    </div>
                                    <div class="password-toggle">
                                        <input
                                            class="form-control form-control-light"
                                            type="password"
                                            v-model="form.password"
                                            id="signin-password"
                                            placeholder="Enter password"
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
                                <button
                                    :disabled="form.processing"
                                    class="btn btn-primary btn-lg w-100"
                                    type="submit"
                                >
                                    Sign in
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
