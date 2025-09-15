﻿using System;
using System.Collections.Generic;

namespace DL;

public partial class VwusuarioGetAll
{
    public int IdUsuario { get; set; }

    public string UserName { get; set; } = null!;

    public string NombreUsuario { get; set; } = null!;

    public string ApellidoPaterno { get; set; } = null!;

    public string ApellidoMaterno { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string Sexo { get; set; } = null!;

    public string Telefono { get; set; } = null!;

    public string? Celular { get; set; }

    public DateOnly? FechaNacimiento { get; set; }

    public string? Curp { get; set; }

    public int? IdRol { get; set; }

    public string? NombreRol { get; set; }
}
