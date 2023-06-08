import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-purchase',
  templateUrl: './product-purchase.component.html',
  styleUrls: ['./product-purchase.component.scss'],
})
export class ProductPurchaseComponent {
  constructor(private router: Router, public dialog: MatDialog) {}

  openDialog() {
    const dialogRef: MatDialogRef<any> = this.dialog.open(DialogContentComponent, {
      data: 'Purchase Complete',
    });

    dialogRef.afterClosed().subscribe(() => {
      localStorage.removeItem('bicycleId');
      this.router.navigate(['/search']);
    });
  }
}

@Component({
  selector: 'app-dialog-content',
  template: `
    <h2
      mat-dialog-title
      style="
      display: block;
      margin: 20px auto;
      text-align: center;
      "
    >
      Dialog
    </h2>
    <p
      style="
      display: block;
      margin: 20px;
      text-align: center;
      "
    >
      Su pedido re realizo con exito
    </p>
    <button
      class="btn btn-primary"
      style="
      display: block;
      margin: 20px auto;
      text-align: center;
      "
      (click)="closeDialog()"
    >
      Close
    </button>
  `,
})
export class DialogContentComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
