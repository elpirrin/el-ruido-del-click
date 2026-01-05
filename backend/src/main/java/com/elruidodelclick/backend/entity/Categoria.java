package com.elruidodelclick.backend.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "categoria")
public class Categoria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String nombre;

    // Auto-relación para categorías hijas
    @ManyToOne
    @JoinColumn(name = "categoria_padre_id")
    private Categoria categoriaPadre;//componente

    @OneToMany(mappedBy = "categoriaPadre")//Indica que el propietario de la relación es el campo categoriaPadre del hijo
    private List<Categoria> subCategorias;//ram, cpu...

    protected Categoria() {
    }
}
