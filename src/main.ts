let canvas: HTMLCanvasElement;
let engine: BABYLON.Engine;
let scene: BABYLON.Scene;

function createScene(): BABYLON.Scene {
    const scene = new BABYLON.Scene(engine);
    const camera = new BABYLON.ArcRotateCamera("camera",
        Math.PI / 2, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);
    BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 1 }, scene);

    return scene;
}

window.addEventListener("DOMContentLoaded", () => {
    canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;
    engine = new BABYLON.Engine(canvas, true);

    scene = createScene();

    engine.runRenderLoop(() => {
        scene.render();
    });
});

window.addEventListener("resize", function () {
    engine.resize();
});
