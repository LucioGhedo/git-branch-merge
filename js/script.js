var app = new Vue (
    {
        el: '#root',
        data: {
            films: []
        },
        methods: {
            getFilms() {
                axios.get('http://localhost:8888/git-branch-merge/api.php')
                .then((response) => {
                    this.films = response.data;
                });
            }
        },
        mounted() {
            this.getFilms();
        }
    }
);