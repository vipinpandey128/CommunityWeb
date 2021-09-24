import { Time } from "@angular/common";

export class LiveSession {
    public liveSessionId:number;
        public title:string;
        public organisor:string
        public guest:string;
        public sessionDate:Date;
        public sessionTime:Time;
        public youtubeLink:string;
        public isActive:boolean;
}
