package com.elruidodelclick.backend.service;

import com.elruidodelclick.backend.dto.raton.RatonRequest;
import com.elruidodelclick.backend.dto.raton.RatonResponse;
import com.elruidodelclick.backend.entity.Raton;
import com.elruidodelclick.backend.repository.CategoriaRepository;
import com.elruidodelclick.backend.repository.MarcaRepository;
import com.elruidodelclick.backend.repository.RatonRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RatonService {
    private final RatonRepository ratonRepository;
    private final MarcaRepository marcaRepository;
    private final CategoriaRepository categoriaRepository;

    public RatonService(RatonRepository ratonRepository, MarcaRepository marcaRepository, CategoriaRepository categoriaRepository) {
        this.ratonRepository = ratonRepository;
        this.marcaRepository = marcaRepository;
        this.categoriaRepository = categoriaRepository;
    }

    public RatonResponse createMouse(RatonRequest request){
        Raton raton = new Raton();
        raton.setNombre(request.getNombre());
        raton.setDescripcion(request.getDescripcion());
        raton.setPrecio(request.getPrecio());
        raton.setStock(request.getStock());
        raton.setImagenUrl(request.getImagenUrl());
        raton.setReacondicionado(request.getReacondicionado());
        raton.setDpi(request.getDpi());
        raton.setSensor(request.getSensor());
        raton.setInalambrico(request.getInalambrico());

        // Relaciones
        raton.setMarca(marcaRepository.findById(request.getMarcaId()).orElseThrow());
        raton.setCategoria(categoriaRepository.findById(request.getCategoriaId()).orElseThrow());
        ratonRepository.save(raton);//crear el ratón

        //devolver al frontend.
        RatonResponse response = new RatonResponse();
        response.setId(raton.getId());
        response.setNombre(raton.getNombre());
        response.setDpi(raton.getDpi());
        response.setSensor(raton.getSensor());
        response.setInalambrico(raton.getInalambrico());
        response.setMarcaId(raton.getMarca().getId());
        response.setCategoriaId(raton.getCategoria().getId());
        return response;
    }
    // Método para obtener todos los ratones
    public List<RatonResponse> getAllMouses(){
        return ratonRepository.findAll().stream()
                .map(r -> {
                    RatonResponse resp = new RatonResponse();
                    resp.setId(r.getId());
                    resp.setNombre(r.getNombre());
                    resp.setDpi(r.getDpi());
                    resp.setSensor(r.getSensor());
                    resp.setInalambrico(r.getInalambrico());
                    resp.setMarcaId(r.getMarca().getId());
                    resp.setCategoriaId(r.getCategoria().getId());
                    return resp;
                }).toList();
    }
}