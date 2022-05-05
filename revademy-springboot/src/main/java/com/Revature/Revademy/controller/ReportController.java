package com.Revature.Revademy.controller;

import com.Revature.Revademy.entities.Report;
import com.Revature.Revademy.entities.ReportStats;
import com.Revature.Revademy.service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(maxAge = 3600, origins = "")
@RequestMapping("/report")
public class ReportController {

    private final ReportService reportService;

    @Autowired
    public ReportController(ReportService reportService) {
        this.reportService = reportService;
    }


    @RequestMapping(value = "/postreport", method = RequestMethod.POST)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Report> generateReport(@RequestBody Report report) {
        return ResponseEntity.ok(reportService.generateReport(report));
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<Report>> getAllReports() {
        return ResponseEntity.ok(reportService.getAllReport());
    }


    @RequestMapping(value = "/{caseId}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Report> getReportById(@PathVariable Integer caseId) {
        return ResponseEntity.ok(reportService.getReportById(caseId));
    }

    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<String> deleteReport(@RequestParam Integer caseId) {
        return ResponseEntity.ok(reportService.deleteReport(caseId));
    }

    @RequestMapping(value = "/commonlocation", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<String> getMostReportedLocation() {
        return ResponseEntity.ok(reportService.getMostReportedLocation());
    }


    @RequestMapping(value = "/countlocation", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Integer> getCountForMostReportedLocation() {
        return ResponseEntity.ok(reportService.getCountForMostReportedLocation());
    }

    //make a post of sumit fixed

//    @RequestMapping(value = "/fixedBugs", method = RequestMethod.POST)
//    @CrossOrigin(origins = "http://localhost:3000")
//    public ResponseEntity<Report> getCountedFixedIssues(@RequestBody Report report) {
//        return ResponseEntity.ok(reportService.getCountedFixedIssues(report));
//    }


    // make a get sumit fixed


}