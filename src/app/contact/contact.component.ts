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
    contactCount: number; 
    currentIndex:number; 

    msg = "Loading contacts..."; 
    userName = ''; 


    constructor(private contactService: ContactService) {
        this.userName = 'implement userName please Mike!'; 
        this.currentIndex = 0; 
     }

    next(){
        console.log('next contact clicked!');
        this.contactService.getContacts()
            .then(contacts => {
                    this.contactCount = contacts.length; 
                    this.currentIndex++; 
                    if(this.currentIndex == this.contactCount){
                        this.currentIndex = 0; 
                    }
                    this.contact = contacts[this.currentIndex]; 
            }); 
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
                    this.contact = contacts[this.currentIndex]; 
            }); 
    }
}