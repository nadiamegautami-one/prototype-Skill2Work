function login(e){
  e.preventDefault();
  document.getElementById("loginBox").style.display="none";
  document.getElementById("dashboard").style.display="block";
}

function logout(){
  location.reload();
}

function submitTest(){
  let t=0,d=0;
  [q1.value,q2.value].forEach(v=>{
    v==="tech"?t++:v==="design"?d++:null;
  });
  let r=t>d?"Web Developer":"UI/UX Designer";
  document.getElementById("testResult").innerText="Rekomendasi: "+r;
}

let progress=0;
function addProgress(){
  progress=Math.min(100,progress+25);
  document.getElementById("progressText").innerText=progress+"%";
}

function checkCert(){
  document.getElementById("certText").innerText=
    progress===100?"🎓 Sertifikat tersedia":"Belum lulus";
}

function applyJob(){
  document.getElementById("jobStatus").innerText="📄 Menunggu lamaran";
}

function toggleDark(){
  document.body.classList.toggle("dark");
}
