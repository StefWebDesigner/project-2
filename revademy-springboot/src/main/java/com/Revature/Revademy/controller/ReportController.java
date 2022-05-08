package com.Revature.Revademy.controller;

import com.Revature.Revademy.entities.Report;
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

    //FACT CONTROLLER SECTION


    @RequestMapping(value = "/counttotalreport", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Integer> getTotalReport() {
        return ResponseEntity.ok(reportService.getTotalReport());
    }

    @RequestMapping(value = "/counttotalhomepage", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Integer> getTotalHomepage() {
        return ResponseEntity.ok(reportService.getTotalHomepage());
    }

    @RequestMapping(value = "/counttotalactivitypage", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Integer> getTotalActivity() {
        return ResponseEntity.ok(reportService.getTotalActivity());
    }

    @RequestMapping(value = "/counttotaleventpage", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Integer> getTotalEventpage() {
        return ResponseEntity.ok(reportService.getTotalEventpage());
    }

    @RequestMapping(value = "/counttotalmatchinggame", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Integer> getTotalMatchinggame() {
        return ResponseEntity.ok(reportService.getTotalMatchinggame());
    }

    @RequestMapping(value = "/counttotalhangmangame", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Integer> getTotalHangmangame() {
        return ResponseEntity.ok(reportService.getTotalHangmangame());
    }

    @RequestMapping(value = "/counttotalcolorquizgame", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Integer> getTotalColorquizgame() {
        return ResponseEntity.ok(reportService.getTotalColorquizgame());
    }

    @RequestMapping(value = "/counttotalanimalgame", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Integer> getTotalAnimalgame() {
        return ResponseEntity.ok(reportService.getTotalAnimalgame());
    }

    @RequestMapping(value = "/counttotalsoundgame", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Integer> getTotalSoundgame() {
        return ResponseEntity.ok(reportService.getTotalSoundgame());
    }

    @RequestMapping(value = "/counttotaluserportal", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Integer> getTotalUserportale() {
        return ResponseEntity.ok(reportService.getTotalUserportale());
    }

    @RequestMapping(value = "/counttotalkidsportal", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Integer> getTotalKidsportal() {
        return ResponseEntity.ok(reportService.getTotalKidsportal());
    }





}