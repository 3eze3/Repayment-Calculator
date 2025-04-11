import { clearInputs } from './dom-interaction/clear-inputs.mjs';
import { animationInput } from './dom-interaction/input-animation.mjs';
class Main {
    static main() {
        animationInput();
        clearInputs();
    }
}
Main.main();
