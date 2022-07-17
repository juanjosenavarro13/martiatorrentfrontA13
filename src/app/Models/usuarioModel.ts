export class usuarioModel {
  constructor(
    public id: number,
    public nombre: string,
    public nick: string,
    public apellidos: string,
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

export class usuarioLoginModel {
  constructor(public status: string, public code: number, public msg: string, public usuario?: usuarioModel) {}
}
