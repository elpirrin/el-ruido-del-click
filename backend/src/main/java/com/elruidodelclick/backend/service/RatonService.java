package com.elruidodelclick.backend.service;

import com.elruidodelclick.backend.entity.Raton;
import com.elruidodelclick.backend.repository.RatonRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RatonService {
    private final RatonRepository ratonRepository;

    public RatonService(RatonRepository ratonRepository) {
        this.ratonRepository = ratonRepository;
    }

    // Método para obtener todos los ratones
    public List<Raton> getAllMouse(){
        return ratonRepository.findAll();
    }
}