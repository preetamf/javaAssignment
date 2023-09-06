package com.crud.service;


import com.crud.model.Customer;
import com.crud.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements  CustomerService {

    @Autowired
    private  CustomerRepository customerRepository;


    @Override
    public Customer add(Customer customer) {
        return customerRepository.save(customer);
    }

    @Override
    public List<Customer> getCustomer() {
        return (List<Customer>) customerRepository.findAll();
    }

    @Override
    public Customer getByid(int id) {
        return customerRepository.findById(id).get();
    }

    @Override
    public Customer updateCustomer(int id, Customer customer) {

        Customer customer1 = customerRepository.findById(id).get();
        customer1.setFirstName(customer.getFirstName());
        customer1.setLastName(customer.getLastName());
        customer1.setStreet(customer.getStreet());
        customer1.setAddress(customer.getAddress());
        customer1.setCity(customer.getCity());
        customer1.setState(customer.getState());
        customer1.setEmail(customer.getEmail());
        customer1.setPhone(customer.getPhone());
        return customerRepository.save(customer1);
    }

    @Override
    public void deleteCustomer(int id) {
        customerRepository.deleteById(id);
    }
}
