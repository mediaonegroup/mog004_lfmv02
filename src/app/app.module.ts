import { NgModule, ErrorHandler, Injectable, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Pro } from '@ionic/pro';
import { MyApp } from './app.component';
import { AccueilPage } from '../pages/accueil/accueil';
import { ActualitePage } from '../pages/actualite/actualite';
import { DetailsPage } from '../pages/details/details';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';// npm install --save @angular/animations
import { PlayerPage } from '../pages/player/player';
import { PlayerPlaylistPage } from '../pages/player-playlist/player-playlist';
import { PodcastsPage } from '../pages/podcasts/podcasts';
import { ChroniquesPage } from '../pages/chroniques/chroniques';
import { ContactezNousPage } from '../pages/contactez-nous/contactez-nous';
import { BlogPage } from '../pages/blog/blog';
import { PlayerpopupPage } from '../pages/playerpopup/playerpopup';
import { ContenupagePage } from '../pages/contenupage/contenupage';
import { SwiperModule } from 'angular2-useful-swiper';
import 'intersection-observer';

import { VideolivePage } from '../pages/videolive/videolive';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';

import { AudioStreamProvider } from '../providers/audio-stream/audio-stream';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { MusicControls } from '@ionic-native/music-controls';
import { SocialSharing } from '@ionic-native/social-sharing';
//import { OneSignal } from '@ionic-native/onesignal';
import { SideMenuContentComponent } from '../shared/side-menu-content/side-menu-content.component';
import { Media, MediaObject } from '@ionic-native/media';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ExtendMenuProvider } from '../providers/extend-menu/extend-menu';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SplashPage } from '../pages/splash/splash';
import { IonAlphaScrollModule } from 'ionic2-alpha-scroll';
import { ComponentsModule } from './../components/components.module';
import { DirectivesModule } from './../directives/directives.module';
import { MamaStackBlur } from './../mama-stack-blur';
import { MamaProgressiveImage } from './../mama-progressive-image';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';

localStorage.setItem("player", "stop");
localStorage.setItem("firstclickonplayer", "oui");

Pro.init('26d63067', {
  appVersion: '3.0.0'
})


@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch(e) {
      // Unable to get the IonicErrorHandler provider, ensure
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {
    Pro.monitoring.handleNewError(err);
    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}

@NgModule({
  declarations: [
    MyApp,
    AccueilPage,
    ActualitePage,
    PodcastsPage,
    ChroniquesPage,
    ContactezNousPage,
    BlogPage,
    DetailsPage,
    PlayerPage,
    VideolivePage,
    PlayerPlaylistPage,
    ContenupagePage,
    PlayerpopupPage,
    SideMenuContentComponent,
    ContactPage,
    HomePage,
    TabsPage,
    SplashPage,
	MamaStackBlur,
	MamaProgressiveImage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    SwiperModule,
    BrowserAnimationsModule,
    IonAlphaScrollModule,
    ComponentsModule,
    DirectivesModule,
    IonicModule.forRoot(MyApp, {
      preloadModules: true,
      backButtonText: '',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      activator: 'ripple',
      menuType: "push",
      backButtonIcon: "ios-arrow-back"
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SplashPage,
    AccueilPage,
    ActualitePage,
    PodcastsPage,
    ContactezNousPage,
    BlogPage,
    VideolivePage,
    DetailsPage,
    PlayerPage,
    PlayerpopupPage,
    PlayerPlaylistPage,
    ContenupagePage,
    ContactPage,
    HomePage,
    TabsPage,
    ChroniquesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AudioStreamProvider,
    SocialSharing,
    MusicControls,
    Media,
    InAppBrowser,
    ExtendMenuProvider,
    StreamingMedia,
    GoogleAnalytics,
    File,
    FileTransfer,
    IonicErrorHandler,
        [{ provide: ErrorHandler, useClass: MyErrorHandler }]
  ]
})
export class AppModule { }