import { _decorator, Animation, Component, director, Node, resources, Sprite } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('InitialSetup')
export class InitialSetup extends Component {
    
    private animationComponent: Animation = null;

    start() {
        this.animationComponent = this.node.getComponent(Animation);
        if(this.animationComponent){
            const rootNode = director.getScene().getChildByName('Canvas')
            director.addPersistRootNode(this.node);
            this.animationComponent.on(Animation.EventType.FINISHED, this.logoAnimFinished);
        }
    }

    update(deltaTime: number) {}

    loadAssets() {
        resources.loadDir('texture', (err, assets) => {
            if (err) {
                console.error("Error occurred", err);
                return;
            }
            console.log("Assets loaded", assets);
        });
    }

    logoAnimFinished() {
        
        director.loadScene("MainMenu");
    }   
}
