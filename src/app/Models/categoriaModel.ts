export class categoriaModel {
  constructor(public id: number, public nombre: string) {}
}

export class subcategoriaModel {
  constructor(public id: number, public nombre: string, public id_categoria: number) {}
}
