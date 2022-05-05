package com.Revature.Revademy.repository;

import com.Revature.Revademy.entities.Report;
import com.Revature.Revademy.entities.ReportStats;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ReportStatsRepository  extends JpaRepository<ReportStats, Integer> {
}
