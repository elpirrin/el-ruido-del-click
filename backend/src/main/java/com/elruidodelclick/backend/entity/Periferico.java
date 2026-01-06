package com.elruidodelclick.backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "periferico")
public class Periferico  extends Producto{

    @ManyToOne
    @JoinColumn(name = "tipo_periferico_id", nullable = false)
    private TipoPeriferico tipoPeriferico;
    protected Periferico(){

    }
}