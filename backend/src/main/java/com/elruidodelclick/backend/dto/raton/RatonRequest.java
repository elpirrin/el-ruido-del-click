package com.elruidodelclick.backend.dto.raton;

import lombok.Getter;
import lombok.Setter;
import java.math.BigDecimal;

@Getter
@Setter
public class RatonRequest {//para pasarle los datos al frontend y crear el ratón.
    private String nombre;
    private String descripcion;
    private BigDecimal precio;
    private Integer stock;
    private String imagenUrl;
    private Long marcaId;
    private Long categoriaId;
    private Boolean reacondicionado;
    private Integer dpi;
    private String sensor;
    private Boolean inalambrico;
}