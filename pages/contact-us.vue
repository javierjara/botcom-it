<template>
    <div>
        <div class="bg-white bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
            <div class="relative">
                <div class="container">
                    <div class="items-center justify-between py-10 md:flex md:h-[400px] md:py-0">
                        <div>
                            <h2 class="mt-7 text-3xl text-black md:text-[50px] md:leading-[70px]">Contattaci</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="bg-gradient-to-b from-white/40 to-transparent py-14 dark:from-white/[0.03] lg:py-[100px]">
            <div class="container">
                <div class="mx-auto text-center sm:w-[430px]">
                    <div class="heading mb-6">
                        <h4>hello@botcom.it</h4>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup lang="ts">
    import { useAppStore } from '@/stores/index';
    const store = useAppStore();
    useHead({ title: 'Contact Us' });
</script>
