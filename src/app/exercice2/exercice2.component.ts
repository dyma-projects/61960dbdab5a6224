import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-exercice2",
  templateUrl: "./exercice2.component.html",
  styleUrls: ["./exercice2.component.css"],
})
export class Exercice2Component implements OnInit {
  @ViewChild("myInput") public el: ElementRef<HTMLInputElement>;
  public valeur: string;

  constructor() {}

  ngOnInit() {}

  updateVal() {
    this.valeur = this.el.nativeElement.value;
  }
}
