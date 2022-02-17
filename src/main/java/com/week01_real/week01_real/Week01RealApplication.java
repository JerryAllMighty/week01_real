package com.week01_real.week01_real;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.scheduling.annotation.EnableScheduling;

import javax.persistence.EntityListeners;

@EnableScheduling // 스프링 부트에서 스케줄러가 작동하게 합니다.
@EnableJpaAuditing // 시간 자동 변경이 가능하도록 합니다.
@SpringBootApplication
public class Week01RealApplication {

    public static void main(String[] args) {
        SpringApplication.run(Week01RealApplication.class, args);
    }

}