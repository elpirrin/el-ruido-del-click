package com.elruidodelclick.backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "raton")
public class Raton extends Periferico{

    @Column(nullable = false)
    private Integer dpi;
    @Column(nullable = false, length = 50)
    private String sensor;

    @Column(nullable = false)
    private Boolean inalambrico;
    public Raton() {
    }
}