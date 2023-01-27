const { createApp } = Vue;

createApp({

    data() {

        return {

            contacts: [

                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                       
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }

                    ],
                },
                
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                       
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }

                    ],
                },
                
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }

                    ],
                },
                
                {
                    name: 'Paolo',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }

                    ],
                },

                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [

                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }

                    ],
                },

                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [

                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }

                    ],
                },

                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [

                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }

                    ],
                },

                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                       
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    
                    ],
                }
            ],
            
            currentContact: 0,

            myMessage: '',

            searchContact: '',

            typing: false,

            myTime: [],

            themeColor: false,

            showMenu: false,

            counter: 0

        }

    },

    computed: {

        filtredArray() {

            return this.contacts.filter(word => word.name.toLowerCase().includes(this.searchContact.toLowerCase()))

        }

    },

    methods: {

        picInd (index) {

            console.log(this.currentContact)

            return  this.currentContact = index;

        },

        sendMessage() {

            if (this.myMessage != '') {

                const textMyMessage = {
                
                    date: new Date().toLocaleTimeString(),
                    message: this.myMessage,
                    status: 'sent'
                
                }
    
                this.contacts[this.currentContact].messages.push(textMyMessage);
    
                this.myMessage = '';
    
                setTimeout(() => {
    
                    const textMessage = {
                    
                        date: new Date().toLocaleTimeString(),
                        message: 'Ok!',
                        status: 'received'
                    
                    }
    
                    this.contacts[this.currentContact].messages.push(textMessage);
    
                }, 1000)

            }

        },

        removeMessage(index) {

            this.contacts[this.currentContact].messages.splice(index, 1);

        },

        myTimeFunction() {

            for (let i = 0; i < this.contacts.length; i++) {
                    
                let lastMessage = this.contacts[i].messages[this.contacts[i].messages.length - 1];
                
                let time = lastMessage.date.substr(11);

                this.myTime.push(time)
                
            }

        },

        colorChange () {  

            if (this.counter == 0) {

                this.showMenu = true;

                this.counter = 1;

            } else if (this.counter == 1) {

                this.showMenu = false;

                this.counter = 0;
            }
            
        },

        themeDark () {

            this.themeColor = true;

        },

        themeLight () {

            this.themeColor = false;

        }

    },

    mounted() {
        
        this.myTimeFunction();
    
    }

}).mount('#app');