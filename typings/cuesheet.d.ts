
export class CueSheet {
    catalog?: string;
    cdTextFile?: string;
    files?: File[];
    performer?: string;
    songWriter?: string;
    title?: string;
    rem?: string[];

    getCurrentFile(): File | null;
    getCurrentTrack(): Track | null;
    newFile(): this;
    newTrack(number: number, type: string): this;
}

export class File {
    name: string;
    type: string;
    tracks?: Track[];
}

export class Track {
    constructor(number: number, type: string);
    number: number;
    type: string;
    title?: string;
    flags?: string[];
    isrc?: string;
    performer?: string;
    songWriter?: string;
    pregap?: Time;
    postgap?: Time;
    indexes?: Index[];
}

export class Index {
    constructor(number: number, time: Time);
    number: number;
    time: Time;
}

export class Time {
    constructor(min?: number, sec?: number, frame?: number);
    min: number;
    sec: number;
    frame: number;
}
