package com.crud.service;

import com.crud.model.Customer;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CustomerService {

    public Customer add(Customer customer);

    public List<Customer> getCustomer();

    public Customer getByid(int id);

    public Customer updateCustomer(int id , Customer customer);

    public void deleteCustomer(int id);
}
