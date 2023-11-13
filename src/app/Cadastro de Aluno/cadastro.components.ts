import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './index.html',
  styleUrls: ['./style.css'],
})
export class CadastroAlunoComponent {
  nome;
  email;
  ra;
  cel;
  erroPreenchimento = false;
  mostrarDados = false;

  verificarPreenchimento() {
    if (!this.nome || !this.email || !this.ra || !this.cel) {
      this.erroPreenchimento = true;
      this.mostrarDados = false;
    } else {
      this.erroPreenchimento = false;
      this.mostrarDados = true;
    }
  }
}
