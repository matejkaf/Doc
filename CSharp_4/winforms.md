# Windows Forms

Erste Schritte in Visual Studio 2019

- Create a new project

- Windows Forms App (.NET Framework) >> Next >> Create

  - .NET Core unterstützt noch keinen Designer (müsste man nachinstallieren)

- Siehe Fenster 

  - `Form1.cs`,
  - `Form1.cs [Design]` und 
  - `Form1.Designer.cs`

- Im Form Designer

  - Toolbox (links) öffnen

  - Common Controls

  - Label, drag-and-drop

  - Click auf Label, Properties (rechts unten)

  - Doppelclick erzeugt einen Event Handler

    ```csharp
    private void label1_Click(object sender, EventArgs e)
    {
        Console.WriteLine("click");
    }
    ```

  - Menü View>>Output, zum öffnen der Konsole

  - Siehe automatisch generierten Code in `Form1.Designer.cs`

    ```csharp
    private void InitializeComponent()
    {
        this.label1 = new System.Windows.Forms.Label();	
        // ...
        this.label1.AutoSize = true;
        this.label1.Location = new System.Drawing.Point(35, 38);
        this.label1.Name = "label1";
        this.label1.Size = new System.Drawing.Size(70, 25);
        this.label1.TabIndex = 0;
        this.label1.Text = "label1";
        this.label1.Click += new System.EventHandler(this.label1_Click);
    	//...
    }
    //...
    private System.Windows.Forms.Label label1;
    ```

  - Form Designer, Label Properties>>Data Bindings>>Name ändern

  - Experiment, Datentyp von sender feststellen, Text Ändern

    ```csharp
    private void label1_Click(object sender, EventArgs e)
    {
        Console.WriteLine("click");
        Console.WriteLine(sender.GetType());
        Label myLabel = sender as Label;
        myLabel.Text = "I was clicked";
    }
    ```

    

  - Form Designer, Button aus Toolbox

    - Name auf `myButton`

    - Text auf `Klick mich`, Button Größe anpassen

    - Im Properties Editor auf Events umschalten (Blitz)

    - Doppelclick auf den Event Namen erzeugt einen Event Handler

    - [MouseEventArg](https://docs.microsoft.com/en-us/dotnet/api/system.windows.forms.mouseeventargs?view=netframework-4.8), Koordinaten sind Objekt-Relativ

      ```csharp
      private void myButton_Click(object sender, EventArgs e)
      {
          Console.WriteLine(e);//MouseEventArgs
          MouseEventArgs args = e as MouseEventArgs;
          Console.WriteLine($"{args.X}:{args.Y}");
      }
      ```

  - Form Designer, TextBox aus Toolbox

    ```csharp
    string txt = this.textBox1.Text;
    Console.WriteLine(txt);
    ```

  - Message Box ausgeben

    ```csharp
    MessageBox.Show(this.textBox1.Text, "Eingabe", MessageBoxButtons.OK, MessageBoxIcon.Warning);
    
    ```

  - Status Strip + StatusLabel (aus dem Drop Down Menü direkt am Element auswählen). Property `Text`. Z.B. Für Fehlermeldungen.

  



Aufgabe(n):

- 2 Zahlen auf Button Klick addieren

- Bei jeder Änderung der TextBoxen addieren (live) (`TextChanged` Event).
- Fehlerbehandlung wenn keine Zahl eingegeben wurde (`TryParse` verwenden)
  - MessageBox
  - Status Strip + StatusLabel



# Zeichnen in der Form

- Ein `Panel` Element anlegen (`GamePanel`) in das man hineinzeichnet (geht prinzipiell überall, aber zur besseren Trennung).

- Paint Event Handler beim Panel anlegen, Linien zeichnen

  ```csharp
  private void GamePanel_Paint(object sender, PaintEventArgs e)
  {
      Console.WriteLine("Paint");
      Graphics g = e.Graphics;
      Pen pen = new Pen(Color.Blue);
      Panel panel = sender as Panel;
      g.DrawLine(pen, 0, 0, panel.Width, panel.Height);
      g.DrawLine(pen, 0, panel.Height, panel.Width, 0);
      pen.Dispose();
      g.Dispose();
  }
  ```

- Kreis bei Maus-Klick zeichnen


  ```csharp
          private void GamePanel_MouseDown(object sender, MouseEventArgs e)
          {
              Console.WriteLine("Panel Mouse Down");
              Graphics g = this.GamePanel.CreateGraphics();
              SolidBrush circleBrush = new SolidBrush(Color.Red);
              g.FillEllipse(circleBrush, e.X-20, e.Y-20, 40, 40);
              circleBrush.Dispose();
              g.Dispose();
          }
  
  ```

- Create `Graphics` Object

  ```csharp
  Graphics g = this.GamePanel.CreateGraphics();
  ```

- Repaint panel

  ```csharp
  this.GamePanel.Refresh();
  ```