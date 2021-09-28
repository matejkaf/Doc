// F.Matejka 14.07.2021
// Version 1
//
// Präsentationsmodus für aus md generierte
// HTML Seiten
// Taste "p" 2x zum aktivieren
// Leertaste zum Anyeigen des nächsten HTML Elements
// Backspace für zurück

let position = 0
let presentation_mode = false
let hot_key = 'p'
let hot_key_pressed = false

// process keys
document.addEventListener('keydown', keydownHandler);

function keydownHandler(e) {
  if (!presentation_mode) {
    if (e.key == hot_key) {
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
      // Space
      let element_to_show = setVisibilityOnElementNr(position,"visible")
      position++
      scrollIfNecessary(element_to_show)
      e.preventDefault() // no scrolling by space
    } else if (e.keyCode==8) {
      // backspace
      if(position>0) {
        position--
        setVisibilityOnElementNr(position,"hidden")
        scrollIfNecessary(getElementNr(position))
      }
      e.preventDefault()
    }

  }
}

function scrollIfNecessary(el) 
{
  if (!isElementInViewport(el)) {
    el.scrollIntoView(false) // alignToTop=false
  }
}

function getElementNr(nr) 
{
  let main_element = document.getElementById('div_content');
  return main_element.children[nr]
}

function setVisibilityOnElementNr(nr,visibility) 
{
  let element_to_set = getElementNr(nr)
  element_to_set.style.visibility = visibility
  return element_to_set
}

function hide_all_first_level_elements() 
{
  let main_element = document.getElementById('div_content');
  main_element.children[0].style.visibility = "hidden"

  for (let i = 0; i < main_element.children.length; i++) {
    let el = main_element.children[i]
    //console.log(el.nodeName) // P, UL, SCRIPT
    el.style.visibility = "hidden"
  }
}

function isElementInViewport(el) 
{
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}