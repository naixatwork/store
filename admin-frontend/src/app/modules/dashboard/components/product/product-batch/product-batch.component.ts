import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProductService} from "#modules/dashboard/components/product/product.service";
import {Product} from '../product.model';
import {first, Observable} from "rxjs";
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material/bottom-sheet";

@Component({
  selector: 'app-product-batch',
  templateUrl: './product-batch.component.html',
  styleUrls: ['./product-batch.component.scss']
})
export class ProductBatchComponent implements OnInit {
  public form!: FormGroup;
  public isUpdate: boolean;

  constructor(
    private readonly productService: ProductService,
    private readonly formBuilder: FormBuilder,
    private readonly dialogRef: MatBottomSheetRef<ProductBatchComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public readonly data: Product
  ) {
    this.isUpdate = !!data;
  }

  ngOnInit(): void {
    this.initializeForm();
    this.patchFormsData();
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      'name': ['', Validators.required],
      'description': ['', Validators.required],
      'price': [null, Validators.required],
      'imageUrl': ['', Validators.required],
    })
  }

  private patchFormsData(): void {
    if (!this.isUpdate) return;
    this.form.patchValue(this.data);
  }

  public batchProduct(): void {
    if (this.form.invalid) return;
    const batchProduct = this.isUpdate ? this.updateProduct() : this.createProduct();
    batchProduct.subscribe(() => {
      this.closeDialog();
    })
  }

  public createProduct(): Observable<Product> {
    return this.productService.create(this.form.value).pipe(first());
  }

  public updateProduct(): Observable<Product> {
    return this.productService.update({
      id: this.data.id,
      ...this.form.value
    }).pipe(first());
  }

  public closeDialog(): void {
    this.dialogRef.dismiss();
  }

}
