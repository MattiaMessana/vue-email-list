const { createApp } = Vue;

createApp({
    data() {
        return {
        mailsList: [],
        isLoading: false
        
      }
    },
    methods: {
      
         generateMails: function() {
            this.isLoading = true;
            for(let i = 0 ; i < 10; i++) {
                    axios
                    .get(`https://flynn.boolean.careers/exercises/api/random/mail`)
                    .then((resp) => { 
                        console.log(resp.data.response);
                        this.mailsList.push(resp.data.response);
                        if (this.mailsList.length === 10){
                            this.isLoading = false;
                        }
                      })
                    this.mailsList = [];
            }
         },
    },
  }).mount('#app')