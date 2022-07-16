export class enlaceModel {
  constructor(
    public id: number,
    public titulo: string,
    public url: string,
    public descargas: number,
    public idioma: string,
    public id_articulo: number,
    public created_at: string,
    public updated_at: string
  ) {}
}

export class masdescargado {
  constructor(
    public descargas: number,
    public titulo: string,
    public id_articulo: number,
    public updated_at: string,
    public created_at: string
  ) {}
}
