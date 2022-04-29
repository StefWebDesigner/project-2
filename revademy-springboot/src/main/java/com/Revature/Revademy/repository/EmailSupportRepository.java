package com.Revature.Revademy.repository;

import com.Revature.Revademy.entities.EmailSupport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmailSupportRepository extends JpaRepository<EmailSupport, Integer> {
}
