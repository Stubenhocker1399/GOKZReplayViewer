///<reference path="../js/facepunch.webgame.d.ts"/>
///<reference path="../js/sourceutils.d.ts"/>

import WebGame = Facepunch.WebGame;

class ReplayViewer extends SourceUtils.MapViewer {
    protected onInitialize(): void {
        this.useDefaultCameraControl = false;
    }
}