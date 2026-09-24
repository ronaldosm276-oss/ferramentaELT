import { Injectable } from '@angular/core';

export type TipoSistema = 'monofasico' | 'trifasico';

@Injectable({ providedIn: 'root' })
export class ConversorGrandezas {
  private readonly RAIZ_DE_TRES = Math.sqrt(3);

  calcularCorrente(
    potenciaKw: number,
    tensao: number,
    fatorPotencia: number,
    tipoSistema: TipoSistema
  ): number {
    if (potenciaKw <= 0 || tensao <= 0) {
      throw new Error('Potência e tensão devem ser maiores que zero.');
    }
    if (fatorPotencia <= 0 || fatorPotencia > 1) {
      throw new Error('Fator de potência deve estar entre 0 (exclusivo) e 1.');
    }

    const potenciaWatts = potenciaKw * 1000;

    return tipoSistema === 'monofasico'
      ? potenciaWatts / (tensao * fatorPotencia)
      : potenciaWatts / (this.RAIZ_DE_TRES * tensao * fatorPotencia);
  }
}