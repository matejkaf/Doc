---
title: The Chaos Game
subtitle: Lösung
tags: [solution]
---

# Variante 1

```java
/*
   * To change this template, choose Tools | Templates
   * and open the template in the editor.
   */
package chaosgame;

import java.awt.*;
import java.awt.event.*;

public class MyWindow extends Frame {

  public MyWindow() {
    super("Mein erstes Fenster");
    addWindowListener(new WindowAdapter() {

      public void windowClosing(WindowEvent e) {
        dispose();
        System.exit(0);
      }
    });
    setBackground(Color.white);
    setSize(1000/*Breite*/, 1000/*Hoehe*/);
    setVisible(true);
  }

  final static int width=800;
  int ax=50;
  int ay=width+50;
  int bx=ax+width;
  int by=ay;
  int cx=ax+width/2;
  int cy=ay-(int)(width*Math.sqrt(3.0)/2.0);

  int x=cx;
  int y=cy+width/2;

  public void paint(Graphics g) {

    //g.drawLine(ax, ay, bx, by);
    //g.drawLine(bx, by, cx, cy);
    //g.drawLine(cx, cy, ax, ay);

    for(int i=0;i<200000;i++) {
      nextPoint();
      if(i>10) {
        g.drawLine(x, y, x, y);
      }
    }
  }

  private void nextPoint() {
    int n;
    n=(int)(Math.random()*3);
    int px=0;
    int py=0;
    switch(n) {
      case 0:
        px=ax;
        py=ay;
        break;
      case 1:
        px=bx;
        py=by;
        break;
      case 2:
        px=cx;
        py=cy;
        break;
    }
    x=(px+x)/2;
    y=(py+y)/2;
  }
}

```

# Variante 2

```java

package chaosgame;

public class Main {

    public static void main(String[] args) {

        int[] vertices={ 3      , 4      , 5      , 6       };
        double[] step= { 1.0/2.0, 1.0/3.0, 5.0/8.0, 2.0/3.0 };

        int n=3;
        
        new MyWindow(vertices[n],step[n]);
    }

}
```



```java
package chaosgame;

import java.awt.*;
import java.awt.event.*;

public class MyWindow extends Frame {

    static final double radius=400.0;
    double[] cornerX;
    double[] cornerY;

    double x;
    double y;

    double fraction;
    int windowWidth;
    int windowHeight;
    int vertices;

    public MyWindow(int vertices,double fraction) {
        super("Sierpinski");
        addWindowListener(new WindowAdapter() {

            public void windowClosing(WindowEvent e) {
                dispose();
                System.exit(0);
            }
        });
        setBackground(Color.white);
        windowWidth=(int)(radius*1.1*2.0);
        windowHeight=windowWidth;
        setSize(windowWidth, windowHeight);

        //
        // calculate values
        this.vertices=vertices;
        this.fraction=fraction;
        cornerX=new double[vertices];
        cornerY=new double[vertices];

        double centerX=windowWidth/2;
        double centerY=windowHeight/2+20;

        x=centerX;
        y=centerY;

        double phi=(2.0*Math.PI/vertices);
        double start=(3.0*Math.PI/2.0)-phi/2.0;

        for(int i=0;i<cornerX.length;i++) {
            cornerX[i]=(int)(Math.cos(start)*radius+centerX);
            cornerY[i]=(int)(-Math.sin(start)*radius+centerY);
            System.out.println("x="+cornerX[i]+" y="+cornerY[i]);
            start+=phi;
        }


        // show window
        setVisible(true);
    }

    public void paint(Graphics g) {

        for(int i=0;i<cornerX.length;i++) {
            int i2;
            if(i==cornerX.length-1)
                i2=0;
            else
                i2=i+1;
            g.drawLine((int)cornerX[i], (int)cornerY[i], (int)cornerX[i2], (int)cornerY[i2]);
        }


        for(int i=0;i<200000;i++) {
            nextPoint();
            if(i>10) {
                g.drawLine((int)x, (int)y, (int)x, (int)y);
            }
        }
    }

    private void nextPoint() {
        int n;
        n=(int)(Math.random()*vertices);

        x = x + (cornerX[n]-x)*fraction;
        y = y + (cornerY[n]-y)*fraction;
    }
}
```

#  Variante 3

```c++
#include <stdio.h>
#include <conio.h>
#include <time.h>
#include <math.h>
#include "graphics.h"

struct Point {
	int x;
	int y;
};

void main()
{
	int window;
	int x;
	int y;
	int draw=0;


	srand(time(NULL));

	window = initwindow(getmaxwidth( ), getmaxheight( ), "Grafiktest");
	setcurrentwindow(window);

	////////////////////////////////////////////////

	const int ecken=4;
	Point mitte = {getmaxx()/2,getmaxy()/2};
	double r = getmaxy()*0.45;
	Point ecke[ecken];
	for(int i=0; i<ecken; i++)
	{
		double phi = i* 2.0*3.145926535 / ecken;
		ecke[i].x=mitte.x+r*cos(phi);
		ecke[i].y=mitte.y+r*sin(phi);
	}


	/*
	int ytop=40;
	int h=(getmaxy()-ytop)*0.8;
	int ah = h/sqrt(5.0);;
	Point ecke[3] = {
		{getmaxx()/2,ytop},
		{getmaxx()/2-ah,ytop+h},
		{getmaxx()/2+ah,ytop+h},
	};*/

	floodfill(20,20,WHITE);

	putpixel( mitte.x, mitte.y, WHITE );
	for(int i=0; i<ecken; i++)
	{
		putpixel( ecke[i].x, ecke[i].y, WHITE );
	}

	Point p = mitte;
	double k=0.3;
	for(int i=0; i<1000000; i++)
	{
		putpixel( p.x, p.y, rand()%MAXCOLORS );
		int n=rand()%ecken;
		p.x = (1-k)*ecke[n].x + k*p.x;
		p.y = (1-k)*ecke[n].y + k*p.y;
	}



	//arc(100,100,0,90,50);

	//bar3d(50,150,150,180,10,0);

	//circle(300,300,10);

	//setfillstyle(1,GREEN);
	//floodfill(20,20,LIGHTRED);

	//settextstyle(4, HORIZ_DIR, 3);
	//outtextxy(100,100,"Hallo");
	
	//readimagefile("D:\\temp\\Grafiktest\\bild.bmp", 550, 100, 550 + 512, 10 + 512);

/*
	while(1)
	{
		x=mousex();
		y=mousey();
		if(draw)
			lineto(x,y);
		if(ismouseclick(WM_LBUTTONDOWN))
		{
			clearmouseclick(WM_LBUTTONDOWN);
			draw=1;
			moveto(mousex(),mousey());
		}
		if(ismouseclick(WM_LBUTTONUP))
		{
			clearmouseclick(WM_LBUTTONUP);
			draw=0;
		}
		if(ismouseclick(WM_LBUTTONDBLCLK))
		{
			delay(50);
			getmouseclick(WM_LBUTTONDBLCLK, x, y);
			printf("Double Click\n");
		}
	}

*/
	getch();
}
```

