import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './_services/auth/auth.service';

const routes: Routes = [
  {
    path: 'akcje',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: 'akcje/wypisz-mnie-z-powiadomien/',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: 'akcje/podziekuj-za-modlitwe/',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: 'changelog',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: 'aktywnosc',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: 'nasza-misja',
    redirectTo: '/misja',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./intentions/intentions.module').then((m) => m.IntentionsPageModule),
    data: {
      preload: true,
      title: 'Intencje / Wszystkie',
      description: 'Lista intencji modlitewnych czekających na Twoją modlitwę.',
    },
  },
  {
    path: 'z-mojej-parafii',
    loadChildren: () => import('./intentions/intentions.module').then((m) => m.IntentionsPageModule),
    data: {
      title: 'Intencje / Z mojej parafii',
      description: ' ',
    },
    canActivate: [AuthService],
  },
  {
    path: 'spelnione',
    loadChildren: () => import('./intentions/intentions.module').then((m) => m.IntentionsPageModule),
    data: {
      title: 'Intencje / Spełnione',
      description: 'Lista intencji modlitewnych oznaczonych jako wysłuchane.',
    },
  },
  {
    path: 'za-ktore-sie-modle',
    loadChildren: () => import('./intentions/intentions.module').then((m) => m.IntentionsPageModule),
    data: {
      title: 'Intencje / Za które się modlę',
      description: ' ',
    },
    canActivate: [AuthService],
  },
  {
    path: 'moje',
    loadChildren: () => import('./intentions/intentions.module').then((m) => m.IntentionsPageModule),
    data: {
      title: 'Intencje / Moje',
      description: ' ',
    },
    canActivate: [AuthService],
  },
  {
    path: 'patroni',
    loadChildren: () => import('./patrons/patrons.module').then((m) => m.PatronsPageModule),
    data: {
      title: 'Patroni / Wszyscy',
      description: 'Sylwetki świętych i błogosławionych Kościoła Katolickiego wraz z prośbami o ich wstawiennictwo.',
    },
  },
  {
    path: 'modlitwy',
    loadChildren: () => import('./prayers/prayers.module').then((m) => m.PrayersPageModule),
    data: {
      title: 'Modlitwy / Wszystkie',
      description:
        'Modlitewnik zawierający akty, litanie, nowenny, modlitwy tematyczne wraz z powiązanymi z nimi prośbami o modlitwę i patronami.',
    },
  },
  {
    path: 'o-projekcie',
    loadChildren: () => import('./about-the-project/about-the-project.module').then((m) => m.AboutTheProjectPageModule),
    data: {
      title: 'O projekcie',
      description: 'Informacje o projekcie Intencje.pl',
    },
  },
  {
    path: 'artykuly',
    loadChildren: () => import('./articles/articles.module').then((m) => m.ArticlesPageModule),
    data: {
      title: 'Artykuły / Wszystkie',
      description: ' ',
    },
  },
  {
    path: 'szczesc-boze',
    loadChildren: () =>
      import('./blessedness-of-god/blessedness-of-god.module').then((m) => m.BlessednessOfGodPageModule),
    data: {
      title: 'Szczęść Boże!',
      description: ' ',
    },
    canActivate: [AuthService],
  },
  {
    path: 'funkcjonalnosci',
    loadChildren: () => import('./features/features.module').then((m) => m.FeaturesPageModule),
    data: {
      title: 'Funkcjonalności',
      description: 'Lista funkcjonalności dostępnych w serwisie Intencje.pl.',
    },
  },
  {
    path: 'pomoc',
    loadChildren: () => import('./help/help.module').then((m) => m.HelpPageModule),
    data: {
      title: 'Pomoc',
      description: 'Infromacje dotyczące sposobów pomocy w trudnych, życiowych sytuacjach.',
    },
  },
  {
    path: 'kontakt',
    loadChildren: () => import('./contact/contact.module').then((m) => m.ContactPageModule),
    data: {
      title: 'Kontakt',
      description: ' ',
    },
  },

  {
    path: 'logowanie',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginPageModule),
    data: {
      title: 'Logowanie / Rejestracja',
      description: 'Formularz logowania i rejestracji w serwisie Intencje.pl.',
    },
  },
  {
    path: 'wiadomosci',
    loadChildren: () => import('./messages/messages.module').then((m) => m.MessagesPageModule),
    data: {
      title: 'Wiadomości',
      description: ' ',
    },
    canActivate: [AuthService],
  },
  {
    path: 'misja',
    loadChildren: () => import('./mission/mission.module').then((m) => m.MissionPageModule),
    data: {
      title: 'Misja',
      description: 'Misja serwisu Intencje.pl.',
    },
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then((m) => m.BlogPageModule),
    data: {
      title: 'Blog',
      description: ' ',
    },
  },
  {
    path: 'powiadomienia',
    loadChildren: () => import('./notifications/notifications.module').then((m) => m.NotificationsPageModule),
    data: {
      title: 'Powiadomienia',
      description: ' ',
    },
    canActivate: [AuthService],
  },
  {
    path: 'parafie',
    loadChildren: () => import('./parishes/parishes.module').then((m) => m.ParishesPageModule),
    data: {
      title: 'Parafie',
      description: 'Lista parafii kościoła rzymskokatolickiego.',
    },
  },
  {
    path: 'uzytkownicy',
    loadChildren: () => import('./users/users.module').then((m) => m.UsersPageModule),
    data: {
      title: 'Użytkownicy',
      description: ' ',
    },
    canActivate: [AuthService],
  },
  {
    path: 'ustawienia',
    loadChildren: () => import('./settings/settings.module').then((m) => m.SettingsPageModule),
    data: {
      title: 'Ustawienia',
      description: ' ',
    },
    canActivate: [AuthService],
  },
  {
    path: 'tagi',
    loadChildren: () => import('./tags/tags.module').then((m) => m.TagsPageModule),
    data: {
      title: 'Tagi',
      description: 'Tagi serwisu Intencje.pl łączące prośby o modlitwę, patronów, artykuły i treści modlitw.',
    },
  },
  {
    path: 'swiadectwa',
    loadChildren: () => import('./testimonies/testimonies.module').then((m) => m.TestimoniesPageModule),
    data: {
      title: 'Świadectwa',
      description: ' ',
    },
  },
  {
    path: 'regulamin',
    loadChildren: () => import('./tos/tos.module').then((m) => m.TosPageModule),
    data: {
      title: 'Regulamin',
      description: 'Regulamin serwisu Intencje.pl.',
    },
  },
  {
    path: 'czytania-na-dzis',
    loadChildren: () => import('./readings/readings.module').then((m) => m.ReadingsPageModule),
    data: {
      title: 'Czytania na dziś',
      description: 'Czytania z Pisma Świętego na każdy dzień wraz z komentarzem.',
    },
  },
  {
    path: '404',
    loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundPageModule),
    data: {
      title: 'Nie znaleziono',
      description: ' ',
    },
  },
  {
    path: 'radio',
    loadChildren: () => import('./radio/radio.module').then((m) => m.RadioPageModule),
    data: {
      title: 'Radio',
      description: 'Radio na żywo',
    },
  },
  {
    path: 'wpis/:intention_slug',
    loadChildren: () =>
      import('./intentions/details/intention-details.module').then((m) => m.IntentionDetailsPageModule),
    data: {
      title: 'Ładowanie ...',
      description: ' ',
    },
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
