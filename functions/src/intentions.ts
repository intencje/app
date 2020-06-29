'use strict';

import functions = require('firebase-functions');
import slug = require('slug');

/**
 * Generuje slug dla każdej nowoutworzonej intencji bazując na jej znormalizowanym tytule i ID, jakie otrzymała od Firebase'a
 */
exports.slugGenerator = functions.firestore
  .document('/intentions/{intentionId}')
  .onCreate(async (snapshot) => {
    const id = snapshot.id;
    const data = snapshot.data();
    return snapshot.ref.update({
      slug: `${slug(data.title)},${id}`,
    });
  });
