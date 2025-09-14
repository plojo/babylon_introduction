import type { Engine as _Engine } from "@babylonjs/core/Engines/engine";
import type { Scene as _Scene } from "@babylonjs/core/scene";
import type { ArcRotateCamera as _ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import type { HemisphericLight as _HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import type { Mesh as _Mesh } from "@babylonjs/core/Meshes/mesh";
import type { MeshBuilder as _MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import type { Vector3 as _Vector3 } from "@babylonjs/core/Maths/math.vector";

const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement | null;
if (!canvas) throw new Error("Canvas with id 'renderCanvas' not found");

declare const BABYLON: any;

const engine = new BABYLON.Engine(canvas, true) as unknown as _Engine;

function createScene(): _Scene {
  const scene = new BABYLON.Scene(engine) as unknown as _Scene;

  const camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 4, 6, new BABYLON.Vector3(0, 1, 0), scene) as unknown as _ArcRotateCamera;
  camera.attachControl(canvas, true);

  const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene) as unknown as _HemisphericLight;

  const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 1 }, scene) as unknown as _Mesh;
  sphere.position.y = 1;

  const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene) as unknown as _Mesh;

  return scene;
}

const scene = createScene();

engine.runRenderLoop(function () {
  scene.render();
});

window.addEventListener("resize", function () {
  engine.resize();
});
