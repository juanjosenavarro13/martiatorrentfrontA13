export class articuloModel {
  constructor(
    public id: number,
    public titulo: string,
    public descripcion: string,
    public imagen: string,
    public url: string,
    public contenido: string,
    public categoria: string,
    public created_at: string,
    public updated_at: string,
    public id_categoria: number,
    public id_subcategoria: number,
    public subcategorias?: subcategoriasModel[],
    public subcategoria?: string
  ) {}
}

export class subcategoriasModel {
  constructor(public id: number, public nombre: string, public created_at: string, public updated_at: string) {}
}

export class articuloPaginateModel {
  constructor(
    public current_page: number,
    public data: articuloModel[],
    public first_page_url: string,
    public from: number,
    public last_page: number,
    public last_page_url: string,
    public next_page_url: string,
    public path: string,
    public per_page: number,
    public prev_page_url: string,
    public to: number,
    public total: number
  ) {}
}
