# vue-boolzapp

Milestone 1
- Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
dall’interlocutore (bianco) assegnando due classi CSS diverse
- Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
nome e immagine di ogni contatto

Milestone 2
- Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
messaggi relativi al contatto attivo all’interno del pannello della conversazione
- Click sul contatto mostra la conversazione del contatto cliccato

Milestone 3
- Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
“enter” il testo viene aggiunto al thread sopra, come messaggio verde
- Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
un “ok” come risposta, che apparirà dopo 1 secondo.

Milestone 4
- Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
“mar” rimangono solo Marco e Martina)

Milestone 5 - opzionale
- Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
permette di cancellare il messaggio selezionato
- Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti

BONUS

- Implementato bottone invio messaggio in alternativa al tasto "enter"

- Possibilità di cambiare tema (2 opzioni: tema chiaro e tema scuro) cliccando sulla palette in alto a sinistra

- Modificata scrollbar

- Simulatore di conversazione: se nell'input "send message" si inseriscono le domande: Come stai?, Come va?, Tutto bene?, Che fai?, Mi racconti una storia? (NB: devono essere inserite con la prima lettera maiuscola) l'utente virtuale risponderà in maniera randomica. Se si prova a salutare l'utente virtuale con termini come :Ciao, Salve, Buongiorno, Buonasera, Ei, lui farà lo stesso.