<template>
    <div>
        <div class="bg-white bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
            <div class="relative">
                <div class="container">
                    <div class="items-center justify-between py-10 md:flex md:h-[400px] md:py-0">
                        <div>
                            <h2 class="mt-7 text-3xl text-black md:text-[50px] md:leading-[70px]">Journal</h2>
                            <h4 class="text-black md:text-2xl md:leading-[70px]"></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="bg-gradient-to-t from-white/70 to-transparent py-14 dark:bg-none md:py-[100px]">
            <div class="container">
                <div class="grid gap-x-[30px] gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div
                            class="relative bg-white transition duration-500 hover:bg-[#FFDE59]/20 dark:bg-gray-dark"
                        >
                            <NuxtLink to="/post" class="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></NuxtLink>
                            <img src="/assets/images/blog1.png" alt="blog" class="h-52 w-full object-cover" />
                            <div class="p-5">
                                <h6 class="text-black text-2xl dark:text-secondary">UI/UX Design</h6>
                                <h5>01.10.23</h5>
                                <p class="text-black">
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                                    from 45 BC, making it over 2000 years old.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div
                            class="relative bg-white transition duration-500 hover:bg-[#FFDE59]/20 dark:bg-gray-dark"
                        >
                            <NuxtLink to="/post" class="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></NuxtLink>
                            <img src="/assets/images/blog1.png" alt="blog" class="h-52 w-full object-cover" />
                            <div class="p-5">
                                <h6 class="text-black text-2xl dark:text-secondary">UI/UX Design</h6>
                                <h5>01.10.23</h5>
                                <p class="text-black">
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                                    from 45 BC, making it over 2000 years old.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div
                            class="relative bg-white transition duration-500 hover:bg-[#FFDE59]/20 dark:bg-gray-dark"
                        >
                            <NuxtLink to="/post" class="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></NuxtLink>
                            <img src="/assets/images/blog1.png" alt="blog" class="h-52 w-full object-cover" />
                            <div class="p-5">
                                <h6 class="text-black text-2xl dark:text-secondary">UI/UX Design</h6>
                                <h5>01.10.23</h5>
                                <p class="text-black">
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                                    from 45 BC, making it over 2000 years old.
                                </p>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>
        </section>
    </div>
</template>
<script setup lang="ts">
    import { useAppStore } from '@/stores/index';
    const store = useAppStore();
    useHead({ title: 'Blog' });
</script>
