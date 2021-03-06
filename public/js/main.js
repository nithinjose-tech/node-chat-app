const chatForm = document.getElementById("chat-form");
const socket = io();

//Message from server
socket.on("message", (message) => {
  console.log(message);
  outputMessage(message);
});

//Message submit
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //Get message text
  const msg = e.target.elements.msg.value;
  //Emit message to server
  socket.emit("chatMessage", msg);
});

// Output message to DOM

function outputMessage(message) {
  const div = document.createElement("div");
  div.classList.add("message");
  const p = document.createElement("p");
  p.classList.add("meta");
  p.innerText = message.username;
  p.innerHTML += `<span>${message.time}</span>`;
  div.appendChild(p);
  const para = document.createElement("p");
  para.classList.add("text");
  para.innerText = message.text;
  div.appendChild(para);
  document.querySelector(".chat-messages").appendChild(div);
}
