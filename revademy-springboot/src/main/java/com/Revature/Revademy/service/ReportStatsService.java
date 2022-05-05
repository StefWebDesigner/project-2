package com.Revature.Revademy.service;

import com.Revature.Revademy.repository.ReportStatsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReportStatsService {

    private final ReportStatsRepository reportStatsRepository;

    @Autowired
    public ReportStatsService(ReportStatsRepository reportStatsRepository) {
        this.reportStatsRepository = reportStatsRepository;
    }




}
