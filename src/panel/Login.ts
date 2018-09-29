/**
 * 
 */

module game {

    export class Login extends eui.Component {

        public constructor() {
            super();
            this.skinName = "resource/eui_skins/LoginSkin.exml";
            this.addEventListener(eui.UIEvent.COMPLETE , this.createCompleteEvent, this);
        }

        public createCompleteEvent(event:eui.UIEvent):void{
            this.removeEventListener(eui.UIEvent.COMPLETE , this.createCompleteEvent, this);
            // game.AppFacade.getInstance().registerMediator( new RoleMediator(this) );
        }

        public loginBtn: eui.Button;
        public readProxy: eui.Button;
        public saveProxy: eui.Button;
        public input1: eui.Label;
        public showText: eui.Label;
        
        public partAdded(partName:string, instance:any):void{
            super.partAdded(partName, instance);
        }
    }
}