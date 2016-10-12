import {Injectable} from '@angular/core'; 

export class Contact {
    constructor(public id: number, public name: string) {}
}

const CONTACTS: Contact[] = [
    new Contact (1, 'Mickey Mouse'),  
    new Contact(2, 'John Smith'), 
    new Contact(3, 'Mike Sharp')
]; 

const FETCH_LATENCY = 500; 

@Injectable()

export class ContactService {
    getContacts(){
        return new Promise<Contact[]>(resolve => {
            setTimeout(() => {resolve(CONTACTS);}, FETCH_LATENCY); 
        }); 
    }

    getContact(id: number | string){
        return this.getContacts()
            .then(heroes => heroes.find(hero => hero.id === +id)); 
    }

  
}