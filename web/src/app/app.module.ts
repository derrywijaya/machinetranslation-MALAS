import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GalleryPageComponent} from './components/pages/gallery-page/gallery-page.component';
import {EventsPageComponent} from './components/pages/events-page/events-page.component';
import {ErrorPageComponent} from './components/pages/error-page/error-page.component';
import {CaseStudiesThreeColumnsPageComponent} from './components/pages/case-studies-three-columns-page/case-studies-three-columns-page.component';
import {FooterComponent} from './components/layouts/footer/footer.component';
import {PreloaderComponent} from './components/layouts/preloader/preloader.component';
import {HomepageOneComponent} from './components/pages/homepage-one/homepage-one.component';
import {SolutionsComponent} from './components/common/solutions/solutions.component';
import {HomeoneServicesComponent} from './components/pages/homepage-one/homeone-services/homeone-services.component';
import {HomeoneProcessComponent} from './components/pages/homepage-one/homeone-process/homeone-process.component';
import {HomeoneCaseStudiesComponent} from './components/pages/homepage-one/homeone-case-studies/homeone-case-studies.component';
import {HomeoneScientistComponent} from './components/pages/homepage-one/homeone-scientist/homeone-scientist.component';
import {HomeoneTestimonialsComponent} from './components/pages/homepage-one/homeone-testimonials/homeone-testimonials.component';
import {HomeonePartnerComponent} from './components/pages/homepage-one/homeone-partner/homeone-partner.component';
import {HomeoneBlogComponent} from './components/pages/homepage-one/homeone-blog/homeone-blog.component';
import {ProjectStartComponent} from './components/common/project-start/project-start.component';
import {HomeoneAboutComponent} from './components/pages/homepage-one/homeone-about/homeone-about.component';
import {HomeoneBannerComponent} from './components/pages/homepage-one/homeone-banner/homeone-banner.component';
import {HomepageTwoComponent} from './components/pages/homepage-two/homepage-two.component';
import {HometwoPartnerComponent} from './components/pages/homepage-two/hometwo-partner/hometwo-partner.component';
import {HometwoTestimonialsComponent} from './components/pages/homepage-two/hometwo-testimonials/hometwo-testimonials.component';
import {HometwoScientistComponent} from './components/pages/homepage-two/hometwo-scientist/hometwo-scientist.component';
import {HometwoProcessComponent} from './components/pages/homepage-two/hometwo-process/hometwo-process.component';
import {HometwoServicesComponent} from './components/pages/homepage-two/hometwo-services/hometwo-services.component';
import {HometwoFunfactsComponent} from './components/pages/homepage-two/hometwo-funfacts/hometwo-funfacts.component';
import {HometwoMissionComponent} from './components/pages/homepage-two/hometwo-mission/hometwo-mission.component';
import {HometwoAboutComponent} from './components/pages/homepage-two/hometwo-about/hometwo-about.component';
import {HometwoBannerComponent} from './components/pages/homepage-two/hometwo-banner/hometwo-banner.component';
import {HometwoBoxesComponent} from './components/pages/homepage-two/hometwo-boxes/hometwo-boxes.component';
import {HomethreeBannerComponent} from './components/pages/homepage-three/homethree-banner/homethree-banner.component';
import {HomepageThreeComponent} from './components/pages/homepage-three/homepage-three.component';
import {HomethreePartnerComponent} from './components/pages/homepage-three/homethree-partner/homethree-partner.component';
import {HomethreeFeaturedServicesComponent} from './components/pages/homepage-three/homethree-featured-services/homethree-featured-services.component';
import {HomethreeAboutComponent} from './components/pages/homepage-three/homethree-about/homethree-about.component';
import {HomethreeMissionComponent} from './components/pages/homepage-three/homethree-mission/homethree-mission.component';
import {HomethreeFunfactsComponent} from './components/pages/homepage-three/homethree-funfacts/homethree-funfacts.component';
import {HomethreeCoursesComponent} from './components/pages/homepage-three/homethree-courses/homethree-courses.component';
import {HomethreeExploreLearningComponent} from './components/pages/homepage-three/homethree-explore-learning/homethree-explore-learning.component';
import {HomethreeBootcampsComponent} from './components/pages/homepage-three/homethree-bootcamps/homethree-bootcamps.component';
import {HomethreeTestimonialsComponent} from './components/pages/homepage-three/homethree-testimonials/homethree-testimonials.component';
import {HomethreeBlogComponent} from './components/pages/homepage-three/homethree-blog/homethree-blog.component';
import {SubscribeComponent} from './components/common/subscribe/subscribe.component';
import {HomepageFourComponent} from './components/pages/homepage-four/homepage-four.component';
import {HomefourBlogComponent} from './components/pages/homepage-four/homefour-blog/homefour-blog.component';
import {HomefourTestimonialsComponent} from './components/pages/homepage-four/homefour-testimonials/homefour-testimonials.component';
import {HomefourIndustriesServeComponent} from './components/pages/homepage-four/homefour-industries-serve/homefour-industries-serve.component';
import {HomefourServicesComponent} from './components/pages/homepage-four/homefour-services/homefour-services.component';
import {HomefourFunfactsComponent} from './components/pages/homepage-four/homefour-funfacts/homefour-funfacts.component';
import {NavbarComponent} from './components/layouts/navbar/navbar.component';
import {HomefourWhatWeDoComponent} from './components/pages/homepage-four/homefour-what-we-do/homefour-what-we-do.component';
import {HomefourWhyChooseUsComponent} from './components/pages/homepage-four/homefour-why-choose-us/homefour-why-choose-us.component';
import {HomefourFeaturedServicesComponent} from './components/pages/homepage-four/homefour-featured-services/homefour-featured-services.component';
import {HomefourBannerComponent} from './components/pages/homepage-four/homefour-banner/homefour-banner.component';
import {AboutPageComponent} from './components/pages/about-page/about-page.component';
import {AboutpageAboutComponent} from './components/pages/about-page/aboutpage-about/aboutpage-about.component';
import {AboutpageHistoryComponent} from './components/pages/about-page/aboutpage-history/aboutpage-history.component';
import {TeamPageComponent} from './components/pages/team-page/team-page.component';
import {ServicesPageComponent} from './components/pages/services-page/services-page.component';
import {ServicesDetailsPageComponent} from './components/pages/services-details-page/services-details-page.component';
import {ContactPageComponent} from './components/pages/contact-page/contact-page.component';
import {BlogPageComponent} from './components/pages/blog-page/blog-page.component';
import {BlogDetailsPageComponent} from './components/pages/blog-details-page/blog-details-page.component';
import {RelatedServicesComponent} from './components/pages/services-details-page/related-services/related-services.component';
import {CaseStudiesDetailsPageComponent} from './components/pages/case-studies-details-page/case-studies-details-page.component';
import {RelatedCaseStudiesComponent} from './components/pages/case-studies-details-page/related-case-studies/related-case-studies.component';
import {FaqPageComponent} from './components/pages/faq-page/faq-page.component';
import {EventsDetailsPageComponent} from './components/pages/events-details-page/events-details-page.component';
import {EventsSpeakersComponent} from './components/pages/events-details-page/events-speakers/events-speakers.component';
import {CoursesPageComponent} from './components/pages/courses-page/courses-page.component';
import {CoursesDetailsPageComponent} from './components/pages/courses-details-page/courses-details-page.component';
import {RelatedCoursesComponent} from './components/pages/courses-details-page/related-courses/related-courses.component';
import {UploadDataComponent} from './components/pages/upload-data/upload-data.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DownloadDataComponent} from './components/pages/download-data/download-data.component';
import {HttpClientModule} from '@angular/common/http';
import {TranslateDataComponent} from './components/pages/translate-data/translate-data.component';

