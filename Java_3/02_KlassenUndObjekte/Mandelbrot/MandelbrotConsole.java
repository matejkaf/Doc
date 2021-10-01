package mandelbrotconsole;

public class MandelbrotConsole {

    public static void main(String[] args) {
        
        int steps_x=80;
        int steps_y=24;
        
        double start_x = -2;
        double start_y = 1.1;
        double end_x = 1.1;
        double end_y = -1.1;
        double step_x=(end_x-start_x)/steps_x;
        double step_y=(end_y-start_y)/steps_y;

        for (double y = start_y; y > end_y; y+=step_y) {
            for( double x = start_x; x < end_x; x+=step_x) {
                Complex c = new Complex(x,y);
                Complex z = new Complex(0,0);
                double r=0; // distance
                int cnt=100;
                while(cnt-- > 0 && r<2) {
                    z = z.times(z);
                    z = z.plus(c);
                    r = z.abs();
                }
                if(cnt==-1)
                    System.out.print("*");
                else if(cnt<75)
                    System.out.print("o");
                else if(cnt<90)
                    System.out.print(".");
                else
                    System.out.print(" ");
                        
            }
            System.out.println("");
        }
        
    }
    
}
