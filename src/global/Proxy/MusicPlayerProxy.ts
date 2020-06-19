// Proxy
export class MusicProxy implements Music {

    constructor(private fileName: string){ }

    private myMusic: Music;

    play() {
        if (this.myMusic == null) {
            this.myMusic = new MyMusic(this.fileName);
        } else {
            alert("No need to download "+this.fileName);
        }

        this.myMusic.play();
    }

    public getFileName(): string {
        return this.fileName;
    }
}

// Service
interface Music {
    play(): void;
    getFileName(): string;
}

// Concrete Service
export class MyMusic implements Music {
    constructor(private fileName: string){ 
        this.download();
    }

    private download(){
        alert("downloading "+ this.fileName);
    }

    public play() {
        alert("Play "+ this.fileName);
    }

    public getFileName(): string {
        return this.fileName;
    }
}

// Client
export class MusicLibrary {
    private musicLibrary = {};

    public add(music: Music) {
        const fileName = music.getFileName();
        this.musicLibrary[fileName] = music;
    }

    public play(fileName: string){
        this.musicLibrary[fileName].play();
    }
}