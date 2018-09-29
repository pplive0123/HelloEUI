/**
 *
 * @author 
 * 主要控制三个界面的切换
 */
class ViewManager extends egret.Sprite {
    public constructor() {
        super();
        this.init();
    }

    private gameStartPanel: GameStartPanel; // 开始界面
    private gameEndPanel: GameEndPanel; //游戏结束界面
    private gamePlayingPanel: GamePlayingPanel; //游戏中界面 
	/**
	 * 这里初始化
	 */
    private init() {
        this.gameStartPanel = new GameStartPanel();
        this.gameEndPanel = new GameEndPanel();
        this.gamePlayingPanel = new GamePlayingPanel();
    }

    public start() {
   
        this.addChild(this.gameStartPanel);
        this.gameStartPanel.start();
        this.gameStartPanel.addEventListener(GameStartPanel.GAME_START,this.gamePlaying,this);
    }

    private gamePlaying() {
        this.gameStartPanel.end();
        this.removeChild(this.gameStartPanel);
        this.gameStartPanel.removeEventListener(GameStartPanel.GAME_START,this.gamePlaying,this);
        this.addChild(this.gamePlayingPanel);
        this.gamePlayingPanel.start();
        this.gamePlayingPanel.addEventListener(GamePlayingPanel.CHANGEPANEL,this.gameEnd,this);
    }

    private gameEnd() {
        this.gamePlayingPanel.end();
        this.removeChild(this.gamePlayingPanel);
        this.gamePlayingPanel.removeEventListener(GamePlayingPanel.CHANGEPANEL,this.gameEnd,this);
        this.addChild(this.gameEndPanel);
        this.gameEndPanel.start();
        this.gameEndPanel.addEventListener(GameEndPanel.GAME_END,this.gameStart,this);
    }
    
    private gameStart(){
        this.gameEndPanel.end();
        this.removeChild(this.gameEndPanel);
        this.gameEndPanel.removeEventListener(GameEndPanel.GAME_END,this.gameStart,this);
        this.addChild(this.gameStartPanel);
        this.gameStartPanel.start();
        this.gameStartPanel.addEventListener(GameStartPanel.GAME_START,this.gamePlaying,this)
    }
}
