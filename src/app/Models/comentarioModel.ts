export class comentarioModel {
  constructor(public comentarios: comentarios[], public total: number) {}
}

export class comentarios {
  constructor(
    public id: number,
    public contenido: string,
    public nick_usuario: string,
    public id_articulo: number,
    public id_usuario: number,
    public created_at: string,
    public updated_at: string
  ) {}
}
