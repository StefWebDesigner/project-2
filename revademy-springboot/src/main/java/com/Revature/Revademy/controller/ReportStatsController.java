package com.Revature.Revademy.controller;

import com.Revature.Revademy.service.ReportStatsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReportStatsController {

    private final ReportStatsService reportStatsService;

    @Autowired
    public ReportStatsController(ReportStatsService reportStatsService) {
        this.reportStatsService = reportStatsService;
    }





}
