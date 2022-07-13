export class usuarioModel {
  constructor(
    public id: number,
    public nombre: string,
    public apellido: string,
    public email: string,
    public password: string,
    public rol: string,
    public created_at: string,
    public updated_at: string
  ) {}
}

export class usuarioRegistroModel {
  constructor(
    public status: string,
    public code: number,
    public msg: string,
    public msgError?: any,
    public usuario?: usuarioModel
  ) {}
}
