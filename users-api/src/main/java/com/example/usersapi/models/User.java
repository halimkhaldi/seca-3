package com.example.usersapi.models;

import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor  @Getter @Setter
@Entity @Table(name = "USERS")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(name = "FIRST_NAME")
    private String firstName;

    @Column(name = "LAST_NAME")
    private String lastName;
    public User(){}
    public User(String first,String last){
        this.firstName=first;
        this.lastName=last;
    }
    public String getFirstName(){
        return this.firstName;
    }
    public String getLastName(){
        return this.lastName;
    }
    public void setFirstName(String a){
        this.firstName=a;
    }
    public void setLastName(String b){
         this.lastName=b;
    }

        public Long getId(){
        return this.id;
    }

}