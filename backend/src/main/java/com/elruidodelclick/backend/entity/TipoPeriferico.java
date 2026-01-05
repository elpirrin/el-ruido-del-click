package com.elruidodelclick.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "tipo_periferico")
public class TipoPeriferico {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false,length = 50)
    private String nombre;
    protected TipoPeriferico(){

    }
}