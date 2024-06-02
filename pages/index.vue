<template>
    <div>
        <section class="bg-[#FFDE59] bg-bottom bg-no-repeat rtl:rotate-y-180 dark:bg-black h-screen">
            <div class="py-24 dark:bg-gradient-to-r dark:from-[#B476E5]/10 dark:to-[#47BDFF]/10 lg:py-40">
                <div class="container">
                    <div class="mx-auto max-w-[1028px] text-center rtl:rotate-y-180">
                        <h2 class="text-4xl text-black dark:text-white sm:text-6xl lg:text-[100px] lg:leading-[125px] fade-in-text">
                            Trasformiamo le tue  <span class=" underline ">idee</span> in realtà digitali
                        </h2>
                        <div class="w-[300px] mx-auto mt-10 fade-in-triangle">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="65.62 29.69 242.25 227.3">
                            <defs>
                                <clipPath id="c159062813">
                                <path d="M131 29.688h112V136H131Zm0 0"/>
                                </clipPath>
                                <clipPath id="93d74389d1">
                                <path d="M65.621 155h242.25v101.938H65.621Zm0 0"/>
                                </clipPath>
                            </defs>
                            <g clip-path="url(#c159062813)">
                                <path class="triangle" d="M186.727 57.117c.773 0 1.484.434 1.84 1.121l40.09 77.383h13.382l-55.312-105.91-55.313 105.91h13.383l40.086-77.383a2.075 2.075 0 0 1 1.844-1.12Zm0 0"/>
                            </g>
                            <g clip-path="url(#93d74389d1)">
                                <path class="triangle" d="m240.516 155.875 45.91 86.29a2.074 2.074 0 0 1-1.832 3.042H88.855a2.073 2.073 0 0 1-1.832-3.043l45.91-86.289h-13.367L65.77 256.985h241.91l-53.797-101.11Zm0 0"/>
                            </g>
                            <path  class="line" d="M73.371 139.762h226.707v11.972H73.371Zm0 0"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-black py-[50px] text-center dark:bg-gray-dark">
            <swiper
                :loop="true"
                slidesPerView="auto"
                :spaceBetween="30"
                :speed="3000"
                :autoplay="{
                    delay: 500,
                    disableOnInteraction: false,
                }"
                :modules="[Autoplay]"
                :breakpoints="{
                    320: {
                        slidesPerView: 1.7,
                    },
                    600: {
                        slidesPerView: 3,
                    },
                    1000: {
                        slidesPerView: 5,
                    },
                    1600: {
                        slidesPerView: 8,
                    },
                }"
                :dir="store.direction === 'rtl' ? 'rtl' : 'ltr'"
                :key="store.direction === 'rtl' ? 'true' : 'false'"
            >
                <swiper-slide>
                    <h5 class="inline-block text-[22px]  text-white">BRANDING</h5>
                </swiper-slide>
                <swiper-slide>
                    <h5 class="inline-block text-[22px]  text-white">SEO</h5>
                </swiper-slide>
                <swiper-slide>
                    <h5 class="inline-block text-[22px]  text-white">AGENCY</h5>
                </swiper-slide>
                <swiper-slide>
                    <h5 class="inline-block text-[22px]  text-white">UX DESIGN</h5>
                </swiper-slide>
                <swiper-slide>
                    <h5 class="inline-block text-[22px]  text-white">SOCIAL MEDIA</h5>
                </swiper-slide>
                <swiper-slide>
                    <h5 class="inline-block text-[22px]  text-white">INNOVATION</h5>
                </swiper-slide>
                <swiper-slide>
                    <h5 class="inline-block text-[22px]  text-white">SOFTWARE</h5>
                </swiper-slide>
                <swiper-slide>
                    <h5 class="inline-block text-[22px]  text-white">DIGITAL SOLUTION</h5>
                </swiper-slide>
            </swiper>
        </section>

        <section class="relative bg-white py-12 lg:py-20 h-screen">
    <div class="absolute inset-0">
        <video class="w-full h-full object-cover" autoplay loop muted>
            <source src="/assets/images/video_2.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div class="absolute inset-0 bg-black opacity-30"></div> <!-- Optional: for dark overlay -->
    </div>
    <div class="relative container h-full flex items-center justify-center">
        <div class="text-center">
            <h3 class="mt-7 text-3xl text-white md:text-[50px] md:leading-[70px] "        data-aos="fade-up"
                    data-aos-duration="1000">
                    Siamo un team di esperti digitali che trasforma idee in esperienze online. Scopri come la nostra innovazione può portare il tuo progetto al successo.
                        </h3>
        </div>
    </div>