@NgModule({
    declarations: [
        AppComponent,
        GalleryPageComponent,
        EventsPageComponent,
        ErrorPageComponent,
        CaseStudiesThreeColumnsPageComponent,
        FooterComponent,
        PreloaderComponent,
        HomepageOneComponent,
        SolutionsComponent,
        HomeoneServicesComponent,
        HomeoneProcessComponent,
        HomeoneCaseStudiesComponent,
        HomeoneScientistComponent,
        HomeoneTestimonialsComponent,
        HomeonePartnerComponent,
        HomeoneBlogComponent,
        ProjectStartComponent,
        HomeoneAboutComponent,
        HomeoneBannerComponent,
        HomepageTwoComponent,
        HometwoPartnerComponent,
        HometwoTestimonialsComponent,
        HometwoScientistComponent,
        HometwoProcessComponent,
        HometwoServicesComponent,
        HometwoFunfactsComponent,
        HometwoMissionComponent,
        HometwoAboutComponent,
        HometwoBannerComponent,
        HometwoBoxesComponent,
        HomethreeBannerComponent,
        HomepageThreeComponent,
        HomethreePartnerComponent,
        HomethreeFeaturedServicesComponent,
        HomethreeAboutComponent,
        HomethreeMissionComponent,
        HomethreeFunfactsComponent,
        HomethreeCoursesComponent,
        HomethreeExploreLearningComponent,
        HomethreeBootcampsComponent,
        HomethreeTestimonialsComponent,
        HomethreeBlogComponent,
        SubscribeComponent,
        HomepageFourComponent,
        HomefourBlogComponent,
        HomefourTestimonialsComponent,
        HomefourIndustriesServeComponent,
        HomefourServicesComponent,
        HomefourFunfactsComponent,
        NavbarComponent,
        HomefourWhatWeDoComponent,
        HomefourWhyChooseUsComponent,
        HomefourFeaturedServicesComponent,
        HomefourBannerComponent,
        AboutPageComponent,
        AboutpageAboutComponent,
        AboutpageHistoryComponent,
        TeamPageComponent,
        ServicesPageComponent,
        ServicesDetailsPageComponent,
        ContactPageComponent,
        BlogPageComponent,
        BlogDetailsPageComponent,
        RelatedServicesComponent,
        CaseStudiesDetailsPageComponent,
        RelatedCaseStudiesComponent,
        FaqPageComponent,
        EventsDetailsPageComponent,
        EventsSpeakersComponent,
        CoursesPageComponent,
        CoursesDetailsPageComponent,
        RelatedCoursesComponent,
        UploadDataComponent,
        TranslateDataComponent,
        DownloadDataComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
