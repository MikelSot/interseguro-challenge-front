export interface Matrix {
  matrix : number[][]
}

export interface MatrixData {
  q: number[][]
  r: number[][]
  result_Q: Result
  result_R: Result
}

export interface Result {
  valor_maximo: number
  valor_minimo: number
  promedio: number
  suma_total: number
  matriz_diagonal: number
}
