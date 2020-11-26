// this is a variation on our module theme

const myVM = (() => {
    let vue_vm = new Vue({
        // OPT#1 Link Vue to an element in HTML
        // el:"#app",
        data: {
            message: "Hello from Vue!",
            anotherThing: "See My Profs",
            removeAFormat: true,
            showBioData: false,
            currentProf: {},

            professors: [
                { name: "Justin", role: 'coordinator', nickname: 'bruiser', bio:'these are different woasdfrds'},
                { name: "John", role: 'prof', nickname: 'Morpheus', bio: 'these are dadsfasdferent words'},
                { name: "Joe", role: 'prof', nickname: 'Kermit', bio: 'theasdfasse are differeasdfnt words' }
            ]
        },
        //* THIS IS A 'MOUNTED' lifecycle hook . vue is done creating itself and has attached itself to the 'app' div on the page
        mounted: function(){
            console.log("VUE is mounted");
            
            this.professors.push({
                name: 'Jarrod', role: 'supermodel', nickname: 'ZooLander', bio: 'theasdfasdse are different words'
            })
        },

        updated: function(){
            console.log('things updated');
        },

        methods: {
            logClicked() {
                console.log("click on some shit");
            },
            anotherFunction() {
                console.log("used other function");
            },
            removeProf(prof){
                console.log(prof.name);
                this.showBioData = this.showBioData ? false : true;
                this.currentProf = prof;
            }
        }
    }).$mount('#app');  // OPT#2 also connects Vue to your Wrapper in HTML
})();
