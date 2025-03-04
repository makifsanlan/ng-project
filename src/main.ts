import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

bootstrapApplication(AppComponent, {
  ...appConfig, // Mevcut config'i koru
  providers: [
    ...(appConfig.providers || []), // Önceki provider'ları ekle
    provideAnimations(), // Animasyonları sağla (gerekli!)
    provideToastr({
      positionClass: 'toast-bottom-right' // Bildirimlerin sağ alt köşede görünmesini sağlar
    })
  ]
}).catch(err => console.error(err));
