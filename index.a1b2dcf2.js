const e={order:8,divisions:12,size:10,orientation:0},t=document.querySelector("#canvas");function o(){!function(e,t){if(e.getContext){let o=e.getContext("2d");o.clearRect(0,0,e.width,e.height);let r=e.width/2;for(let n=0;n<r;n+=t.size)o.save(),o.translate(e.width/2,e.height/2),o.beginPath(),o.strokeStyle="rgb(224 224 224)",o.arc(0,0,n,0,2*Math.PI),o.closePath(),o.stroke(),o.restore();for(let n=0;n<360;n+=360/(t.order*t.divisions)){let i=(t.orientation+n)*Math.PI/180;o.save(),o.translate(e.width/2,e.height/2),o.rotate(i),o.beginPath(),o.strokeStyle="rgb(224 224 224)",o.moveTo(0,0),o.lineTo(r,0),o.closePath(),o.stroke(),o.restore()}for(let n=0;n<360;n+=360/t.order){let i=(t.orientation+n)*Math.PI/180;o.save(),o.translate(e.width/2,e.height/2),o.rotate(i),o.beginPath(),o.strokeStyle="rgb(128 128 128)",o.moveTo(0,0),o.lineTo(r,0),o.closePath(),o.stroke(),o.restore()}}else console.error("Browser does not support <canvas>")}(t,e)}window.addEventListener("load",o),document.querySelector("#control-grid-orientation").addEventListener("change",t=>{e.orientation=t.target.value,o()});
//# sourceMappingURL=index.a1b2dcf2.js.map
