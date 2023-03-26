import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientModule } from './modules/client/client.module';
import { ProductPurchasedModule } from './modules/product-purchased/product-purchased.module';
import { ProductModule } from './modules/product/product.module';
import { PurchaseModule } from './modules/purchase/purchase.module';
import { NavigationComponent } from './shared/navigation/navigation.component';

import { HeaderComponent } from './shared/header/header.component';
import { CreateHambuModule } from './modules/create-hambu/create-hambu.module';
import { AdminModule } from './modules/admin/admin.module';
import { MaterialModule } from './modules/material/material.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [AppComponent, NavigationComponent, HeaderComponent],
  imports: [
    MaterialModule,
    AdminModule,
    CreateHambuModule,
    BrowserModule,
    AppRoutingModule,
    ClientModule,
    ProductModule,
    PurchaseModule,
    ProductPurchasedModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
