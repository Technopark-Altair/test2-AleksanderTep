import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-work-app';
  firstOperand: number;
  secondOperand: number;
  operator: string;
  result: number;
  errorMessage: string; 

  doCalc(){
    if (this.firstOperand !=null && this.secondOperand !=null && this.operator != null) { 
      if(this.operator == "||"){ 
        this.result = this.firstOperand || this.secondOperand; 
        this.errorMessage = "Нет ошибки";  
      }else if(this.operator == "&&"){ 
        this.result = this.firstOperand && this.secondOperand; 
        this.errorMessage = "Нет ошибки";         
      }
    }else{ 
      if(this.firstOperand == null){ 
        this.errorMessage = "нет первого операнда"; 
      }else if (this.secondOperand == null){ 
        this.errorMessage = "нет второго операнда"; 
      }else if(this.operator == null){ 
        this.errorMessage = "нет оператора действия";
      }
    }
  }
}
