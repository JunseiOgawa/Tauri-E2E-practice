import { invoke } from "@tauri-apps/api/core";

let greetInputEl: HTMLInputElement | null;
let greetMsgEl: HTMLElement | null;

async function greet() {
  if (greetMsgEl && greetInputEl) {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    greetMsgEl.textContent = await invoke("greet", {
      name: greetInputEl.value,
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  document.querySelector("#greet-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    greet();
  });

  // OpenFile ボタンをクリックしたら OpenFile() を呼び出す
  (document.querySelector("#open-file") as HTMLButtonElement | null)?.addEventListener("click", () => {
    OpenFile();
  });

  // Alate ボタンをクリックしたらアラートを表示
  (document.querySelector("#alate") as HTMLButtonElement | null)?.addEventListener("click", () => {
    alert("アラートボタンが押されました！");
  });
});


function OpenFile() {
  invoke("open_file").then((filePath) => {
    console.log("Selected file:", filePath);
  }).catch((error) => {
    console.error("Error opening file:", error);
  });
}

