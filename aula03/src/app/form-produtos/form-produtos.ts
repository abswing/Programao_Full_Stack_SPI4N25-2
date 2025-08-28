import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-produtos',
  imports: [FormsModule, JsonPipe],
  templateUrl: './form-produtos.html',
  styleUrl: './form-produtos.css'
})
export class FormProdutos {
  produto: any = {id: 0, nome:"", preco:0};
  listProdutos: any[] = [];

  cadastrarProduto(){ 
    this.listProdutos.push(this.produto);
    alert("Produto cadastrado com sucesso!")
    this.produto = {id: 0, nome:"", preco:0};
  }

}
