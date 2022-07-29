import { CommonModule, registerLocaleData } from "@angular/common";
import localePt from '@angular/common/locales/pt' 
import { ModuleWithProviders, NgModule, LOCALE_ID } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "../app-routing.module";
import { FooterComponent } from "../components/footer/footer.component";
import { HeaderComponent } from "../components/header/header.component";
import { MenuComponent } from "../components/menu/menu.component";

registerLocaleData(localePt, 'pt-BR')
@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        MenuComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,
        HeaderComponent,
        FooterComponent,
        MenuComponent
    ]
})

export class SharedModule{
    static forRoot(): ModuleWithProviders<SharedModule>{
        return {
            ngModule: SharedModule,
            providers: [
               
                {provide: LOCALE_ID, useValue: 'pt-BR'},
                //{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
            ]
        }
    }

}