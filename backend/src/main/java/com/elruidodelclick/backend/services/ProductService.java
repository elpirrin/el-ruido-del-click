package com.elruidodelclick.backend.services;

import com.elruidodelclick.backend.model.Product;
import com.elruidodelclick.backend.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    public Product updateProduct(Long id, Product productDetails) {
        Product product = productRepository.findById(id).orElse(null);

        if (product != null) {
            product.setNombre(productDetails.getNombre());
            product.setPrecio(productDetails.getPrecio());
            product.setDescripcion(productDetails.getDescripcion());
            return productRepository.save(product);
        }

        return null;
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}