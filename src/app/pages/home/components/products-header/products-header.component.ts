import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-products-header",
  templateUrl: "./products-header.component.html",
  styleUrls: ["./products-header.component.css"],
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnCountChange = new EventEmitter<number>();
  sort = "desc";
  itemsShowCount: number = 12;
  constructor() {}

  ngOnInit(): void {}

  onSortUpdate(newSort: string): void {
    this.sort = newSort;
  }

  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
  }

  onColumnsUpdated(colsNum: number): void {
    this.columnCountChange.emit(colsNum);
  }
}
