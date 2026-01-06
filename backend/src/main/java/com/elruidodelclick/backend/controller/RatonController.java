package com.elruidodelclick.backend.controller;

import com.elruidodelclick.backend.entity.Raton;
import com.elruidodelclick.backend.service.RatonService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RatonController {
    private final RatonService ratonService;

    public RatonController(RatonService ratonService) {
        this.ratonService = ratonService;
    }

    // Endpoint para mostrar todos los ratones
    @GetMapping("/mouses")
    public List<Raton> getAllMousesController(){
        return ratonService.getAllMouse();
    }
}