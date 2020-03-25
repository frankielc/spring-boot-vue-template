package org.frankie.vue;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class Index {

    @GetMapping("/")
    @ResponseBody
    public String index() {
        return "hello from spring boot";
    }

}
