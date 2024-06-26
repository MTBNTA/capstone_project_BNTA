package com.example.HR_System_Backend.repositories;

import com.example.HR_System_Backend.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    Optional<Employee> findByWorkEmail(String workEmail);
}
