import { _decorator, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ButtonHandler')
export class ButtonHandler extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }

    startButtonClicked(){
        director.loadScene("Game");
    }
}


