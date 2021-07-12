---
title: Allegro
subtitle: Game Programing Library
---

- [Allegro homepage](https://liballeg.org/)

- [Allegro 5 reference manual](https://liballeg.org/a5docs/trunk/index.html)

- [Allegro Tutorial](https://github.com/liballeg/allegro_wiki/wiki/Allegro-Vivace)



## Installieren

Getestet in REPLIT

```bash
echo "installing Allegro graphics library"
wget https://github.com/liballeg/allegro5/releases/download/5.2.7.0/allegro-5.2.7.0.tar.gz
tar -xzf allegro-5.2.7.0.tar.gz
cd allegro-5.2.7.0
# laut README_make.txt:
mkdir build
cd build
cmake ..
make
```



## Compilieren

Compile command line ([Definitive Allegro C++ Linux Command-Line Compile](https://gautiertalksopentech.wordpress.com/2013/06/26/definitive-allegro-c-linux-command-line-compile/))

```bash
run = "ALLEGRODIR='allegro-5.2.7.0';clang++-7 -pthread -std=c++17 -o main main.cpp -DALLEGRO_STATICLINK -I$ALLEGRODIR/include -I$ALLEGRODIR/build/include -I$ALLEGRODIR/addons/primitives/ -Iallegro-5.2.7.0/addons/font/ -L$ALLEGRODIR/build/lib -lallegro -lallegro_primitives -lallegro_font -Wl,-rpath,$ALLEGRODIR/build/lib && ./main"
```

Siehe [Clang linking with a .so file](https://stackoverflow.com/questions/25160245/clang-linking-with-a-so-file), `-Wl,-rpath,` Option um das Library Verzeichnis zu konfigurieren.

Siehe auch `makefile` in [REPL : Allegro](https://replit.com/@htlmatejka/Allegro)

```
run = "make && ./main"
```



## Grundgerüst I


```c++
#include <allegro5/allegro.h>
#include <allegro5/allegro_primitives.h>
#include <stdio.h>
 
int main(void)
{
    ALLEGRO_DISPLAY *display = NULL;

    if(!al_init())
    {
      fprintf(stderr, "failed to initialize allegro!\n");
      return -1;
    }

    al_install_keyboard();

    display = al_create_display(320, 240);

    if(!display)
    {
      fprintf(stderr, "failed to create display!\n");
      return -1;
    }

    al_clear_to_color(al_map_rgb(0,0,0));
    al_flip_display();

    al_draw_line(10, 10, 100, 120, al_map_rgb(255,255,255), 4.0);
    al_draw_filled_rectangle(100, 30, 150, 100, al_map_rgb(255,0,0));
    al_draw_filled_circle(125, 65, 20, al_map_rgb(0,255,0));
    al_flip_display();

    printf("Fenster schließt in 10sek...\n");
    al_rest(10.0);
    al_destroy_display(display);
  
    return 0;
}
```



## Grundgerüst II

Folgend ist das Grundgerüst vom [Tutorial](https://github.com/liballeg/allegro_wiki/wiki/Allegro-Vivace)

```c++
#include <stdio.h>
#include <allegro5/allegro5.h>
#include <allegro5/allegro_font.h>

int main()
{
  if(!al_init())
  {
    printf("couldn't initialize allegro\n");
    return 1;
  }

  if(!al_install_keyboard())
  {
    printf("couldn't initialize keyboard\n");
    return 1;
  }

  ALLEGRO_TIMER* timer = al_create_timer(1.0 / 30.0);
  if(!timer)
  {
    printf("couldn't initialize timer\n");
    return 1;
  }

  ALLEGRO_EVENT_QUEUE* queue = al_create_event_queue();
  if(!queue)
  {
    printf("couldn't initialize queue\n");
    return 1;
  }

  ALLEGRO_DISPLAY* disp = al_create_display(640, 480);
  if(!disp)
  {
    printf("couldn't initialize display\n");
    return 1;
  }

  ALLEGRO_FONT* font = al_create_builtin_font();
  if(!font)
  {
    printf("couldn't initialize font\n");
    return 1;
  }

  al_register_event_source(queue, al_get_keyboard_event_source());
  al_register_event_source(queue, al_get_display_event_source(disp));
  al_register_event_source(queue, al_get_timer_event_source(timer));

  bool done = false;
  bool redraw = true;
  ALLEGRO_EVENT event;

  al_start_timer(timer);
  while(1)
  {
    al_wait_for_event(queue, &event);

    switch(event.type)
    {
      case ALLEGRO_EVENT_TIMER:
        // game logic goes here.
        redraw = true;
        break;

      case ALLEGRO_EVENT_KEY_DOWN:
      case ALLEGRO_EVENT_DISPLAY_CLOSE:
        done = true;
        break;
    }

    if(done)
      break;

    if(redraw && al_is_event_queue_empty(queue))
    {
      al_clear_to_color(al_map_rgb(0, 0, 0));
      al_draw_text(font, al_map_rgb(255, 255, 255), 0, 0, 0, "Hello world!");
      al_flip_display();

      redraw = false;
    }
  }

  al_destroy_font(font);
  al_destroy_display(disp);
  al_destroy_timer(timer);
  al_destroy_event_queue(queue);

  return 0;
}
```



mit Erweiterungen:

- Grafik Ausgabe für 5 Sekunden
- Tastatur Abfrage
- Maus Koordinaten und Button

```c++
#include <stdio.h>
#include <allegro5/allegro5.h>
#include <allegro5/allegro_font.h>
#include <allegro5/allegro_primitives.h>

int main()
{
  if(!al_init())
  {
    printf("couldn't initialize allegro\n");
    return 1;
  }

  if(!al_install_keyboard())
  {
    printf("couldn't initialize keyboard\n");
    return 1;
  }

  if(!al_install_mouse())
  {
    printf("couldn't initialize mouse\n");
    return 1;
  }

  ALLEGRO_TIMER* timer = al_create_timer(1.0 / 30.0);
  if(!timer)
  {
    printf("couldn't initialize timer\n");
    return 1;
  }

  ALLEGRO_EVENT_QUEUE* queue = al_create_event_queue();
  if(!queue)
  {
    printf("couldn't initialize queue\n");
    return 1;
  }

  ALLEGRO_DISPLAY* disp = al_create_display(640, 480);
  if(!disp)
  {
    printf("couldn't initialize display\n");
    return 1;
  }

  ALLEGRO_FONT* font = al_create_builtin_font();
  if(!font)
  {
    printf("couldn't initialize font\n");
    return 1;
  }

  al_register_event_source(queue, al_get_keyboard_event_source());
  al_register_event_source(queue, al_get_display_event_source(disp));
  al_register_event_source(queue, al_get_timer_event_source(timer));
  al_register_event_source(queue, al_get_mouse_event_source());


  bool done = false;
  bool redraw = true;
  ALLEGRO_EVENT event;
  float text_x=10;
  float text_y=10;

  al_start_timer(timer);

  al_clear_to_color(al_map_rgb(0, 0, 0));
  al_draw_line(10, 10, 100, 120, al_map_rgb(255,255,255), 4.0);
  al_draw_filled_rectangle(100, 30, 150, 100, al_map_rgb(255,0,0));
  al_draw_filled_circle(125, 65, 20, al_map_rgb(0,255,0));
  al_flip_display();
  printf("In 5sek gehts weiter\n");
  al_rest(5.0);



  while(1)
  {
    al_wait_for_event(queue, &event);

    switch(event.type)
    {
      case ALLEGRO_EVENT_TIMER:
        //
        // game logic goes here.
        //
        redraw = true;
        break;

      case ALLEGRO_EVENT_KEY_CHAR:
        if(event.keyboard.keycode == ALLEGRO_KEY_UP)
          text_y-=2;
        if(event.keyboard.keycode == ALLEGRO_KEY_DOWN)
          text_y+=2;
        if(event.keyboard.keycode == ALLEGRO_KEY_LEFT)
          text_x-=2;
        if(event.keyboard.keycode == ALLEGRO_KEY_RIGHT)
          text_x+=2;
        if(event.keyboard.keycode == ALLEGRO_KEY_ESCAPE)
          done = true;
        redraw = true;
        break;


      case ALLEGRO_EVENT_MOUSE_AXES:
        break;

      case ALLEGRO_EVENT_MOUSE_BUTTON_DOWN:
        text_x = event.mouse.x;
        text_y = event.mouse.y;
        redraw = true;
        break;

      case ALLEGRO_EVENT_DISPLAY_CLOSE:
        done = true;
        break;
    }

    if(done)
      break;

    if(redraw && al_is_event_queue_empty(queue))
    {
      al_clear_to_color(al_map_rgb(0, 0, 0));
      al_draw_text(font, al_map_rgb(255, 255, 255), text_x, text_y, 0, "Click anywhere!");
      al_flip_display();
      redraw = false;
    }
  }

  al_destroy_font(font);
  al_destroy_display(disp);
  al_destroy_timer(timer);
  al_destroy_event_queue(queue);

  return 0;
}
```

