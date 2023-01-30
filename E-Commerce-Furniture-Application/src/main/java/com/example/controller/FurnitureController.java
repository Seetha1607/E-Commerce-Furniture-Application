/*
 *Author Name : Seetha Lakshmi.G.M
 *Date : 12-12-2022
 *Created With : IntelliJ IDEA Community Edition
 */


package com.example.controller;

import com.example.domain.Furniture;
import com.example.exception.CustomerExistsAlready;
import com.example.exception.CustomerNotFound;
import com.example.services.IFurnitureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class FurnitureController {
    private IFurnitureService iFurnitureService;

    @Autowired
    public FurnitureController(IFurnitureService iFurnitureService) {
        this.iFurnitureService = iFurnitureService;
    }

    @PostMapping("/saveFurniture")
    public ResponseEntity<?> saveFurniture(@RequestBody Furniture furniture)throws CustomerExistsAlready {
        try {
            iFurnitureService.saveFurniture(furniture);
            return new ResponseEntity<>("Successfully added a new User", HttpStatus.CREATED);
        } catch (CustomerExistsAlready e) {
            throw new RuntimeException(e);
        } catch (Exception exception) {
            return new ResponseEntity<>("Server Error!!!try after Sometime", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/fetchAll")
    public ResponseEntity<?> fetchAllFurniture() {
        return new ResponseEntity<>(iFurnitureService.fetchAllFurniture(), HttpStatus.OK);
    }

    @DeleteMapping("/deleteById/{furnitureCode}")
    public ResponseEntity<?> deleteFurnitureById(@PathVariable int furnitureCode) {
        try {
            return new ResponseEntity<>(iFurnitureService.deleteFurniture(furnitureCode), HttpStatus.ACCEPTED);
        } catch (CustomerNotFound e) {
            throw new RuntimeException(e);
        } catch (Exception e) {
            return new ResponseEntity<>("Server Error!!!try after Sometime", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/updateUser/{furnitureCode}")
    public ResponseEntity<?> updateVehicle(@RequestBody Furniture furniture, @PathVariable int furnitureCode)  {
        return new ResponseEntity<>(iFurnitureService.updateFurnitureDetails(furniture,furnitureCode), HttpStatus.ACCEPTED);
    }

    @GetMapping("/fetchById/{furnitureCode}")
    public ResponseEntity<?> fetchFurnitureById(@PathVariable int furnitureCode) {
        iFurnitureService.fetchFurnitureById(furnitureCode);
        return new ResponseEntity<>("The requested user details is retrieved.", HttpStatus.OK);
    }

    @GetMapping("/getByUserNameAndPassword")
    public ResponseEntity<?> getByEmailAndPassword(@RequestBody Furniture furniture) {
        return new ResponseEntity<>(iFurnitureService.getByEmailAndPassword(furniture.getEmail(), furniture.getPassword()), HttpStatus.OK);
    }
}
