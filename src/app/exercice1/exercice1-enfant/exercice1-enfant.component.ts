import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() compteur = 0;
  @Output() buttonEvent = new EventEmitter<number>();

  constructor() {}
  ngOnInit() {}

  onClickButton(value: number) {
    this.buttonEvent.emit(value);
    console.log(this.buttonEvent);
  }
}
