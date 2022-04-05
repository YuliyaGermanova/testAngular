import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'testProject';
  public importantVariable:boolean = true;

  public pressedTheButton()
  {
    if(this.importantVariable == true)
    {
      this.importantVariable = false;
    }
    else
    {
      this.importantVariable = true;
    }
  }
}
