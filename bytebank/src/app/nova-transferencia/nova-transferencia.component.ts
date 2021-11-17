import { Transferencia } from './../dados/models/transferencia';
import { TransferenciaService } from './../service/transferencia.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output()
  aoTransferir = new EventEmitter<any>();

  valor!: Number;
  destino!: String;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    console.log('Nova transferência');
    const emitirValor: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    this.service.adicionar(emitirValor).subscribe((resultado) => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato')
    }, (error) => console.error(error)),
    this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = '';
  }
}
