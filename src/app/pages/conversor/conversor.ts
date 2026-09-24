import { Component, inject, signal, computed } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ConversorGrandezas, TipoSistema } from '../../services/conversor-grandezas';

@Component({
  selector: 'app-conversor',
  imports: [DecimalPipe],
  templateUrl: './conversor.html',
})
export class ConversorComponent {
  private conversor = inject(ConversorGrandezas);

  potenciaKw = signal<number | null>(null);
  tensao = signal<number | null>(null);
  fatorPotencia = signal<number | null>(1);
  tipoSistema = signal<TipoSistema>('monofasico');

  resultado = computed<{ valor: number | null; erro: string | null } | null>(() => {
    const p = this.potenciaKw();
    const v = this.tensao();
    const fp = this.fatorPotencia();

    if (p == null || v == null || fp == null) {
      return null;
    }

    try {
      const valor = this.conversor.calcularCorrente(p, v, fp, this.tipoSistema());
      return { valor, erro: null };
    } catch (e) {
      return { valor: null, erro: (e as Error).message };
    }
  });

  toNumberOrNull(valor: string): number | null {
    return valor === '' ? null : Number(valor);
  }
}