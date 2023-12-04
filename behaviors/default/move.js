import {ActorBehavior, PawnBehavior} from "../PrototypeBehavior";
import * as Microverse from 'path/to/microverse';
import {sceneSetup} from '../default/sceneSetup';

import * as THREE from 'three';


class MovePawn extends PawnBehavior {


    setup() {
        this.addEventListener("pointerDown", "football");
    }
    football(){
        let [x, y, z] = this.translation;
        x -= 5; 
        z += 5;
        this.set({ translation: [x, y, z] });
    }
    
    // onPointerDown(p3d){
    //     if(p3d.isClick){
    //         console.log("clicked")
    //         this.actor.position.x += 5;
    //         this.say("moveCard", {
    //             x: this.actor.position.x,
    //             y: this.actor.position.y,
    //             z: this.actor.position.z
    //         });
    //     }
    // }
}


export default {
    modules: [
        {
            name: "move",
            pawnBehaviors: [MovePawn]
        }
    ]
}