package com.Revature.Revademy.repository;

import com.Revature.Revademy.entities.EmailSupport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EmailSupportRepository extends JpaRepository<EmailSupport, Integer> {

    @Query(value = "SELECT COUNT(feeback_options_types) FROM email_support_model WHERE feeback_options_types = 'GREAT'", nativeQuery = true)
    Integer countGetTotalGreatScores();

    @Query(value = "SELECT COUNT(feeback_options_types) FROM email_support_model WHERE feeback_options_types = 'SOLID'", nativeQuery = true)
    Integer countGetTotalSolidScores();

    @Query(value = "SELECT COUNT(feeback_options_types) FROM email_support_model WHERE feeback_options_types = 'OK'", nativeQuery = true)
    Integer countGetTotalOkScores();

    @Query(value = "SELECT COUNT(feeback_options_types) FROM email_support_model WHERE feeback_options_types = 'NEEDSIMPROVEMENT'", nativeQuery = true)
    Integer countGetTotalNeedsImprovementScores();

    @Query(value = "SELECT COUNT(feeback_options_types) FROM email_support_model WHERE feeback_options_types = 'BAD'", nativeQuery = true)
    Integer countGetTotalBadScores();



}
