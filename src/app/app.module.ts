import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapModalComponent } from './bootstrap-modal/bootstrap-modal.component';
import { MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupComponent } from './popup/popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { CustomModalComponent } from './custom-modal/custom-modal.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorPageComponent } from './doctor-page/doctor-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { MedicinePageComponent } from './medicine-page/medicine-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { ReviewComponent } from './review/review.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SupportComponent } from './support/support.component';
import { TileComponent } from './tile/tile.component';
import { ToastrModule } from 'ngx-toastr';
import { CustomService } from './services/custom-data.service';
import { CartItemsService } from './services/cart-items.service';
import { MedicineService } from './services/medicine-data.service';
import { ProductIdService } from './services/product-id.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SupportPageComponent } from './support-page/support-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapModalComponent,
    PopupComponent,
    AboutComponent,
    CartComponent,
    CustomModalComponent,
    DoctorComponent,
    DoctorPageComponent,
    FooterComponent,
    HeaderComponent,
    HomepageComponent,
    LoginComponent,
    MedicinePageComponent,
    NavbarComponent,
    PaymentPageComponent,
    ReviewComponent,
    SignUpComponent,
    SupportComponent,
    TileComponent,
    SupportPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    MatCardModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000, // Time to close the toaster (in milliseconds)
      positionClass: 'toast-top-right', // Toast position
      preventDuplicates: true,
      closeButton: true, // Show close button
      progressBar: true, // Show progress bar
    }),
  ],
  providers: [BootstrapModalComponent,CustomService,MedicineService,CartItemsService,ProductIdService],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent], 
})
export class AppModule { }
