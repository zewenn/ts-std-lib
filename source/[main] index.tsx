import { printf } from "../__stdlib__";
import { ipcRenderer } from "electron";

/** @field ./example */
import "./example/test";
import { Main, Render } from "../__stdlib__/dom";
/** @close ./example */


Main(() => {
    ipcRenderer.send("toggle-dev-tools");

    Render(<>
        <div>
            <h1>Hello World!</h1>
        </div>
    </>);

    Render(<>
        <div>
            <h2>Second Render!</h2>
        </div>
    </>)
})