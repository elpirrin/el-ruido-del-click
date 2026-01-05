package com.elruidodelclick.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "periferico")
public class Periferico  extends Producto{

    @ManyToOne
    @JoinColumn(name = "tipo_periferico_id", nullable = false)
    private TipoPeriferico tipoPeriferico;
    protected Periferico(){

    }
}