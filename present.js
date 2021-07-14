console.log("test")
let position = 0
let presentation_mode = false
let hot_key = 'p'
let hot_key_pressed = false

// process keys
document.addEventListener('keydown', keydownHandler);

function keydownHandler(e) {
  if (!presentation_mode) {
    if (e.key == hot_key) {
      console.log(e.key)
      if (hot_key_pressed) {
        hot_key_pressed = false
        presentation_mode = true
        hide_all_first_level_elements()
        position = 0
      } else {
        hot_key_pressed = true
      }
    }
  } else {
    // in presentation mode
    if (e.key == ' ') {
      console.log("Space")
      let main_element = document.getElementsByTagName('main')[0];
      let element_to_show = main_element.children[position]
      position++
      element_to_show.style.visibility = "visible"
      element_to_show.scrollIntoView(false) // alignToTop=false
      e.preventDefault() // no scrolling by space
    }

  }
}

function hide_all_first_level_elements() {
  let main_element = document.getElementsByTagName('main')[0];
  main_element.children[0].style.visibility = "hidden"

  for (let i = 0; i < main_element.children.length; i++) {
    let el = main_element.children[i]
    //console.log(el.nodeName) // P, UL, SCRIPT
    el.style.visibility = "hidden"
  }
}
