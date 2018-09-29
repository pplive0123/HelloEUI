/**
 *
 * @author 
 * 游戏开始界面
 */
class GameStartPanel extends egret.Sprite {

    public static GAME_START: string = "gameStart";
    private bg: egret.Bitmap;// 背景
    // private startBtn: egret.TextField;//这里我们使用textfield当做按钮
    private login: game.Login;// 背景
    public constructor() {
        super();
        this.init();
    }
	
    //开启监听
    public start() {
        // this.startBtn.touchEnabled = true;
        // this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTab,this);
        this.login.loginBtn.touchEnabled = true;
        this.login.loginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTab,this);
    }
    //初始化
    private init() {
        this.bg = new egret.Bitmap(RES.getRes('gameStartBgImage'));
        this.addChild(this.bg);

        // this.startBtn = new egret.TextField();
        // this.startBtn.text = '开始游戏';
        // this.addChild(this.startBtn);
        // this.startBtn.x = (480 - this.startBtn.width) * 0.5;
        // this.startBtn.y = 400;

        this.login = new game.Login();
        this.login.horizontalCenter = 0;
        this.login.verticalCenter = 0;
        this.addChild(this.login);
        
    }

    private onTouchTab(e: egret.TouchEvent) {
        this.dispatchEventWith(GameStartPanel.GAME_START);
    }
	
    //结束界面，释放监听
    public end() {
        this.login.loginBtn.touchEnabled = false;
        if(this.login.loginBtn.hasEventListener(egret.TouchEvent.TOUCH_TAP))
            this.login.loginBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTab,this);
    }
}
