const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Привет, Vue!',
            tasks: ['Выучить Vue', 'Сделать проект', 'Сдать практику'],
            visible: true,
            form: {
                name: '',
                email: '',
                message: ''
            },
            submitted: false
        };
    },
    methods: {
        submitForm() {
            this.submitted = true;
        }
    }
}).mount('#app');