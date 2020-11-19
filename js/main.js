// this is a variation on our module theme

const myVM = (() => {
    let vue_vm = new Vue({
        // OPT#1 Link Vue to an element in HTML
        // el:"#app",
        data: {
            message: "Hello from Vue!",
            anotherThing: "seperate by comma",

            collection: [
                {name: "Justin", role: 'coordinator', nickname: 'bruiser'},
                { name: "John", role: 'prof', nickname: 'Morpheus' },
                { name: "Joe", role: 'prof', nickname: 'Kooky' }
            ]
        },

        methods: {
            logClicked() {
                console.log("click on some shit");
            },
            anotherFunction() {
                console.log("used other function");
            }
        }
    }).$mount('#app');  // OPT#2 also connects Vue to your Wrapper in HTML
})();