import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component'
import { AboutRoutingModule } from './about-routing.module'

// Components
import { ContactComponent } from './contact/contact.component';

@NgModule({
    declarations: [
        AboutComponent,
        ContactComponent
    ],
    imports: [
        AboutRoutingModule
    ], 
    exports: [
        AboutRoutingModule
    ]
})
export class AboutModule { }