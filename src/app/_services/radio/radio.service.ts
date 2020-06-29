import { Howl, Howler } from 'howler';

import { Observable, Observer, Subject } from 'rxjs';

export interface SoundInterface {
  sourceUrl: string;
  howl: Howl;
}

export interface SoundProgressInterface {
  played: any; //  tiempo transcurrido s
  remaining: any; //  timpo restante
  position: any; //  0-1% reproducido
}

export class HowlerPlayer {
  private _sounds: Array<SoundInterface>;
  private _index: number;

  private $progress: Subject<SoundProgressInterface>;

  /** */
  constructor(playlist: Array<string>) {
    this._index = 0;
    this._sounds = playlist.map((pSong: string) => ({
      sourceUrl: pSong,
      howl: null,
    }));

    this.$progress = new Subject();
  }

  /** */
  public play(index: number = null) {
    if (index == null) index = this._index;
    else if (index < 0 || index >= this._sounds.length) index = 0;
    Howler.autoSuspend = false;
    const sound = this._sounds[index];
    if (!sound.howl) {
      Howler.autoSuspend = false;
      sound.howl = new Howl({
        src: [sound.sourceUrl],
        html5: false,
        autoplay: false,
        volume: 0,

        onplay: () => {
          requestAnimationFrame(this.seekStep); //  PROGRESS STEP CALL
        },
        onseek: () => {
          // Start upating the progress of the track.
          requestAnimationFrame(this.seekStep);
        },
        onend: () => {
          this.skip('next');
        },
      });
    }
    this.index = index;

    const howl = sound.howl;
    howl.fade(0, 1, 500);
    howl.play();
  }

  /** */
  public pause(): void {
    const sound = this._sounds[this._index].howl;
    if (sound) {
      sound.fade(1, 0, 500);
      sound.once('fade', () => {
        sound.pause();
        sound.volume(1);
      });
    }
  }

  /** */
  public stop(): void {
    const sound = this._sounds[this._index].howl;
    if (sound) {
      sound.fade(1, 0, 500);
      sound.once('fade', () => {
        sound.stop();
        sound.volume(1);
      });
    }
  }

  /** */
  public get index(): number {
    return this._index;
  }

  /** */
  public set index(index: number) {
    this.stop();
    this._index = index;
  }

  /** */
  public skip(direction = 'next'): void {
    let newIndex: number = this._index;
    if (direction === 'next') {
      newIndex = newIndex + 1 >= this._sounds.length ? 0 : newIndex + 1;
    } else {
      newIndex = newIndex - 1 < 0 ? this._sounds.length - 1 : newIndex - 1;
    }

    this.skipTo(newIndex);
  }

  /***/
  public skipTo(index: number) {
    if (index < 0 || index >= this._sounds.length) index = 0;

    this.stop();
    this.play(index);
  }

  /** */
  public fastforward(secs = 5): void {
    const sound = this._sounds[this._index].howl;
    // const timeToSeek = sound.seek() + secs;

    // if (timeToSeek >= sound.duration()) {
    //   this.skip();
    // } else {
    //   sound.seek(timeToSeek);
    // }
  }

  /** */
  public rewind(secs = 5): void {
    const sound = this._sounds[this._index].howl;
    let timeToSeek;

    sound.seek(timeToSeek);
  }

  /** */
  private seekStep = () => {
    const sound = this._sounds[this._index].howl;

    if (sound.playing()) {
      const sSeek = sound.seek(),
        sDuration = sound.duration();
      const progress: SoundProgressInterface = {
        played: sSeek,
        remaining: 0,
        position: 100,
      };
      this.$progress.next(progress);

      requestAnimationFrame(this.seekStep);
    }
  };

  /** */
  public onPlay(): Subject<SoundProgressInterface> {
    return this.$progress;
  }
}
