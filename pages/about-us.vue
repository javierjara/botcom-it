<template>
    <div>
        <div class="bg-white bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
            <div class="relative">
                <div class="container">
                    <div class="items-center justify-between py-10 md:flex md:h-[400px] md:py-0">
                        <div>
                            <h2 class="mt-7 text-3xl text-black md:text-[50px] md:leading-[70px]">Cosa facciamo</h2>
                            <h4 class="text-black md:text-2xl md:leading-[70px]">Alla Botcom, diamo vita alle tue idee digitali con creatività e flessibilità.</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="relative pt-14 lg:pb-48 lg:pt-[100px]">
            <div class="container relative z-[1]">
                <div class="text-center lg:w-1/2 ltr:lg:text-left rtl:lg:text-right">
                    <div class="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right xl:w-[95%]">
                        <h4>Come lavoriamo</h4>
                    </div>
                    <p class="pb-10 text-lg leading-[30px] text-black">
                        Alla Botcom, partiamo da un'analisi approfondita del tuo business per sviluppare una strategia digitale personalizzata. Creiamo design innovativi e soluzioni tecnologiche all'avanguardia, garantendo performance ottimali su tutte le piattaforme. Lanciamo il progetto e monitoriamo le prestazioni, apportando miglioramenti continui basati sui dati. Botcom aiuta i propri clienti a far conoscere il loro brand, raggiungere nuovi utenti e incrementare le vendite.
                    </p>
                </div>
            </div>
            <div
                class="bottom-0 ltr:right-0 rtl:left-0 lg:absolute"
                :data-aos="store.direction === 'rtl' ? 'fade-right' : 'fade-left'"
                data-aos-duration="1000"
            >
                <img src="/assets/images/about-bg.png" alt="about-bg" class="rtl:rotate-y-180" />
            </div>
        </section>

        <section class="relative py-14 lg:py-[100px] xl:-mt-[100px]">
            <div class="absolute top-0 z-[1] h-full w-full bg-white ltr:left-0 rtl:right-0 dark:bg-black xl:w-[85%] xl:rounded-r-[32px]"></div>
            <div
                class="absolute -top-3 hidden h-full w-full rounded-r-[32px] bg-white/50 ltr:left-3 rtl:right-3 dark:bg-gray-dark xl:inline-block xl:w-[85%]"
            ></div>
            <div class="container relative z-[2] ltr:xl:pr-40 rtl:xl:pl-40">
                <div class="lg:w-2/3">
                    <div class="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right">
                        <h4>Il nostro metodo.</h4>
                    </div>
                    <p class="pb-10 text-center text-lg text-black leading-[30px] ltr:lg:text-left rtl:lg:text-right">
                        Combiniamo strategia, design e sviluppo per creare soluzioni digitali su misura, ottimizzate per il successo.
                    </p>
                </div>
                <div class="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div
                            class="flex items-start gap-[10px] min-h-[250px] border-2 bg-[#FFDE59] border-black py-6 px-5"
                        >
                            <span class="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full  text-lg text-black">01</span>
                            <div>
                                <h6 class="mb-1 text-xl text-black">Ideazione e Strategia</h6>
                                <p class="text-sm text-black dark:text-gray">
                                    Analizziamo le tue esigenze e obiettivi per creare una strategia personalizzata. Brainstorming creativo e ricerca approfondita sono al centro di questa fase, per garantire soluzioni innovative e su misura.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div
                            class="flex items-start gap-[10px] min-h-[250px] border-2 bg-[#FFDE59] border-black py-6 px-5"
                        >
                            <span class="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full  text-lg text-black">02</span>
                            <div>
                                <h6 class="mb-1 text-xl  text-black">Progettazione e Sviluppo</h6>
                                <p class="text-sm  text-black ">Trasformiamo le idee in realtà attraverso il design e lo sviluppo. Creiamo prototipi e iteriamo costantemente per affinare l'esperienza utente e l'estetica del progetto.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div
                            class="flex items-start gap-[10px] min-h-[250px] border-2 bg-[#FFDE59] border-black py-6 px-5"
                        >
                            <span class="flex h-[50px] w-[50px] min-w-[50px] items-center justify-center rounded-full  text-lg text-black">03</span>
                            <div>
                                <h6 class="mb-1 text-xl text-black">Lancio e Ottimizzazione</h6>
                                <p class="text-sm  text-black">Lanciamo il progetto e monitoriamo le prestazioni, apportando miglioramenti continui. Utilizziamo dati e feedback per ottimizzare costantemente e assicurare il successo a lungo termine.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="relative bg-white py-14 dark:bg-gray-dark lg:py-[100px]">
            <div class="container">
                <div class="heading text-center">
                    <h4>Creative Minds</h4>
                </div>
                <div class="relative mx-auto lg:w-11/12">
                    <swiper
                        :loop="true"
                        :slidesPerView="1"
                        :spaceBetween="30"
                        :autoplay="{
                            delay: 3000,
                            disableOnInteraction: false,
                        }"
                        :navigation="{
                            nextEl: '.testimonial-swiper-button-next',
                            prevEl: '.testimonial-swiper-button-prev',
                        }"
                        :modules="[Navigation, Autoplay]"
                        :dir="store.direction === 'rtl' ? 'rtl' : 'ltr'"
                        :key="store.direction === 'rtl' ? 'true' : 'false'"
                        class="sm:py-12 md:py-0"
                    >
                        <swiper-slide>
                            <div class="items-center gap-4 sm:grid sm:grid-cols-2">
                                <div class="col">
                                    <div class="relative">
                                        <div class="mb-12">
                                            <h3 class=" mt-7 text-3xl text-black md:text-[50px] md:leading-[70px]">Javier Jara</h3>
                                            <h4 class="text-xl italic">Senior Fullstack Developer</h4>
                                        </div>
                                        <p class="relative text-black">
                                            Javier ha oltre 10 anni di esperienza come sviluppatore software, con una solida competenza in JavaScript, PHP e AWS. Recentemente, ha contribuito allo sviluppo di applicazioni altamente performanti e scalabili, utilizzando i più recenti framework JavaScript, tra cui React e Vue.js. Inoltre, ha integrato con successo l'intero ciclo di vita dell'applicazione su AWS, gestendo il repository e implementando l'integrazione continua.

