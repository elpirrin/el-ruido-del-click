package com.elruidodelclick.backend.entity;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;


@Entity//esto le dice que representa la clase una tabla de la bd.
@Table(name = "producto")//opcional, si no lo pones, pone el nombre de la clase por defecto.
@Inheritance(strategy = InheritanceType.JOINED)//Herencia: Esta clase tiene hijas y cada una tiene su propia tabla
//es decir, el padre y los hijos comparten el mismo id.

public  abstract class Producto {//abstract significa que no se puede hacer new Producto(); Porque es solo para la bd.
    @Id//clave primaria
    @GeneratedValue(strategy = GenerationType.IDENTITY)//genera el id automáticamente
    private long id;
    @Column(nullable = false, length = 150)//no puede ser null y longitud de 150.
    private String nombre;
    @Column(columnDefinition = "TEXT")//este campo en bd es tipo text.
    private String descripcion;
    @Column(nullable = false, precision = 10, scale = 2)//precision: total de digitos, scale: decimales.
    private BigDecimal precio;
    @Column(nullable = false)
    private Integer stock;
    @Column(name = "imagen_url", length = 255)//este campo en bd se llama imagen_url
    private String imagenUrl;

    @ManyToOne//muchos productos una marca
    @JoinColumn(name = "marca_id", nullable = false)//unir con a tabla marca
    private Marca marca;
    @ManyToOne//muchos productos una categoria
    @JoinColumn(name = "categoria_id", nullable = false)//unir con a tabla categoria
    private Categoria categoria;
    @Column(name = "fecha_creacion")
    private LocalDateTime fechaCreacion;

    // Constructor vacío obligatorio para JPA
    protected Producto() {//protected permite herencia y evita que se use en otros lados.
    }
}