</section>


        <section class="bg-white h-100 lg:h-screen py-12 dark:bg-gray-dark lg:py-20">
            <div class="px-5 lg:px-40">
                <h3 class="mt-7 text-3xl text-black md:text-[50px] md:leading-[70px]">
                            Siamo esperti in
                        </h3>
                <div
                    class="mt-12 grid gap-[30px] text-center sm:grid-cols-2 ltr:sm:text-left rtl:sm:text-right md:grid-cols-3"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <div>
                        <span>
                            <svg class="mx-auto h-[80px] w-[80px] sm:mx-0" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                            <path d="m29.717 12.531-5.991-4.843a1.027 1.027 0 0 0-1.426 0 .966.966 0 0 0 0 1.391l5.191 4.197-5.191 4.198a.965.965 0 0 0 0 1.39 1.025 1.025 0 0 0 1.426 0l5.991-4.843a.958.958 0 0 0 .285-.745.957.957 0 0 0-.285-.745ZM7.7 17.473l-5.191-4.197L7.7 9.079a.966.966 0 0 0 0-1.391 1.025 1.025 0 0 0-1.426 0L.283 12.531a.957.957 0 0 0-.285.745.958.958 0 0 0 .285.745l5.991 4.843a1.025 1.025 0 0 0 1.426 0 .966.966 0 0 0 0-1.391ZM21.96.123a1.011 1.011 0 0 0-1.366.358l-12.5 24.087c-.277.469-.162 1.186.366 1.339.645.187 1.09.111 1.366-.358l12.5-24.088A.969.969 0 0 0 21.96.123Z" fill="#000" fill-rule="evenodd"/>
                            </svg>
                        </span>
                        <h5 class="mt-5 text-2xl text-black dark:text-white ">Custom Software</h5>
                        <p class="mt-2.5 text-md text-black">
                            Botcom crea soluzioni software personalizzate e flessibili, perfettamente adattate alle esigenze uniche del tuo business. La nostra creatività e innovazione assicurano risultati su misura che migliorano la produttività.
                        </p>
                    </div>
                    <div>
                        <span>
                            <svg class="mx-auto h-[80px] w-[80px] sm:mx-0" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.5 17a.506.506 0 0 0-.344.15L.64 26.652c-.896.893-.776 2.134-.105 2.81.67.674 1.913.795 2.81-.103l9.49-9.49c.492-.472-.25-1.182-.706-.708l-9.49 9.49c-.58.58-1.07.43-1.396.104-.326-.328-.47-.826.102-1.397l9.517-9.503c.326-.318.084-.857-.363-.857zm8.45-14.93a8 8 0 0 0-4.39 2.063c-.49.453.21 1.17.68.734a6.999 6.999 0 0 1 8.022-1.06c.58.332 1.053-.603.465-.885a7.994 7.994 0 0 0-4.776-.852zM20 0c-5.517 0-10 4.483-10 10s4.483 10 10 10 10-4.483 10-10S25.517 0 20 0zm0 1c4.976 0 9 4.024 9 9s-4.024 9-9 9-9-4.024-9-9 4.024-9 9-9z"/>
