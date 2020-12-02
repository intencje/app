import { DocumentData } from '@firebase/firestore-types';

// Use cases:
// status?: 'draft' | 'queued';

export enum Role {
  Administrator = 'administrator',
  // * sudo
  Editor = 'editor',
  // * dodawanie artykulow
  // * edycja artykułów
  Moderator = 'moderator',
  // * wrzucanie intencji na kolejke
  // * moderacja modlitw
  // * moderacja patronow
}

export interface Tags {
  name: string;
}

export interface Categories {
  name: string;
}

export interface User {
  uid: string;
  email: string;
  emailVerified: boolean;
  displayName?: string;
  avatarURL?: string;
  roles?: Array<string>;
  settings?: Notifications;
  /** @description Ilość nieprzeczytanych powiadomień o wiadomościach */
  unreadMessages?: number;
  /** @description Ilość nieprzeczytanych powiadomień ogółem */
  unreadNotifications?: number;
  parish?: string;
}

export interface Notifications {
  notifications: NotificationGroups;
}

export interface NotificationGroups {
  center: NotificationsOptions;
  email: NotificationsOptions;
  push: NotificationsOptions;
}

export interface NotificationsOptions {
  /** @description Poinformuj o publikacji dodanego przez użytkownika komentarza. */
  commentPublished: boolean;
  /** @description Poinformuj o oznaczeniu intencji, za którą się modli się użytkownik statusem "Spełniona" */
  intentionFulfilled: boolean;
  /** @description Poinformuj o o publikacji intencji dodanej przez użytkownika */
  intentionPublished: boolean;
  /** @description Poinformuj użytkownika o nowym artukule */
  newArticle: boolean;
  /** @description Poinformuj użytkownika o nowym poście na blogu */
  newBlogPost: boolean;
  /** @description Poinformuj użytkownika o nowym komentarzu, który pojawił się pod intencją, za którą się modli */
  newComment: boolean;
  /** @description Poinformuj użytkownika o nowej intencji, która oznaczona została obserwowanym przez niego tagiem */
  newIntentionFromObservedTag: boolean;
  /** @description Poinformuj użytkownika o nowej wiadomości */
  newMessage: boolean;
  /** @description Poinformuj użytkownika o nowej osobie z jego parafii */
  newParishioner: boolean;
  /** @description Poinformuj użytkownika o nowej sylwetce patrona */
  newPatron: boolean;
  /** @description Poinformuj użytkownika o nowej modlitwie w jego intencji */
  newPrayer: boolean;
  /** @description Poinformuj użytkownika o nowym świadectwie */
  newTestimony: boolean;
  /** @description Poinformuj użytkownika o podziękowaniu za jego modlitwę */
  thanksForPrayer: boolean;
  /** @description Poinformuj użytkownika o podziękowaniu za jego świadectwo */
  thanksForTestimony: boolean;
}

export interface TestiomnyThanking {
  date: string;
  displayName: string;
  avatarUrl: string;
  thanked: boolean;
  uid: string;
}

export enum Status {
  draft = 'draft',
  queued = 'queued',
  published = 'published',
  fulfilled = 'fulfilled',
}

export interface Testimony {
  date: string;
  author: string;
  content: string;
  uid: string;
}

export interface Intention {
  id?: string;
  uid: string;
  status: 'draft' | 'trashed' | 'fulfilled' | 'stale' | 'published';
  authorDisplayName: string;
  authorAvatarURL: string;
  date: DocumentData;
  title: string;
  content: string;
  parish: string;
  commentsCount?: number;
  praying: string[]; // Separated UID's of prayers to easily generate "Intentions that I pray for" page with Firebase array-contains
  prayingData?: [PrayingData];
  tags?: Tags;
  slug?: string;
}

export interface Prayer {
  id?: string;
  uid?: string;
  status?: 'draft' | 'trashed' | 'published';
  date?: DocumentData;
  title?: string;
  content?: string;
  tags?: string[]; // TODO: podłączyć model Tags
  slug?: string;
  category?: string;
  isCoverImageUploaded?: boolean;
  isHeaderImageUploaded?: boolean;
}

export interface PrayingData {
  date: DocumentData;
  displayName: string;
  thanked: boolean;
}

export interface Comment {
  status: 'draft' | 'rejected' | 'published';
  date: DocumentData;
  content: string;
}

export interface Prayers {
  title: string;
}

export interface Patrons {
  name: string;
}
