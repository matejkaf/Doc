console.log("test")
let position = 0;
// process keys
document.addEventListener('keydown', keydownHandler);

function keydownHandler(e) {
  if(e.key==' ') {
    console.log("Space")
    let main_element = document.getElementsByTagName('main')[0];
    main_element.children[position].style.visibility = "visible"
    position++
  }
}

// hide all

//document.body.children[0].style.visibility = "hidden"

let main_element = document.getElementsByTagName('main')[0];
main_element.children[0].style.visibility = "hidden"

for(let i=0; i<main_element.children.length; i++) {
  let el = main_element.children[i]
  console.log(el)
  console.log(el.nodeName)
  console.log(el.nodeType)
  el.style.visibility = "hidden"
}