</svg>
                        </span>
                        <h5 class="mt-5 text-2xl  text-black dark:text-white">SEO</h5>
                        <p class="mt-2.5 text-md text-black">
                            Ottimizziamo la tua visibilità online con strategie SEO efficaci, aumentando il traffico qualificato e posizionandoti in cima ai risultati di ricerca, migliorando il tuo ROI.
                        </p>
                    </div>
                    <div>
                        <span>
                            <svg class="mx-auto h-[80px] w-[80px] sm:mx-0" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.5 22c-1.614 0-2.597.884-3.04 1.867C1.013 24.85 1 25.915 1 26.5c0 .497-.114 1.14-.285 1.664-.113.418-.305.796-.463.902-.445.256-.263.935.25.934H4c1.415 0 2.457-.728 3.09-1.568.632-.84.91-1.76.91-2.432 0-.525-.01-1.48-.467-2.36C7.076 22.756 6.093 22 4.5 22zm0 1c1.307 0 1.826.485 2.144 1.1.318.614.356 1.408.356 1.9 0 .345-.22 1.175-.71 1.83C5.795 28.485 5.083 29 4 29H1.44c.077-.17.16-.332.224-.525.203-.62.336-1.332.336-1.975 0-.555.04-1.49.37-2.223C2.703 23.545 3.216 23 4.5 23zM29.424.002a1.078 1.078 0 0 0-.263.02c-.162.033-.33.09-.533.167-.404.155-.93.4-1.566.732-1.272.66-2.983 1.658-4.91 2.902-3.857 2.49-8.574 5.962-12.305 9.694-1.31 1.31-1.857 2.706-1.845 3.972.012 1.267.57 2.378 1.35 3.16.783.783 1.883 1.338 3.15 1.35 1.267.012 2.673-.533 3.983-1.844 3.732-3.73 7.204-8.448 9.693-12.304 1.245-1.928 2.24-3.64 2.903-4.913.33-.637.576-1.163.73-1.567.08-.202.135-.37.167-.533a.958.958 0 0 0 .02-.264.56.56 0 0 0-.17-.402.568.568 0 0 0-.403-.172zm-.642 1.217c-.138.33-.315.728-.59 1.26-.64 1.232-1.625 2.923-2.855 4.83-2.46 3.81-5.908 8.487-9.56 12.14-1.16 1.16-2.298 1.56-3.277 1.55-.98-.01-1.826-.44-2.442-1.057-.616-.615-1.05-1.484-1.058-2.463-.01-.978.39-2.095 1.552-3.255 3.653-3.653 8.328-7.1 12.14-9.56 1.906-1.23 3.597-2.216 4.83-2.856.53-.277.927-.453 1.26-.59z"/>
</svg>
                        </span>
                        <h5 class="mt-5 text-2xl text-black dark:text-white ">Design</h5>
                        <p class="mt-2.5 text-md text-black">
                            I nostri design, intuitivi e accattivanti, riflettono al meglio il tuo brand. Garantiamo un'esperienza utente ottimale su ogni dispositivo, grazie alla nostra creatività e attenzione ai dettagli.
                        </p>
                    </div>
                    <div>
                        <span>
                           
                            <svg class="mx-auto h-[80px] w-[80px] sm:mx-0" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.5 0c-.654 0-.65 1 0 1h6.842c.72 0 .73.408.554.77l-3.84 7.5a.5.5 0 0 0 .444.73h7.072c.15 0 .323.093.39.248.07.155.095.443-.288.95L10.33 27.57l1.664-9.988A.5.5 0 0 0 11.5 17H7.54c-.557 0-.6-.164-.505-.934l1.96-14.5c.09-.66-.903-.794-.99-.132l-1.962 14.5c-.075.556-.06 1.048.203 1.46.264.413.768.606 1.293.606h3.368L9.006 29.418c-.086.516.578.8.892.383l13.575-18c.524-.694.643-1.406.406-1.95-.24-.544-.77-.85-1.308-.85h-6.254l3.467-6.77c.188-.368.316-.856.12-1.36C19.707.363 19.12 0 18.34 0z"/>
