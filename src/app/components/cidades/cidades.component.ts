import { Component, OnInit } from '@angular/core';
import { CidadeService, Cidade } from '../../services/cidade.service';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.css']
})
export class CidadesComponent implements OnInit {
  cidades: Cidade[] = [];
  cidadeForm: Cidade = {
    nome: '',
    estado: '',
    populacao: 0,
    capital: false,
    clima: ''
  };
  cidadeSelecionada: Cidade | null = null;

  constructor(private cidadeService: CidadeService) {}

  ngOnInit(): void {
    this.listarCidades();
  }

  listarCidades(): void {
    this.cidadeService.getCidades().subscribe((cidades) => {
      this.cidades = cidades;
    });
  }

  salvarCidade(): void {
    if (this.cidadeSelecionada) {

      this.cidadeService.updateCidade(this.cidadeSelecionada.id!, this.cidadeForm).subscribe(() => {
        this.listarCidades();
        this.resetarFormulario();
      });
    } else {

      this.cidadeService.addCidade(this.cidadeForm).subscribe(() => {
        this.listarCidades();
        this.resetarFormulario();
      });
    }
  }

  editarCidade(cidade: Cidade): void {
    this.cidadeSelecionada = cidade;
    this.cidadeForm = { ...cidade };
  }

  removerCidade(id: number | undefined): void {
    if (id) {
      this.cidadeService.deleteCidade(id).subscribe(() => {
        this.listarCidades();
      });
    }
  }

  resetarFormulario(): void {
    this.cidadeSelecionada = null;
    this.cidadeForm = {
      nome: '',
      estado: '',
      populacao: 0,
      capital: false,
      clima: ''
    };
  }
}
