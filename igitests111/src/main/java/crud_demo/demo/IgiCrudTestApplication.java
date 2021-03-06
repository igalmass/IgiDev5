//package com.example.demo;
//
//import com.example.demo.entities.User;
//import com.example.demo.repositories.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.boot.SpringApplication;
//import org.springframework.boot.autoconfigure.SpringBootApplication;
//
//@SpringBootApplication
//public class IgiCrudTestApplication implements CommandLineRunner{
//	public static void main(String[] args) {
//		SpringApplication.run(IgiCrudTestApplication.class, args);
//	}
//
//	@Autowired
//	private UserRepository userRepository;
//
//	@Override
//	public void run(String... args) throws Exception {
//		userRepository.save(new User("one", "one"));
//		userRepository.save(new User("two", "two"));
//		userRepository.save(new User("Three", "Three"));
//		userRepository.save(new User("Four", "four"));
//		userRepository.save(new User("Five", "five"));
//	}
//}
