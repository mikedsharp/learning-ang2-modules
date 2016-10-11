import { Component, OnInit } from '@angular/core';

import {Contact, ContactService} from './contact.service'; 

@Component({
    selector: 'app-contact',
    templateUrl: './contact.template.html', 
    providers:[ContactService]
})
export class ContactComponent implements OnInit {

    contact: Contact; 
    contacts: Contact[]; 

    msg = "Loading contacts..."; 
    userName = ''; 


    constructor(private contactService: ContactService) {
        this.userName = 'implement userName please Mike!'; 
     }

    next(){
        console.log('next contact clicked!');
    }
    newContact(){
        console.log('new contact clicked!');
    }
    onSubmit(){
        console.log('save clicked!');
    }

    ngOnInit() { 
        this.contactService.getContacts()
            .then(contacts => {
                    this.msg = ''; 
                    this.contacts = contacts; 
                    this.contact = contacts[0]; 
            }); 
    }
}