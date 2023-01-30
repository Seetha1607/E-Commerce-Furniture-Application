package com.example.repository;

import com.example.domain.Furniture;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FurnitureRepository extends MongoRepository<Furniture,Integer> {
    Furniture findByEmailAndPassword(String email, String password);
}
