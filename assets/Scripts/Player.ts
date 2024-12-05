import { _decorator, Animation, Component, EventKeyboard, Input, KeyCode, Node, NodeEventType } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    private isWalkingLeft: boolean = false;
    private isWalkingRight: boolean = false;
    private animComp: Animation = null

    protected onLoad(): void {
        this.node.on(Input.EventType.KEY_DOWN, this.onKeyDown);
        this.node.on(Input.EventType.KEY_UP, this.onKeyUp);
        this.animComp = this.node.getComponent(Animation);
    }
    start() {

    }

    update(deltaTime: number) {
        if(this.isWalkingLeft){
            this.node.setPosition(this.node.getPosition().x - 20* deltaTime,this.node.getPosition().y);
            this.animComp.crossFade("walkLeft");
        }else if(this.isWalkingRight){
            this.node.setPosition(this.node.getPosition().x + 20* deltaTime, this.node.getPosition().y);
        }
    }

    onKeyDown(e: EventKeyboard){
        switch(e.keyCode){
            case KeyCode.ARROW_RIGHT:
                this.isWalkingRight = true;
                break;
            case KeyCode.ARROW_LEFT:
                this.isWalkingLeft = true;
                break;
        }
    }

    onKeyUp(e: EventKeyboard){
        this.isWalkingRight = false;
        this.isWalkingLeft = false;
    }
}


