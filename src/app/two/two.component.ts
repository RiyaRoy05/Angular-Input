import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrl: './two.component.scss'
})
export class TwoComponent implements OnInit{
@Input()count?:number;
constructor(){}
ngOnInit(): void {
    
}
}