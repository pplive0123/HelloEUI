/**
 *
 * @author 
 * 游戏界面
 */
class GamePlayingPanel extends egret.Sprite {
    public static CHANGEPANEL: string = "changepanel";
    private bg: egret.Bitmap;// 背景
    private timeTitle: egret.TextField;//这里我们使用textfield当做开始按钮
    private timer: egret.Timer;//计时器
    private timeNumbers: number = 20;//计时的秒数
    public constructor() {
        super();
        this.init();
    }
    	
    //开启监听
    public start() {
        this.timeNumbers = 20;
        this.timer.start();
        this.timer.addEventListener(egret.TimerEvent.TIMER,this.onTimer,this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.onTimerComplete,this);
    }
    //初始化
    private init() {
        this.bg = new egret.Bitmap(RES.getRes('gamePlayingBgImage'));
        this.addChild(this.bg);

        this.timeTitle = new egret.TextField();
        this.timeTitle.text = "剩余时间：" 　+ this.timeNumbers + " 秒";
        this.timeTitle.x = (480 - this.timeTitle.width) * 0.5;
        this.timeTitle.y = 400;
        this.addChild(this.timeTitle);
        this.timer = new egret.Timer(1000,this.timeNumbers);
        
    }

    private onTimer(e:egret.TimerEvent){
        this.timeNumbers -= 1;
        this.timeTitle.text = "剩余时间：" 　+ this.timeNumbers + " 秒";
    }
    
    private onTimerComplete(e: egret.TouchEvent) {
        this.dispatchEventWith(GamePlayingPanel.CHANGEPANEL);
    }
        	
    //结束界面，释放监听
    public end() {
        
        if(this.timer.hasEventListener(egret.TimerEvent.TIMER))
            this.timer.removeEventListener(egret.TimerEvent.TIMER,this.onTimer,this);
        if(this.timer.hasEventListener(egret.TimerEvent.TIMER_COMPLETE))
            this.timer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE,this.onTimerComplete,this);    
        this.timer.stop();
        this.timer.reset();
    }
}
