import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {
    @ViewChild('videoPlayer', {static: true}) videoplayer: ElementRef;


    constructor() {}

    ngOnInit() {}

    toggleVideo(event: any) {
        this.videoplayer.nativeElement.play();
    }
}
