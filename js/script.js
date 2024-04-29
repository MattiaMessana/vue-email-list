const { createApp } = Vue;

createApp({
    data() {
        return {
        curIndex: 0,
        mailsList: [],

      }
    },
    methods: {
      
         generateMails: function() {
            for(let i = 0 ; i < 10; i++) {
                axios
                .get(`https://flynn.boolean.careers/exercises/api/random/mail`)
                .then((resp) => { 
                    console.log(resp.data.response);
                    this.mailsList.push(resp.data.response);
                })
            }
         }

    },
  }).mount('#app')