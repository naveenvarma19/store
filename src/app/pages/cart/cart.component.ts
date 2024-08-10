import { Component, OnInit } from "@angular/core";
import { Cart } from "src/app/models/card.model";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  cart: Cart = { items: [] };
  constructor() {}

  ngOnInit(): void {}
}
