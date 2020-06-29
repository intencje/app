import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../_services/seo/seo.service';
import { Howl, Howler } from 'howler';
@Component({
  selector: 'app-radio',
  templateUrl: './radio.page.html',
  styleUrls: ['./radio.page.scss'],
})
export class RadioPage implements OnInit {
  constructor(public readonly route: ActivatedRoute, private readonly seoService: SeoService) {}

  ngOnInit() {
    // Cache references to DOM elements.
    const elms = [
      'station0',
      'title0',
      'live0',
      'playing0',
      'station1',
      'title1',
      'live1',
      'playing1',
      'station2',
      'title2',
      'live2',
      'playing2',
      'station3',
      'title3',
      'live3',
      'playing3',
      'station4',
      'title4',
      'live4',
      'playing4',

      'station5',
      'title5',
      'live5',
      'playing5',

      'station6',
      'title6',
      'live6',
      'playing6',

      'station7',
      'title7',
      'live7',
      'playing7',
    ];
    elms.forEach(function (elm) {
      window[elm] = document.getElementById(elm);
    });

    /**
     * Radio class containing the state of our stations.
     * Includes all methods for playing, stopping, etc.
     * @param {Array} stations Array of objects with station details ({title, src, howl, ...}).
     */
    const Radio = function (stations) {
      this.stations = stations;
      this.index = 0;

      // Setup the display for each station.
      for (let i = 0; i < this.stations.length; i++) {
        window['title' + i].innerHTML = '<b>' + this.stations[i].freq + '</b> ' + this.stations[i].title;
        window['station' + i].addEventListener(
          'click',
          function (index) {
            const isNotPlaying = this.stations[index].howl && !this.stations[index].howl.playing();

            // Stop other sounds or the current one.
            radio.stop();

            // If the station isn't already playing or it doesn't exist, play it.
            if (isNotPlaying || !this.stations[index].howl) {
              radio.play(index);
            }
          }.bind(this, i),
        );
      }
    };
    Radio.prototype = {
      /**
       * Play a station with a specific index.
       * @param  {Number} index Index in the array of stations.
       */
      play: function (index) {
        let sound;

        index = typeof index === 'number' ? index : this.index;
        const data = this.stations[index];

        // If we already loaded this track, use the current one.
        // Otherwise, setup and load a new Howl.
        if (data.howl) {
          sound = data.howl;
        } else {
          sound = data.howl = new Howl({
            src: data.src,
            html5: true, // A live stream can only be played through HTML5 Audio.
            format: ['ogg'],
          });
        }

        // Begin playing the sound.
        sound.play();

        // Toggle the display.
        this.toggleStationDisplay(index, true);

        // Keep track of the index we are currently playing.
        this.index = index;
      },

      /**
       * Stop a station's live stream.
       */
      stop: function () {
        // Get the Howl we want to manipulate.
        const sound = this.stations[this.index].howl;

        // Toggle the display.
        this.toggleStationDisplay(this.index, false);

        // Stop the sound.
        if (sound) {
          sound.unload();
        }
      },

      /**
       * Toggle the display of a station to off/on.
       * @param  {Number} index Index of the station to toggle.
       * @param  {Boolean} state true is on and false is off.
       */
      toggleStationDisplay: function (index, state) {
        // Highlight/un-highlight the row.
        window['station' + index].style.backgroundColor = state ? 'rgba(255, 255, 255, 0.33)' : '';

        // Show/hide the "live" marker.
        window['live' + index].style.opacity = state ? 1 : 0;

        // Show/hide the "playing" animation.
        window['playing' + index].style.display = state ? 'block' : 'none';
      },
    };

    // Setup our new radio and pass in the stations.
    const radio = new Radio([
      {
        freq: '[Czerwony]',
        title: 'Radio Katolik',
        src: 'https://radio.intencje.pl/stream/radio_katolik_red',
        howl: null,
      },
      {
        freq: '[Zielony]',
        title: 'Radio Katolik',
        src: 'https://radio.intencje.pl/stream/radio_katolik_green',
        howl: null,
      },
      {
        freq: '',
        title: 'Radio Warszawa',
        src: 'https://radio.intencje.pl/stream/radio_warszawa',
        howl: null,
      },
      {
        freq: '',
        title: 'Radio Esperance Gregorien',
        src: 'https://esperance.streamakaci.com/gregorien.mp3',
        howl: null,
      },
      {
        freq: '',
        title: 'Radio Esperance Louange',
        src: 'https://esperance.streamakaci.com/louange.mp3',
        howl: null,
      },
      {
        freq: '',
        title: 'Radio Esperance Musique Sacree',
        src: 'https://esperance.streamakaci.com/musique.mp3',
        howl: null,
      },
      {
        freq: '',
        title: 'Radio Esperance Byzantin',
        src: 'https://esperance.streamakaci.com/alraja.mp3',
        howl: null,
      },
    ]);
  }
}
