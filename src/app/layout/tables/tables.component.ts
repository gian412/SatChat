import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import * as WorldWind from '@nasaworldwind/worldwind';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit, AfterViewInit {
    @ViewChild('scene', {static: true}) scene: ElementRef;
    constructor() {}

    ngOnInit() {}

    ngAfterViewInit() {
        const wwd = new WorldWind.WorldWindow('scene');

        wwd.addLayer(new WorldWind.BMNGOneImageLayer());
        wwd.addLayer(new WorldWind.BMNGLandsatLayer());
        wwd.addLayer(new WorldWind.AtmosphereLayer());

        wwd.addLayer(new WorldWind.CompassLayer());
        wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
        wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));
        console.log(wwd.navigator.range = 2.5e7);

        wwd.redraw();
      }
}
