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

            counter: 0,

            counterMes: 0,

            myMessage: '',

            searchContact: '',

            typing: false,

            themeColor: false,

            showMenu: false,

            menuDeleteMes: false,

            myTime: [],

            myMessages: [

                [
                    'Ciao',
                    'Salve',
                    'Buongiorno',
                    'Buonasera',
                    'Ei',
                    'Chi sei? Non ti conosco!'
                ],

                [
                    'Come stai?',  // domanda da inviare
                    'Come va?', // domanda da inviare
                    'Tutto bene?', // domanda da inviare
                    'Sì, tutto bene',
                    'No, non va tutto bene.',
                    'Così così.',
                    'Non male, grazie.',
                    'Bene, e tu?',
                    'Tutto a posto, grazie.',
                    'Bene, grazie.',
                    'Male, grazie.',
                    'Così così.',
                    'Non male, e tu?',
                    'Non male, grazie per aver chiesto.',
                    'Va tutto bene, grazie per aver chiesto.',
                    'Abbastanza bene, grazie.',
                    'Bene, e te?',
                    'Male, ma ce la faccio.',
                ],

                [
                    'Che fai?', // domanda da inviare
                    'Sto lavorando',
                    'Sto studiando',
                    'Niente di particolare',
                    'Sto facendo una passeggiata',
                    'Sto cucinando',
                    'Sto guardando la TV',
                    'Sto facendo una telefonata',
                    'Sto facendo un po\' di shopping',
                    'Non sono affari tuoi!',
                    'Pensa agli affari tuoi!',
                    'Perché ti interessa saperlo?',
                    'Non mi disturbare'
                ],

                [
                    'Mi racconti una storia?', // domanda da inviare
                    'NO!',
                    'C\'era una volta un asino che viveva in una fattoria. Era un asino molto pigro e non amava lavorare. Un giorno, il contadino decise di venderlo ad un circo. Quando l\'asino arrivò al circo, il direttore gli chiese di fare un numero di giocoleria. L\'asino, pensando che sarebbe stato facile, accettò. Ma quando si trovò sul palco con una pila di piatti e una mazza, non sapeva assolutamente come cominciare. Allora, in un attimo di ispirazione, decise di fare un numero di equilibrismo invece, e si mise a camminare su una corda tesa come se fosse un funambolo. Il pubblico rimase a bocca aperta e l\'asino divenne immediatamente la star del circo! Da quel giorno in poi, non fu più un asino pigro, ma diventò un artista di successo.',
                    'C\'era una volta un topo che viveva in un grande formaggio. Era un topo molto goloso e passava tutto il suo tempo a mangiare formaggio. Un giorno, decise di esplorare il formaggio fino in fondo per trovare il posto migliore dove mangiare. Quindi cominciò a scavare un tunnel per attraversare il formaggio. Dopo un po\' di tempo, il topo arrivò all\'altra estremità del formaggio e trovò un grande vaso di marmellata. Era così felice che decise di mangiare tutta la marmellata in un solo boccone. Ma proprio mentre stava per inghiottirla, si rese conto che non sarebbe più stato in grado di mangiare il formaggio. Allora decise di rinunciare alla marmellata e tornare indietro nel suo tunnel. E da quel giorno in poi, il topo si accontentò di mangiare solo formaggio e vissero tutti felici e contenti.',
                    'C\'era una volta un gatto che viveva in una casa in campagna. Era un gatto molto curioso e amava esplorare il suo territorio. Un giorno, decise di andare a vedere una vecchia fattoria abbandonata vicino alla sua casa. Quando arrivò alla fattoria, vide una grande volpe che stava cercando di rubare del pollo dalla stalla. Il gatto, non volendo che la volpe rubasse il cibo, decise di fermare il ladro. Così, iniziò a inseguire la volpe intorno alla fattoria, saltando su e giù, sopra e sotto, finché non riuscì a catturare la volpe. La volpe, stupita dalla velocità e dalla destrezza del gatto, decise di arrendersi e chiedere scusa. Il gatto, generoso, permise alla volpe di andarsene. Da quel giorno in poi, il gatto e la volpe divennero amici e spesso andavano a caccia insieme.',
                    'C\'era una volta una vecchia casa abbandonata in mezzo al bosco. Era una casa misteriosa e inquietante, e tutti evitavano di avvicinarsi. Un giorno, un gruppo di amici decise di andare a esplorare la casa. Appena entrati, si accorsero che era completamente vuota, ma aveva un\'atmosfera strana e inquietante. Decisero di separarsi per esplorare meglio la casa. Mentre esploravano, cominciarono a sentire dei rumori strani e a vedere delle ombre inquietanti. Improvvisamente, uno degli amici scomparve nel nulla. Gli altri cercarono di trovarlo, ma non c\'era traccia di lui. Alla fine, decisero di uscire dalla casa e di chiamare la polizia. Ma quando gli agenti arrivarono, non trovarono alcuna traccia del loro amico scomparso. Da quel giorno in poi, la casa fu evitata da tutti e si dice che ancora oggi sia infestata dallo spirito del loro amico perduto.',
                    'C\'era una volta un giovane pirata che viveva sulla sua nave. Era un pirata coraggioso e audace, e amava navigare in cerca di tesori nascosti. Un giorno, sentì parlare di un\'isola misteriosa dove si diceva che ci fosse un tesoro incalcolabile. Decise di partire alla volta dell\'isola, accompagnato dalla sua fedele ciurma. Dopo lunghe settimane di navigazione, finalmente arrivarono all\'isola. Scoprirono che era un luogo pericoloso, popolato da creature selvagge e da banditi. Ma il giovane pirata non si lasciò intimidire e decise di esplorare l\'isola alla ricerca del tesoro. Affrontò molti pericoli e superò molte difficoltà, ma alla fine arrivò al cuore dell\'isola dove trovò il tesoro che cercava. Era un tesoro immenso e ricco di gioielli e monete d\'oro. Il giovane pirata e la sua ciurma tornarono alla loro nave carichi di tesori e con la gloria di aver scoperto una delle isole più ricche del mondo. Da quel giorno in poi, il giovane pirata divenne famoso come uno dei più grandi corsari mai esistiti.',
                    'C\'era una volta una scimmia che viveva in una giungla tropicale. Era una scimmia curiosa e sempre in cerca di divertimento. Un giorno, mentre esplorava la giungla, scoprì un albero pieno di banane. Era un albero così alto che non riusciva a raggiungere i frutti. Così, iniziò a pensare a un modo per raggiungere le banane. E così, dopo aver visto una tarantola arrampicarsi sull\'albero, si mise a imitarla e riuscì finalmente a salire sull\'albero e prendere le banane. Dopo aver finito di mangiare le banane, scese dall\'albero e si trovò circondato da un gruppo di scimmie che avevano assistito alla sua impresa. Le scimmie, divertite dalla sua idea e dalla sua abilità, iniziarono a ridere e a applaudirla. La scimmia diventò famosa in tutta la giungla come l\'arrampicatrice di banane più divertente mai esistita.',
                ]

            ]

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
                    message: this.myMessage.charAt(0).toUpperCase() + this.myMessage.slice(1),
                    status: 'sent'
                
                }

                this.contacts[this.currentContact].messages.push(textMyMessage);

                if (this.myMessage == this.myMessages[0][0] || this.myMessage == this.myMessages[0][1] || this.myMessage == this.myMessages[0][2] || this.myMessage == this.myMessages[0][3] || this.myMessage == this.myMessages[0][4]) {

                    setTimeout(() => {
    
                        const textMessage = {
                        
                            date: new Date().toLocaleTimeString(),
                            message: this.myMessages[0][this.getRndInteger(0, 5)],
                            status: 'received'
                        
                        }
        
                        this.contacts[this.currentContact].messages.push(textMessage);
        
                    }, 1000)

                }

                if (this.myMessage == this.myMessages[1][0] || this.myMessage == this.myMessages[1][1] || this.myMessage == this.myMessages[1][2]) {

                    if(this.myMessage == this.myMessages[1][0]) {

                        setTimeout(() => {
    
                            const textMessage = {
                            
                                date: new Date().toLocaleTimeString(),
                                message: this.myMessages[1][this.getRndInteger(5, 17)],
                                status: 'received'
                            
                            }
            
                            this.contacts[this.currentContact].messages.push(textMessage);
            
                        }, 1000)

                    }

                    if(this.myMessage == this.myMessages[1][1]) {

                        setTimeout(() => {
    
                            const textMessage = {
                            
                                date: new Date().toLocaleTimeString(),
                                message: this.myMessages[1][this.getRndInteger(5, 17)],
                                status: 'received'
                            
                            }
            
                            this.contacts[this.currentContact].messages.push(textMessage);
            
                        }, 1000)

                    }

                    if(this.myMessage == this.myMessages[1][2]) {

                        setTimeout(() => {
    
                            const textMessage = {
                            
                                date: new Date().toLocaleTimeString(),
                                message: this.myMessages[1][this.getRndInteger(5, 17)],
                                status: 'received'
                            
                            }
            
                            this.contacts[this.currentContact].messages.push(textMessage);
            
                        }, 1000)

                    }


                }

                if (this.myMessage == this.myMessages[2][0]) {

                    setTimeout(() => {
    
                        const textMessage = {
                        
                            date: new Date().toLocaleTimeString(),
                            message: this.myMessages[2][this.getRndInteger(1, 12)],
                            status: 'received'
                        
                        }
        
                        this.contacts[this.currentContact].messages.push(textMessage);
        
                    }, 1000)

                }

                if (this.myMessage == this.myMessages[3][0]) {

                    setTimeout(() => {
    
                        const textMessage = {
                        
                            date: new Date().toLocaleTimeString(),
                            message: this.myMessages[3][this.getRndInteger(1, 7)],
                            status: 'received'
                        
                        }
        
                        this.contacts[this.currentContact].messages.push(textMessage);
        
                    }, 1000)

                }
    
                this.myMessage = '';

            }

        },

        dropMenuDeleteMes() {

            if (this.counterMes == 0) {

                this.menuDeleteMes = true;

                this.counterMes = 1;

            } else if (this.counterMes == 1) {

                this.menuDeleteMes = false;

                this.counterMes = 0;
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

        },

        getRndInteger(min, max) {

            return Math.floor(Math.random() * (max - min) ) + min;
        
        }

    },

    mounted() {
        
        this.myTimeFunction();
    
    }

}).mount('#app');