package com.Revature.Revademy.repository;

import com.Revature.Revademy.entities.Report;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ReportRepository extends JpaRepository<Report, Integer> {

    @Query(value = "SELECT MAX(location_types) FROM report_model", nativeQuery = true)
    String mostReportedLocation();

    @Query(value = "SELECT COUNT(location_types) FROM report_model WHERE location_types = (SELECT MAX(location_types) FROM report_model)", nativeQuery = true)
    Integer CountForMostReportedLocation();

//    @Query
//    String mostReportedLocation();

}