Proattivo con un approccio agile, Javier è supportato dalla sua esperienza sia in aziende multinazionali affermate che in startup in crescita.
                                        </p>
                            
                                    </div>
                                </div>
                                <div
                                    class="mx-auto mt-4 overflow-hidden bg-white "
                                >
                                    <img src="/assets/images/team/javier_black.png" alt="testimonial" class="h-full w-full object-cover object-top" />
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="items-center gap-4 sm:grid sm:grid-cols-2">
                                <div class="col">
                                    <div class="relative">
                                        <div class="mb-12">
                                            <h3 class=" mt-7 text-3xl text-black md:text-[50px] md:leading-[70px]">Gabriela Sanchez</h3>
                                            <h4 class="text-xl italic">Frontend Developer</h4>
                                        </div>
                                        <p class="relative text-black">
                                            Gabriela è una sviluppatrice frontend con una solida competenza in Next.js e UX. Recentemente, ha contribuito allo sviluppo di interfacce utente altamente performanti e scalabili, utilizzando le più recenti tecnologie web. Specializzata in Next.js, Gabriela ha creato esperienze utente coinvolgenti e intuitive, assicurando al contempo un'eccellente usabilità e accessibilità.

Proattiva con un approccio agile, Gabriela è supportata dalla sua esperienza in aziende multinazionali. La sua attenzione ai dettagli e la passione per il design centrato sull'utente rendono le sue soluzioni frontend innovative e user-friendly.
                                        </p>
                            
                                    </div>
                                </div>
                                <div
                                    class="mx-auto mt-4 overflow-hidden bg-white "
                                >
                                    <img src="/assets/images/team/gabriela.png" alt="testimonial" class="h-full w-full object-cover object-top" />
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="items-center gap-4 sm:grid sm:grid-cols-2">
                                <div class="col">
                                    <div class="relative">
                                        <div class="mb-12">
                                            <h3 class=" mt-7 text-3xl text-black md:text-[50px] md:leading-[70px]">Raul Jara</h3>
                                            <h4 class="text-xl italic">Social Campaign Manager</h4>
                                        </div>
                                        <p class="relative text-black">
                                            Raul è un Social Campaign Manager con una vasta esperienza in aziende multinazionali. Specializzato nella gestione di campagne social, Raul ha dimostrato la sua competenza lavorando con Google Campaign Manager e TikTok Ads. La sua abilità nel creare e gestire campagne efficaci su diverse piattaforme sociali lo rende un esperto nel suo campo.

Proattivo e orientato ai risultati, Raul è capace di sviluppare strategie innovative che massimizzano l'engagement e il ROI. La sua profonda conoscenza delle dinamiche dei social media, unita alla sua esperienza pratica, assicura il successo delle campagne che gestisce.
                                        </p>
                            
                                    </div>
                                </div>
                                <div
                                    class="mx-auto mt-4 overflow-hidden bg-white "
                                >
                                    <img src="/assets/images/team/raul.png" alt="testimonial" class="h-full w-full object-cover object-top" />
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </section>


        <section class="relative bg-black">
            <div class="relative container h-full flex items-center justify-center py-40" >
                 <div class="text-center"        data-aos="fade-up"
                    data-aos-duration="1000">
            <p class="text-white text-sm uppercase">Contattaci</p>
          
                <h3 class="text-white text-4xl md:text-6xl leading-tight">
                    <NuxtLink to="/contact-us">
                Raccontaci la tua <span class="italic">idea</span> <span class="inline-block transform translate-x-2">&rarr;</span>
                    </NuxtLink>
                    </h3>


       
        </div>
    </div>
</section>
    </div>
</template>
<script setup lang="ts">
    import { useAppStore } from '@/stores/index';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import { Navigation, Autoplay } from 'swiper';
    const store = useAppStore();
    useHead({ title: 'About Us' });
</script>
