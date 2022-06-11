
package com.newform.newform.form.controllers;;

import com.newform.newform.domain.person.models.Form;
import com.newform.newform.domain.person.services.FormService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.BDDMockito;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@SpringBootTest
@AutoConfigureMockMvc
@ExtendWith(SpringExtension.class)
public class FormControllerTest {

    @MockBean
    private FormService formService;

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void createPersonRequestSuccess() throws Exception {
        //Given
        Form form = new Form("Dre", "Logan", "21");
        form.setId(1l);
        BDDMockito.doReturn(form).when(formService).create(form);

        //When
        mockMvc.perform(MockMvcRequestBuilders.post("/signup")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(asJsonString(form)))
                .andExpect(MockMvcResultMatchers.status().isCreated());

        //Then


    }

    protected static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

}
