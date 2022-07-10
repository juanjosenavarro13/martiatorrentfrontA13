export class enlaceModel {
  constructor(
    public id: number,
    public titulo: string,
    public url: string,
    public descargas: number,
    public idioma: string,
    public articulo_id: number,
    public created_at: string,
    public updated_at: string
  ) {}
}

export class masdescargado {
  constructor(
    public descargas: number,
    public titulo: string,
    public articulo_id: number,
    public updated_at: string,
    public created_at: string
  ) {}
}
