const gen = document.querySelector("#generate-image");
let category = ["waifu", "neko", "shinobu", "megumin", "bully", "cuddle", "cry", "hug", "awoo", "kiss", "lick", "pat", "smug", "bonk", "yeet", "blush", "smile", "wave", "highfive", "handhold", "nom", "bite", "glomp", "slap", "kill", "kick", "happy", "wink", "poke", "dance", "cringe"];
let link;
document.addEventListener("DOMContentLoaded", async () => {
   document.querySelector("#image-container").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="spinner" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="white" d="M12 4.5a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12S17.799 22.5 12 22.5S1.5 17.799 1.5 12" opacity="0.1"/><path fill="white" d="M12 4.5a7.458 7.458 0 0 0-5.187 2.083a1.5 1.5 0 0 1-2.075-2.166A10.458 10.458 0 0 1 12 1.5a1.5 1.5 0 0 1 0 3"/></g></svg>`;
   let fetchurl = `https://api.waifu.pics/sfw/${category[Math.floor(Math.random() * category.length)]}`;
   await fetch(fetchurl).then((response) => response.json()).then((data) => {
      link = data.url;
      document.querySelector("#image-container").innerHTML = `<img width="450" src="${link}" id="image" loading="lazy"/>`;
   })
})
gen.addEventListener("click", async function() {
   gen.disabled = true;
   gen.innerHTML = `<div class="item-up">Generate</div>`;
   document.querySelector(".item-up").style.cssText = `animation-play-state: running;`;
   setTimeout(() => {
      gen.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="spinner" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="white" d="M12 4.5a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12S17.799 22.5 12 22.5S1.5 17.799 1.5 12" opacity="0.1"/><path fill="currentColor" d="M12 4.5a7.458 7.458 0 0 0-5.187 2.083a1.5 1.5 0 0 1-2.075-2.166A10.458 10.458 0 0 1 12 1.5a1.5 1.5 0 0 1 0 3"/></g></svg>`;
   }, 200)
   let fetchCat = category[Math.floor(Math.random() * category.length)];
   if (document.querySelector("#category").value) {
      if (document.querySelector("#category").value == "random") {
         fetchCat = category[Math.floor(Math.random() * category.length)];
      } else {
         fetchCat = document.querySelector("#category").value;
      }
   }
   let fetchType = "sfw";
   if (document.querySelector("#type").value) {
      fetchType = document.querySelector("#type").value;
   }
   await fetch(`https://api.waifu.pics/${fetchType}/${fetchCat}`).then((response) => response.json()).then((data) => {
      link = data.url;
      document.querySelector("#image-container").innerHTML = `<img width="450" src="${link}" id="image" loading="lazy"/>`;
   }).catch(e => console.log(e));

   gen.innerHTML = `<div class="item-up"><svg xmlns="http://www.w3.org/2000/svg" style="scale: 1.2; transform: translateY(2px);" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"/></svg></div>`;
   setTimeout(() => {
      document.querySelector(".item-up").style.cssText = `animation-play-state: running;`;
   }, 2000)
   setTimeout(() => {
      gen.innerHTML = `<div class="item-come-up">Generate</div>`;
      gen.disabled = false;
   }, 2100)
})

document.querySelector("#download").addEventListener("click", function() {
   document.querySelector("#download").innerHTML = `<div class="item-up">Download</div>`
   document.querySelector(".item-up").style.cssText = `animation-play-state: running;`
   setTimeout(() => {
      document.querySelector("#download").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" id="download-an" class="item-come-up" height="24" viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="2 4" stroke-dashoffset="6" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21"><animate attributeName="stroke-dashoffset" dur="0.3s" repeatCount="indefinite" values="6;0"/></path><path stroke-dasharray="30" stroke-dashoffset="30" d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.05s" dur="0.15s" values="30;0"/></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M12 8v7.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.25s" dur="0.1s" values="10;0"/></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M12 15.5l3.5 -3.5M12 15.5l-3.5 -3.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.35s" dur="0.1s" values="6;0"/></path></g></svg>`;
   }, 250)
   setTimeout(() => {
      document.querySelector("#download-an").classList.remove("item-come-up");
      document.querySelector("#download-an").classList.add("item-up");
      document.querySelector(".item-up").style.cssText = `animation-play-state: running;`
   }, 3000);
   setTimeout(() => {
      document.querySelector("#download").innerHTML = `<div class="item-come-up">Download</div>`;
   }, 3150)
   const a = document.createElement('a');
   a.href = link;
   a.target = "_blank";
   document.body.appendChild(a);
   a.click();
   a.remove();
})

document.querySelector("#type").addEventListener('change', () => {
   if (document.querySelector("#type").value == "nsfw") {
      document.querySelector("#category").innerHTML = `
      <option value="waifu" selected>Waifu</option>
      <option value="neko">Neko</option>
      <option value="trap">Trap</option>
      <option value="blowjob">Blowjob</option>`;
   }
   else {
      document.querySelector("#category").innerHTML = `<option value="random" selected>Random</option>
         <option value="waifu">Waifu</option>
         <option value="neko">Neko</option>
         <option value="shinobu">Shinobu</option>
         <option value="megumin">Megumin</option>
         <option value="bully">Bully</option>
         <option value="cuddle">Cuddle</option>
         <option value="cry">Cry</option>
         <option value="hug">Hug</option>
         <option value="awoo">Awoo</option>
         <option value="kiss">Kiss</option>
         <option value="lick">Lick</option>
         <option value="pat">Pat</option>
         <option value="smug">Smug</option>
         <option value="bonk">Bonk</option>
         <option value="yeet">Yeet</option>
         <option value="blush">Blush</option>
         <option value="smile">Smile</option>
         <option value="wave">Wave</option>
         <option value="highfive">Highfive</option>
         <option value="handhold">Handhold</option>
         <option value="nom">Nom</option>
         <option value="bite">Bite</option>
         <option value="glomp">Glomp</option>
         <option value="slap">Slap</option>
         <option value="kill">Kill</option>
         <option value="kick">Kick</option>
         <option value="happy">Happy</option>
         <option value="wink">Wink</option>
         <option value="poke">Poke</option>
         <option value="dance">Dance</option>
         <option value="cringe">Cringe</option>`;
   }
})

