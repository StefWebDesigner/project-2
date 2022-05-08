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



//    FOLLOWING SQL IS FOR THE REPORT FACT GRAPH


    @Query(value = "SELECT COUNT(location_types) FROM report_model", nativeQuery = true)
    Integer countTotalReports();

    @Query(value = "SELECT COUNT(location_types) FROM report_model WHERE location_types = 'homepage'", nativeQuery = true)
    Integer countTotalHomepage();

    @Query(value = "SELECT COUNT(location_types) FROM report_model WHERE location_types = 'activitypage'", nativeQuery = true)
    Integer countTotalActivitypage();

    @Query(value = "SELECT COUNT(location_types) FROM report_model WHERE location_types = 'eventpage'", nativeQuery = true)
    Integer countTotalEventpage();

    @Query(value = "SELECT COUNT(location_types) FROM report_model WHERE location_types = 'matchinggame'", nativeQuery = true)
    Integer countTotalMatchinggame();

    @Query(value = "SELECT COUNT(location_types) FROM report_model WHERE location_types = 'hangmangame'", nativeQuery = true)
    Integer countTotalHangmangame();

    @Query(value = "SELECT COUNT(location_types) FROM report_model WHERE location_types = 'colorquizgame'", nativeQuery = true)
    Integer countTotalColorquizgame();

    @Query(value = "SELECT COUNT(location_types) FROM report_model WHERE location_types = 'animalgame'", nativeQuery = true)
    Integer countTotalAnimalgame();

    @Query(value = "SELECT COUNT(location_types) FROM report_model WHERE location_types = 'soundgame'", nativeQuery = true)
    Integer countTotalSoundgame();

    @Query(value = "SELECT COUNT(location_types) FROM report_model WHERE location_types = 'userportal'", nativeQuery = true)
    Integer countTotalUserportal();

    @Query(value = "SELECT COUNT(location_types) FROM report_model WHERE location_types = 'kidsportal'", nativeQuery = true)
    Integer countTotalKidsportal();

}
