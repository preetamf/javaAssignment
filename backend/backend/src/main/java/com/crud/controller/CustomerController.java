package com.crud.controller;

import com.crud.model.Customer;
import com.crud.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class CustomerController {

    @Autowired
    CustomerService customerService;
   // LoginRepository loginRepository;


//    @PostMapping("/login")
//    public Customer.User login(@RequestBody Customer.User user){
//        Customer.User user1 = loginRepository.findByUserId(user.getUid());
//        if(user1.getPass().equals(user.getPass()))
//            return user;
//        return user;
//    }

    @PostMapping("/add")
    public String add(@RequestBody Customer customer){
        customerService.add(customer);
        return "Customer Added Successfully...";
    }

    @GetMapping("/customers")
    public List<Customer> getCustomer(){
        System.out.println("Customers..");
        return customerService.getCustomer();
    }

    @GetMapping("/customer/{id}")
    public Customer getUserById(@PathVariable("id") int id){
        return customerService.getByid(id);
    }

    @PutMapping("/update/{id}")
    public String update(@PathVariable("id") int id, @RequestBody Customer customer){
        customerService.updateCustomer(id, customer);
        return "User Updated Successfully...";
    }

    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable("id") int id){
        customerService.deleteCustomer(id);
        return "User Deleted Successfully...";
    }

}

