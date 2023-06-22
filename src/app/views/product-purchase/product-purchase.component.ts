import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserModule } from 'src/app/models/user/user.module';
import { BicycleModule } from 'src/app/models/bicycle-model.model';
import { CardModule } from 'src/app/models/card.module';
import { UserService } from 'src/app/services/user.service';
import { BicycleService } from 'src/app/services/bicycle.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { forEach } from 'lodash';

@Component({
  selector: 'app-product-purchase',
  templateUrl: './product-purchase.component.html',
  styleUrls: ['./product-purchase.component.scss'],
})
export class ProductPurchaseComponent {
  user!: UserModule;
  bicycle!: BicycleModule;
  cardArray: CardModule[] = [];
  userId = '';
  bikeId = '';
  precioSubTotal = 0;
  precioSeguro = 0;
  checkedSeguro1 = false;
  checkedSeguro2 = false;
  checkedSeguro3 = false;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private userService: UserService,
    private bicycleService: BicycleService
  ) {}

  ngOnInit(): void {
    this.userId = localStorage.getItem('id') || '';
    this.bikeId = localStorage.getItem('bicycleId') || '';
    this.getUser();
    this.getBike();
  }

  getUser() {
    this.userService.getItem(this.userId).subscribe((response: any) => {
      this.user = response;
      var mainFound = false;
      var oneCard = false;
      forEach(this.user.cards, (card) => {
        if (card.cardMain) {
          mainFound = true;
          this.cardArray.push(card);
        }
        if (!mainFound || !oneCard) {
          this.cardArray.push(card);
          oneCard = true;
        }
      });
      console.log(this.cardArray);
    });
  }

  getBike() {
    this.bicycleService.getItem(Number(this.bikeId)).subscribe((response: any) => {
      this.bicycle = response;
      this.precioSubTotal = this.bicycle.bicyclePrice;
    });
  }

  openDialog() {
    const dialogRef: MatDialogRef<any> = this.dialog.open(DialogContentComponent, {
      data: 'Purchase Complete',
    });

    dialogRef.afterClosed().subscribe(() => {
      localStorage.removeItem('bicycleId');
      this.router.navigate(['/search']);
    });
  }

  formatCardNumber(cardNumber: string) {
    return cardNumber.substring(12, 16);
  }

  formatCardExpiry(expiryDate: Date) {
    const date = String(expiryDate);
    const [year, month] = date.split('-');
    return `${month}/${year.slice(2, 4)}`;
  }

  updateCheckedCard(id: number) {
    switch (id) {
      case 1:
        this.checkedSeguro1 = !this.checkedSeguro1;
        break;
      case 2:
        this.checkedSeguro2 = !this.checkedSeguro2;
        break;
      case 3:
        this.checkedSeguro3 = !this.checkedSeguro3;
        break;
    }
    this.updatePrecioSeguro();
  }

  updatePrecioSeguro() {
    var price = 0;
    if (this.checkedSeguro1) {
      price += 19;
    }
    if (this.checkedSeguro2) {
      price += 29;
    }
    if (this.checkedSeguro3) {
      price += 39;
    }
    this.precioSeguro = price;
    console.log(this.checkedSeguro1);
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
      Pedido Exitoso
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
