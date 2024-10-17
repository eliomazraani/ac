const app = Vue.createApp({
    data() {
        return {
            page: "home",
            windowWidth: window.innerWidth,
        };
    },
    mounted() {
        this.setHeight();
    },
    methods: {
        setHeight() {
            $("#header").css("height", $(window).height() + "px");
        },
    },
});

app.mount("#app");