</svg>
                        </span>
                        <h5 class="mt-5 text-2xl text-black dark:text-white ">Velocità</h5>
                        <p class="mt-2.5 text-md text-black">Le nostre soluzioni, rapide e reattive, ottimizzano le performance riducendo i tempi di caricamento. La fluidità è la nostra firma, assicurando un funzionamento sempre impeccabile.</p>
                    </div>
                    <div>
                        <span>
                            <svg class="mx-auto h-[80px] w-[80px] sm:mx-0" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.5 0C10.364 0 7 3.364 7 7.5v3c0 .657 1 .668 1 0v-3C8 3.904 10.904 1 14.5 1S21 3.904 21 7.5v3c0 .676 1 .644 1 0v-3C22 3.364 18.636 0 14.5 0zm0 17a2.507 2.507 0 0 0-2.5 2.5c0 .77.406 1.445 1 1.914V23.5c0 .822.678 1.5 1.5 1.5s1.5-.678 1.5-1.5v-2.088c.594-.47 1-1.143 1-1.912 0-1.375-1.125-2.5-2.5-2.5zm0 1c.834 0 1.5.666 1.5 1.5 0 .536-.286 1.027-.75 1.295a.501.501 0 0 0-.25.434v2.27c0 .286-.214.5-.5.5a.488.488 0 0 1-.5-.5v-2.27a.5.5 0 0 0-.25-.433 1.496 1.496 0 0 1-.75-1.297c0-.834.666-1.5 1.5-1.5zm-9-6c-.822 0-1.5.678-1.5 1.5v15c0 .822.678 1.5 1.5 1.5h18c.822 0 1.5-.678 1.5-1.5v-15c0-.822-.678-1.5-1.5-1.5zm0 1h18c.286 0 .5.214.5.5v15c0 .286-.214.5-.5.5h-18a.488.488 0 0 1-.5-.5v-15c0-.286.214-.5.5-.5z"/>
