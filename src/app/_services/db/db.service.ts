import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { firestore } from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor(private afs: AngularFirestore) {}

  batch = this.afs.firestore.batch();
  increment = firestore.FieldValue.increment(1);
  arrayRemove = firestore.FieldValue.arrayRemove;
  arrayUnion = firestore.FieldValue.arrayUnion;

  docRef(path: string): DocumentReference {
    return this.afs.firestore.doc(path);
  }

  // TODO change name
  batch$(path: string, query?: any): Observable<any> {
    return this.afs.collection(path, query).snapshotChanges();
  }

  // TOOD: Think about valueChanges -> https://github.com/angular/angularfire/blob/master/docs/firestore/querying-collections.md
  collection$(path, query?): Observable<any> {
    return this.afs
      .collection(path, query)
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((a) => {
            const data: Record<string, any> = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        }),
      );
  }

  doc$(path: string): Observable<any> {
    return this.afs
      .doc(path)
      .snapshotChanges()
      .pipe(
        map((doc) => {
          return { id: doc.payload.id, ...(doc.payload.data() as {}) };
        }),
      );
  }
  /**
   * @param {string} path 'collection' or 'collection/docID'
   * @param {object} data new data
   *
   * Creates or updates data on a collection or document.
   **/
  async update(path: string, data: Record<string, any>): Promise<any> {
    const segments = path.split('/').filter((v) => v);
    if (segments.length % 2) {
      // Odd is always a collection
      try {
        return await this.afs.collection(path).add(data);
      } catch (err) {
        console.log(err); //TODO Bug tracker
      }
    } else {
      // Even is always document
      try {
        await this.afs.doc(path).set(data, { merge: true });
      } catch (err1) {
        console.log(err1); // TODO Bug tracker
      }
    }
  }

  /**
   * @param  {string} path path to document
   *
   * Deletes document from Firestore
   **/
  delete(path: string): Promise<void> {
    return this.afs.doc(path).delete();
  }
}
