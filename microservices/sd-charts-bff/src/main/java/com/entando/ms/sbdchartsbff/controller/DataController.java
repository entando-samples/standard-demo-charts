package com.entando.ms.sbdchartsbff.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.security.RolesAllowed;
import java.util.Random;

@RestController
public class DataController {
    @CrossOrigin
    @GetMapping("v1/api/data")
    //@RolesAllowed("role1")
    public MyResponse getChartData() {
        int[] data = new Random().ints(6, 1, 8).toArray();
        return new MyResponse(data);
    }

    public static class MyResponse {
        private final int[] payload;

        public MyResponse(int[] payload) {
            this.payload = payload;
        }

        public int[] getPayload() {
            return payload;
        }
    }
}

