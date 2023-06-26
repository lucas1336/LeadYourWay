import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserModule } from 'src/app/models/user.module';
import { BicycleModule } from 'src/app/models/bicycle.module';
import { CardModule } from 'src/app/models/card.module';
import { UserService } from 'src/app/services/user.service';
import { BicycleService } from 'src/app/services/bicycle.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { forEach } from 'lodash';
import { RentService } from 'src/app/services/rent.service';
import { RentModule } from 'src/app/models/rent.module';

@Component({
  selector: 'app-product-purchase',
  templateUrl: './product-purchase.component.html',
  styleUrls: ['./product-purchase.component.scss'],
})
export class ProductPurchaseComponent {
  user!: UserModule;
  bicycle!: BicycleModule;
  cardArray: CardModule[] = [];
  rent!: RentModule;
  userId = '';
  bikeId = '';
  selectedCardId = 0;
  precioSubTotal = 0; ///////////////////////////////////////////////////
  precioSeguro = 0; ///////////////////////////////////////////////////
  totalCost = 0; ///////////////////////////////////////////////////
  checkedSeguro1 = false;
  checkedSeguro2 = false;
  checkedSeguro3 = false;
  toDate: string | null;
  fromDate: string | null;
  totalDays: number | undefined;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private userService: UserService,
    private bicycleService: BicycleService,
    private rentService: RentService
  ) {
    this.toDate = localStorage.getItem('toDate');
    this.fromDate = localStorage.getItem('fromDate');
    this.getNumberOfDays();
  }

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
        } else if (!oneCard) {
          this.cardArray.push(card);
          oneCard = true;
        }
      });
    });
  }

  getBike() {
    this.bicycleService.getItem(Number(this.bikeId)).subscribe((response: any) => {
      this.bicycle = response;
      this.getTotalCost();
    });
  }

  openDialog() {
    this.rent = {
      rentStartDate: this.fromDate || '',
      rentEndDate: this.toDate || '',
      rentPrice: this.totalCost || 0,
      bicycleId: Number(this.bikeId),
      cardId: this.selectedCardId,
    };
    confirm('¿Desea realizar la compra?');

    this.rentService.createItem(this.rent).subscribe(
      (response: any) => {
        const dialogRef: MatDialogRef<any> = this.dialog.open(DialogContentComponent, {
          data: 'Purchase Complete',
        });
        dialogRef.afterClosed().subscribe(() => {
          localStorage.removeItem('bicycleId');
          this.router.navigate(['/search']);
        });
      },
      (error: any) => {
        const dialogRef: MatDialogRef<any> = this.dialog.open(DialogContentComponent, {
          data: 'Purchase Failed',
        });
        dialogRef.afterClosed().subscribe(() => {
          this.router.navigate(['/search']);
        });
      }
    );
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
    this.totalCost = this.precioSubTotal + this.precioSeguro;
  }

  getNumberOfDays() {
    if (this.toDate && this.fromDate) {
      const date1 = new Date(this.toDate);
      const date2 = new Date(this.fromDate);
      const diffTime = Math.abs(date2.getTime() - date1.getTime());
      this.totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
  }

  getTotalCost() {
    if (this.totalDays && this.bicycle) {
      this.totalCost = this.totalDays * this.bicycle.bicyclePrice;
    }
    this.precioSubTotal = this.totalCost || 0;
  }

  cardSelectChange(id: number) {
    this.selectedCardId = id;
  }

  validateCard() {
    if (this.selectedCardId <= 0) {
      alert('Seleccione una tarjeta');
    } else {
      this.openDialog();
    }
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
