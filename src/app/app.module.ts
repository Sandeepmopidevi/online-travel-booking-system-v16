import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import this module
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { BookingComponent } from './features/booking/booking.component';
import { PackagesComponent } from './features/packages/packages.component';
import { PaymentComponent } from './features/payments/payment.component';
import { ReviewsComponent } from './features/reviews/reviews.component';
import { UnauthorizedComponent } from './shared/components/unauthorized/unauthorized.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { ItineraryManagementComponent } from './itinerary-management/itinerary-management.component';
import { PackageManagementComponent } from './package-management/package-management.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingConfirmationComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    BookingComponent,
    PackagesComponent,
    PaymentComponent,
    ReviewsComponent,
    UnauthorizedComponent,
    SearchComponent,
    ResultsComponent,
    ItineraryManagementComponent,
    PackageManagementComponent,
    CustomerSupportComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule // Ensure this is included
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}