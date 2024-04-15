import { Button } from "@/components/ui/button";
import TwitterLogo from "./assets/twitter.svg";
import ShadCnLogo from "./assets/shadcn-ui-dark.svg";
import JsLogo from "./assets/javascript.svg";
import "./App.css";

function App() {
    return (
        <div className="w-full h-screen flex flex-col gap-20 justify-center items-center ">
            <div className="flex gap-8 items-center justify-center">
                <img src={ShadCnLogo} className="h-20" alt="shadcn-logo" />
                <img src={JsLogo} className="h-20" alt="javascript-logo" />
            </div>
            <Button onClick="" className="animate-bounce">
                <div className="flex gap-1 justify-center items-center">
                    <img src={TwitterLogo} className="text-white w-6 h-6" alt="twitter-x-logo" />
                    <span className="font-mono">@harsh12codes</span>
                </div>
            </Button>
        </div>
    );
}

export default App;
