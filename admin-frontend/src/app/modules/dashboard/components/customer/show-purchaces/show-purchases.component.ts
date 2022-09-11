import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {Product} from "#modules/dashboard/components/product/product.model";

@Component({
  selector: 'app-show-purchaces',
  templateUrl: './show-purchases.component.html',
  styleUrls: ['./show-purchases.component.scss']
})
export class ShowPurchasesComponent implements OnInit {

  constructor(
    private readonly dialogRef: MatBottomSheetRef<ShowPurchasesComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public readonly products: Product[]
  ) { }

  ngOnInit(): void {
    console.log(this.products)
  }

}
