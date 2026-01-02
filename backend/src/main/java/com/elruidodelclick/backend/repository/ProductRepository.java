package com.elruidodelclick.backend.repository;

import com.elruidodelclick.backend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    // Con JpaRepository ya tengo: findAll(), findById(), save(), delete(), etc.

}