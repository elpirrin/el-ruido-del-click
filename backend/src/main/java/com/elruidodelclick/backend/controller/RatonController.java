package com.elruidodelclick.backend.controller;

import com.elruidodelclick.backend.dto.raton.RatonRequest;
import com.elruidodelclick.backend.dto.raton.RatonResponse;
import com.elruidodelclick.backend.entity.Raton;
import com.elruidodelclick.backend.service.RatonService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/mouses")
public class RatonController {
    private final RatonService ratonService;

    public RatonController(RatonService ratonService) {
        this.ratonService = ratonService;
    }

    // POST para crear un ratón
    @PostMapping
    public RatonResponse createMouse(@RequestBody RatonRequest request){
        return ratonService.createMouse(request);
    }
    // Endpoint para mostrar todos los ratones
    @GetMapping
    public List<RatonResponse> getAllMouses(){
        return ratonService.getAllMouses();
    }
}