</svg>
                        </span>
                        <h5 class="mt-5 text-2xl text-black dark:text-white ">Sicurezza</h5>
                        <p class="mt-2.5 text-md text-black">Implementiamo misure di sicurezza avanzate per proteggere i tuoi dati, garantendo un ambiente sicuro e affidabile per il tuo business.</p>
                    </div>
                    <div>
                        <span>
                            <svg class="mx-auto h-[80px] w-[80px] sm:mx-0" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
  <path d="M21.5 20a.488.488 0 0 0-.443.717l.99 1.984c.28.63 1.214.163.883-.44l-.99-1.985a.49.49 0 0 0-.44-.275zM6.49 7c-.48 0-.7.722-.226.946l1.992.984c.606.33 1.075-.6.443-.88l-1.993-.985A.44.44 0 0 0 6.49 7zM30 10.5c0 .277-.223.5-.5.5h-2a.499.499 0 1 1 0-1h2c.277 0 .5.223.5.5zM17.5 0c.277 0 .5.223.5.5v2a.499.499 0 1 1-1 0v-2c0-.277.223-.5.5-.5zm-5.092 4.03c-.25-.05-.537-.055-.803.1-.265.153-.402.41-.476.655-.075.244-.1.5-.103.777-.007.554.072 1.19.162 1.834.09.644.194 1.293.25 1.82.1.954-.185 1.214-.75 1.696-.413.354-.986.707-1.528 1.092-.542.384-1.072.774-1.477 1.162a2.873 2.873 0 0 0-.503.605c-.13.22-.23.497-.157.8.073.304.283.505.496.645.215.14.457.24.726.328.538.176 1.19.3 1.852.416.662.114 1.333.217 1.873.333.952.205 1.16.507 1.46 1.217.207.49.393 1.123.605 1.74.212.617.43 1.222.69 1.715.13.246.266.467.44.652.176.186.412.354.716.38.305.025.562-.102.766-.255.205-.153.38-.345.55-.566.343-.442.667-1.002.986-1.574.318-.573.63-1.155.908-1.614.41-.83.91-.906 1.66-.96.552-.023 1.23-.013 1.904-.016.673-.004 1.337-.02 1.9-.104.28-.042.536-.1.77-.2.235-.103.475-.263.6-.548.125-.285.077-.576-.012-.814-.09-.24-.226-.46-.39-.684-.33-.45-.78-.92-1.247-1.39-.465-.468-.946-.933-1.312-1.33-.672-.697-.63-.89-.38-1.63.18-.51.446-1.13.698-1.75.254-.618.495-1.232.626-1.78.066-.272.107-.528.092-.786-.014-.258-.098-.554-.342-.758-.243-.204-.528-.24-.79-.232-.263.007-.53.062-.82.142-.574.16-1.226.428-1.88.71-.654.28-1.312.622-1.855.837-.864.366-1.314.245-2.01-.158-.46-.295-1.003-.8-1.55-1.18-.547-.378-1.09-.802-1.596-1.052a2.991 2.991 0 0 0-.746-.274zm.303 1.17c.414.205.936.61 1.472.98.535.37 1.082.88 1.58 1.2.497.317.895.582 1.39.624.498.042.947-.15 1.528-.38.58-.23 1.24-.57 1.883-.847.64-.276 1.27-.53 1.753-.666.625-.206.684.066.618.44-.105.438-.33 1.027-.58 1.634-.246.606-.515 1.233-.713 1.79-.198.56-.38.873-.255 1.39.117.49.446.825.844 1.255.396.43.88.897 1.334 1.357.456.46.885.913 1.15 1.277.416.526-.094.626-.31.666-.46.07-1.096.088-1.756.092-.66.003-1.343-.007-1.94.017-.595.023-1.072.03-1.503.28-.43.25-.67.66-.97 1.16-.303.497-.615 1.085-.926 1.645-.313.56-.628 1.093-.904 1.45-.406.435-.565.354-.795-.063-.207-.396-.422-.973-.63-1.576-.207-.603-.408-1.237-.617-1.778-.208-.54-.37-.983-.752-1.304-.382-.32-.85-.407-1.432-.53-.583-.122-1.26-.226-1.908-.34-.65-.113-1.27-.248-1.71-.382-.667-.203-.372-.528-.18-.705.33-.31.83-.69 1.36-1.067.53-.376 1.09-.757 1.56-1.115.467-.358.85-.63 1.054-1.092.202-.46.14-.925.082-1.5-.06-.574-.167-1.226-.256-1.855-.09-.63-.16-1.24-.153-1.682-.027-.45.232-.576.684-.375zM10.5 17a.501.501 0 0 0-.343.15L.64 26.652c-.895.893-.776 2.134-.105 2.81.672.674 1.913.795 2.81-.103l9.49-9.49c.492-.472-.25-1.182-.706-.708l-9.49 9.49c-.58.58-1.07.43-1.396.104-.325-.328-.47-.826.102-1.397l9.518-9.503c.325-.318.083-.857-.364-.857z"/>
</svg>
                        </span>
                        <h5 class="mt-5 text-2xl text-black dark:text-white ">Artificial Intelligence</h5>
                        <p class="mt-2.5 text-md text-black">
                            Integra le nostre soluzioni AI per automatizzare processi e ottenere insight preziosi. Con Botcom, le tue idee prendono il volo, migliorando l'efficienza operativa.
                        </p>
                    </div>
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
    import { ref } from 'vue';
    import CountUp from 'vue-countup-v3';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay, Navigation } from 'swiper';
    import 'swiper/css/navigation';
    import 'swiper/css';
    import { useAppStore } from '@/stores/index';
    const store = useAppStore();
    useHead({ title: 'Creative Agency' });
    const formData = ref({
  name: '',
  email: '',
  need: '',
  budget: '',
  summary: ''
});

const handleSubmit = () => {
  // Gestisci la logica di invio del form qui
  console.log(formData);
};
    const feedbacks = ref([
        {
            id: 1,
            name: 'Marvin McKinney',
            role: 'Founder of Triple IT',
            thumbnail: '/assets/images/creative/client-img1.png',
            message:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by alteration in some form, injected humour, or randomised words which don't look even slightly believable.",
        },
        {
            id: 2,
            name: 'Leslie Alexander',
            role: 'Founder of Dope tech',
            thumbnail: '/assets/images/creative/client-img2.png',
            message:
                " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by alteration in some form, injected humour, or randomised words which don't look even slightly believable.",
        },
    ]);
</script>
