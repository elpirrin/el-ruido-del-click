package com.elruidodelclick.backend.repository;

import com.elruidodelclick.backend.entity.Raton;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RatonRepository extends JpaRepository<Raton, Long> {//JpaRepository<Raton, Long> → trabajamos con entidad Raton y su PK es Long
    // JpaRepository ya nos da findAll(), findById(), save(), delete(), etc.
}