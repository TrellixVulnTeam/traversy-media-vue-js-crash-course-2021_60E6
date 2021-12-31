const app = Vue.createApp({

    
    methods: {
        async reloadUser() {
            const res = await fetch('https://randomuser.me/api')

            const { results } = await res.json()

            //console.log(results) // Debug: log json from response in

            this.title = results[0].name.title,
            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last,
            this.email = results[0].email,
            this.gender = results[0].gender,
            this.picture = results[0].picture.large
        },
    },
    data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            gender: "",
            picture: ""
        }
    },
    created() {
        this.reloadUser()
    },
})

app.mount('#app')